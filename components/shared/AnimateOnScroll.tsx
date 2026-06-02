'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function AnimateOnScroll({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'translate(0,0)';
            }
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '-40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform =
    direction === 'left' ? 'translateX(-28px)' :
    direction === 'right' ? 'translateX(28px)' :
    direction === 'up' ? 'translateY(28px)' : 'none';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
