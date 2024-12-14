import React, { ReactNode, Children, cloneElement, isValidElement } from 'react';
import { cn } from '../../utils/cn';

interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredContainer({
  children,
  staggerDelay = 100,
  className
}: StaggeredContainerProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={cn('', className)}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            delay: (index + 1) * staggerDelay,
            key: index
          });
        }
        return child;
      })}
    </div>
  );
}