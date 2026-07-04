import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type CardProps = ComponentPropsWithoutRef<'article'> & {
  variant?: 'light' | 'dark';
  interactive?: boolean;
};

export default function Card({
  variant = 'light',
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        'rounded-card border shadow-card',
        variant === 'light' &&
          'border-slate-200/80 bg-white text-brand-dark',
        variant === 'dark' &&
          'border-white/14 bg-white/[0.075] text-white backdrop-blur',
        interactive &&
          'transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
      {...props}
    />
  );
}
