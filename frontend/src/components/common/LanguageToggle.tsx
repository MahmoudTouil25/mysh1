'use client';

import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';

type LanguageToggleProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  variant?: 'dark' | 'light';
};

export default function LanguageToggle({
  lang,
  setLang,
  variant = 'dark',
}: LanguageToggleProps) {
  const t = sharedContent[lang];

  const isDark = variant === 'dark';

  return (
    <button
      type="button"
      aria-label={t.nav.changeLanguage}
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className={[
        'inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        isDark
            ? 'border border-white/15 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md focus-visible:ring-white focus-visible:ring-offset-[#1B263B]'
            : 'bg-[#1B263B]/10 text-[#1B263B] hover:bg-[#1B263B]/15 focus-visible:ring-[#1B263B] focus-visible:ring-offset-white'
      ].join(' ')}
    >
      {lang === 'en' ? 'AR' : 'EN'}
    </button>
  );
}
