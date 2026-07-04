import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'outline';
};

export default function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'button-label inline-flex min-h-12 items-center justify-center rounded-card px-6 text-sm font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2',
        variant === 'primary' &&
          'bg-brand-yellow text-brand-dark hover:brightness-95 focus-visible:ring-offset-brand-dark',
        variant === 'outline' &&
          'border-[1.5px] border-current bg-transparent hover:bg-white/5',
        className,
      )}
      {...props}
    />
  );
}
