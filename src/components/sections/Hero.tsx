'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { Screenshot } from '@/components/ui/Screenshot';

/**
 * Inline custom properties for the .reveal rule in globals.css.
 * The hero enters on mount rather than on scroll, so it uses the same CSS
 * transition with a mounted flag instead of an intersection observer.
 */
const enter = (delay: number, y = 24): CSSProperties =>
  ({ '--reveal-y': `${y}px`, '--reveal-delay': `${Math.round(delay * 1000)}ms` }) as CSSProperties;

export default function Hero() {
  const [entered, setEntered] = useState(false);
  useEffect(() => setEntered(true), []);
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border bg-background pt-16 text-foreground">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-20 pt-12 md:px-8 md:pt-24 lg:px-12 lg:pt-[11vh]">
        <div className="max-w-[590px]">
          <p data-visible={entered} style={enter(0)} className="reveal marketing-eyebrow">
            The operating system for curative investors
          </p>
          <h1
            data-visible={entered}
            style={enter(0.08)}
            className="reveal mt-6 max-w-[590px] text-balance text-5xl font-semibold leading-[0.98] tracking-normal md:text-7xl lg:text-[72px]"
          >
            Resolve title problems.{' '}
            <span className="text-accent">Move deals forward.</span>
          </h1>
          <p
            data-visible={entered}
            style={enter(0.16)}
            className="reveal mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            One focused workspace for heir research, outreach, legal tracking,
            underwriting, and every dollar deployed on a curative deal.
          </p>
          <div
            data-visible={entered}
            style={enter(0.24)}
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="https://app.curativeos.com/signup?plan=starter"
              className="press inline-flex h-11 items-center justify-center gap-2 rounded-md border border-accent bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Start your 7-day trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#product"
              className="press inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-foreground hover:bg-card"
            >
              <Play className="h-4 w-4 text-accent" aria-hidden="true" />
              See the product
            </a>
          </div>
          <div
            data-visible={entered}
            style={enter(0.32)}
            className="reveal mt-8 hidden items-center gap-3 sm:flex"
          >
            <div className="flex -space-x-1.5" aria-hidden="true">
              {['PT', 'RJ', 'AM', '+18'].map((label, index) => (
                <span
                  key={label}
                  className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-card text-[8px] font-bold text-muted-foreground"
                  style={index === 0 ? { backgroundColor: 'hsl(var(--accent) / 0.18)', color: 'hsl(var(--accent))' } : undefined}
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              <span className="font-semibold text-foreground">Built with active operators.</span>
              <br />Used by teams solving title every week.
            </p>
          </div>
        </div>

        <div
          data-visible={entered}
          style={enter(0.15, 48)}
          className="reveal absolute bottom-12 left-[45%] right-[-4%] hidden lg:block"
        >
          <Screenshot
            src="/screenshots/board.png"
            alt="Curative OS kanban board with deal cards moving through curative pipeline stages"
            priority
            className="shadow-[0_32px_100px_rgba(0,0,0,0.62)]"
          />
        </div>
        <div className="mt-14 lg:hidden">
          <Screenshot
            src="/screenshots/board.png"
            alt="Curative OS kanban board with deal cards moving through curative pipeline stages"
            priority
            className="shadow-[0_28px_80px_rgba(0,0,0,0.62)]"
          />
        </div>

        <a href="#workflow" className="absolute bottom-5 left-5 hidden items-center gap-2 text-[11px] font-medium text-muted-foreground md:left-8 lg:flex lg:left-12">
          <span className="text-accent">01</span>
          See the complete workflow
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
