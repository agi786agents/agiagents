import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0 scale-95 transition-all duration-700 ease-out',
        isIntersecting && 'opacity-100 scale-100',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}