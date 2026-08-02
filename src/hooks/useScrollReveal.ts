import { useEffect, useRef, type RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean }
): RefObject<T> {
  const ref = useRef<T>(null);
  const threshold = options?.threshold ?? 0.15;
  const once = options?.once ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    const elements = el.querySelectorAll('.reveal');
    elements.forEach((e) => observer.observe(e));

    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}
