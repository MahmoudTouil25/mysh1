import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: 'eyebrow' | 'category';
};

export default function Badge({
  variant = 'eyebrow',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        variant === 'eyebrow' &&
          'text-eyebrow uppercase text-brand-yellow',
        variant === 'category' &&
          'inline-flex rounded-full bg-black/60 px-3 py-1.5 text-eyebrow uppercase text-white backdrop-blur-md',
        className,
      )}
      {...props}
    />
  );
}
