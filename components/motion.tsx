'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    const alignToHero = () => {
      const hero = document.querySelector<HTMLElement>('.inner-hero');
      if (!hero) {
        window.scrollTo(0, 0);
        return;
      }
      const headerSpace = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--floating-header-space',
        ),
      );
      const top = hero.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, Math.max(0, top - (Number.isFinite(headerSpace) ? headerSpace : 0)));
    };
    requestAnimationFrame(alignToHero);
    const timeout = window.setTimeout(alignToHero, 120);
    return () => window.clearTimeout(timeout);
  }, [path]);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  return null;
}
