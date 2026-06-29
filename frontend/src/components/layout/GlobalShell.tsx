'use client';

import { useState } from 'react';
import type { Lang } from '@/i18n/sharedContent';
import { LanguageProvider } from '@/i18n/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

type GlobalShellProps = {
  children: React.ReactNode;
};

export default function GlobalShell({ children }: GlobalShellProps) {
  const [lang, setLang] = useState<Lang>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageProvider value={{ lang, setLang }}>
      <div lang={lang} dir={dir} className="min-h-screen bg-[#F8F9FA]">
        <Navbar lang={lang} setLang={setLang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <FloatingWhatsApp lang={lang} />
      </div>
    </LanguageProvider>
  );
}
