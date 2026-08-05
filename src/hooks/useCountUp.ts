import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  duration?: number;
  threshold?: number;
}

export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  options?: UseCountUpOptions
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);
  const duration = options?.duration ?? 1800;
  const threshold = options?.threshold ?? 0.3;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, threshold]);

  return { ref, value };
}