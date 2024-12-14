import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 700,
  className
}: SlideInProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2
  });

  const initialPosition = direction === 'left' ? '-100%' : '100%';

  return (
    <div
      ref={elementRef}
      className={cn('opacity-0 transition-all ease-out', className)}
      style={{
        transform: `translateX(${isIntersecting ? '0' : initialPosition})`,
        opacity: isIntersecting ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}