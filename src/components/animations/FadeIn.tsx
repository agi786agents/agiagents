import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0,
  className 
}: FadeInProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0 transition-all duration-700 ease-out',
        directionClasses[direction],
        isIntersecting && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}