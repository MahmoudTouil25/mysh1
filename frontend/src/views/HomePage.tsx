'use client';

import type { Lang } from '../i18n/sharedContent';
import { useLanguage } from '../i18n/LanguageContext';
import LandingPage from '../components/landing/LandingPage';

type HomePageProps = {
  lang?: Lang;
};

export default function HomePage({ lang: fallbackLang = 'en' }: HomePageProps) {
  const { lang } = useLanguage(fallbackLang);

  return <LandingPage lang={lang} />;
}
