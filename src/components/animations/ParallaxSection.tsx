import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const offset = (rect.top + scrollPosition) * speed;

      contentRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={cn('relative overflow-hidden', className)}>
      <div ref={contentRef} className="transform will-change-transform">
        {children}
      </div>
    </div>
  );
}