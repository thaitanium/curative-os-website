/**
 * Shared motion tokens.
 *
 * Single source of truth for easing and duration so CSS and Framer Motion
 * can't drift apart. The CSS mirrors of these values live in globals.css
 * as --ease-out / --ease-in-out — change both together.
 */

/** Strong ease-out for UI entrances and exits. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Strong ease-in-out for elements moving/morphing on screen. */
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/** Seconds. UI motion stays under 0.3s; marketing reveals are allowed to run longer. */
export const DURATION = {
  press: 0.16,
  chevron: 0.2,
  panel: 0.25,
  item: 0.4,
  reveal: 0.5,
  section: 0.6,
} as const;

/** Stagger step between items in a group entrance. */
export const STAGGER_STEP = 0.05;

/**
 * Caps how far a stagger tail can run. Without this a 12-item list makes the
 * last item wait 12 * step before it appears.
 */
export const STAGGER_MAX_INDEX = 5;

export function staggerDelay(index: number) {
  return Math.min(index, STAGGER_MAX_INDEX) * STAGGER_STEP;
}
