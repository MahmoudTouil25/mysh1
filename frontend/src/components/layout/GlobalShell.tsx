'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '@/i18n/sharedContent';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { EquipmentFavoritesProvider } from '@/contexts/EquipmentFavoritesContext';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

type GlobalShellProps = {
  children: React.ReactNode;
};

export default function GlobalShell({ children }: GlobalShellProps) {
  const [lang, setLang] = useState<Lang>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [dir, lang]);

  return (
    <LanguageProvider value={{ lang, setLang }}>
      <EquipmentFavoritesProvider>
        <div lang={lang} dir={dir} className="min-h-screen bg-[#F8F9FA]">
          <Navbar lang={lang} setLang={setLang} />
          <main>{children}</main>
          <Footer lang={lang} />
          <FloatingWhatsApp lang={lang} />
        </div>
      </EquipmentFavoritesProvider>
    </LanguageProvider>
  );
}
