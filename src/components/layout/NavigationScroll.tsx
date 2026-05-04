'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

function motionReduced(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Smooth scroll to top on route changes, and to #hash targets when present.
 * Respects prefers-reduced-motion.
 */
export default function NavigationScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash?.replace(/^#/, '');
    const instant = motionReduced();

    if (hash) {
      const run = () => {
        const el = document.getElementById(decodeURIComponent(hash));
        if (!el) return;
        if (instant) {
          el.scrollIntoView({ block: 'start' });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(run));
      return;
    }

    if (instant) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}
