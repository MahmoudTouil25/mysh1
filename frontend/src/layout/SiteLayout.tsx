import type { Lang } from '../i18n/sharedContent';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

type SiteLayoutProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  children?: React.ReactNode;
};

export default function SiteLayout({ lang, setLang, children }: SiteLayoutProps) {
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      {children}
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
