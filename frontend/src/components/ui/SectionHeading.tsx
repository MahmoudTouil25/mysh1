import { cn } from '@/lib/cn';
import Badge from './Badge';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  align?: 'start' | 'center';
  inverse?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = 'start',
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <Badge variant="eyebrow">{eyebrow}</Badge>}
      <h2
        id={id}
        className={cn(
          'mt-4 text-h2 md:text-h1',
          inverse ? 'text-white' : 'text-brand-dark',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-body-lg',
            inverse ? 'text-white/70' : 'text-gray-500',
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
