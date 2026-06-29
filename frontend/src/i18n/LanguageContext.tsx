'use client';

import { createContext, useContext } from 'react';
import type { Lang } from './sharedContent';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  value,
  children,
}: {
  value: LanguageContextValue;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(fallbackLang: Lang = 'en'): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (context) {
    return context;
  }

  return {
    lang: fallbackLang,
    setLang: () => undefined,
  };
}
