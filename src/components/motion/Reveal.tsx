'use client';

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { DURATION, EASE_OUT } from '@/lib/motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

/** Inline custom properties consumed by the .reveal rule in globals.css. */
function revealVars(x: number, y: number, delay: number): CSSProperties {
  return {
    '--reveal-x': `${x}px`,
    '--reveal-y': `${y}px`,
    '--reveal-delay': `${Math.round(delay * 1000)}ms`,
  } as CSSProperties;
}

/**
 * Fades content in as it scrolls into view.
 *
 * The motion itself is a CSS transition (see .reveal); React only observes
 * intersection and flips data-visible. That keeps the animation on the
 * compositor and off the main thread, which matters on this page because the
 * reveals fire while screenshots are still decoding.
 *
 * prefers-reduced-motion is handled in CSS, so it applies even if this
 * renders before hydration.
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { x, y } = offsets[direction];

  return (
    <div
      ref={ref}
      data-visible={inView}
      style={revealVars(x, y, delay)}
      className={cn('reveal', className)}
    >
      {children}
    </div>
  );
}

/**
 * Staggers its StaggerItem children as the group scrolls into view.
 * Kept on Framer because the delay propagates through variants.
 */
export function Stagger({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion() ?? false;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.reveal, ease: EASE_OUT },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Counts up from 0 when scrolled into view. Renders prefix/suffix around the number. */
export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion() ?? false;
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    // Rapidly cycling digits are motion too — reduced-motion users get the
    // final number as soon as it scrolls into view.
    if (reduce) {
      if (inView) node.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return undefined;
    }
    return spring.on('change', (latest) => {
      node.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
    });
  }, [spring, prefix, suffix, reduce, inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
