'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function Motion() {
  const path = usePathname();
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
