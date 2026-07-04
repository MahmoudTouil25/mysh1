import type { Config } from 'tailwindcss';

const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B2B26',
          darker: '#071F1B',
          yellow: '#F5B92E',
          'yellow-tint': 'rgba(245,185,46,0.08)',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 24px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        card: '12px',
      },
      spacing: {
        section: '120px',
        'section-mobile': '64px',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      fontSize: {
        display: [
          '4.5rem',
          {
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        h1: [
          '3rem',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        h2: [
          '2.25rem',
          {
            lineHeight: '1.15',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],
        eyebrow: [
          '0.75rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.12em',
            fontWeight: '600',
          },
        ],
        'body-lg': [
          '1.125rem',
          {
            lineHeight: '1.65',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        body: [
          '1rem',
          {
            lineHeight: '1.6',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
      },
    },
  },
} satisfies Config;

export default config;
