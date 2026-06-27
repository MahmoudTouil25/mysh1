import type { Lang } from '../i18n/sharedContent';
import LandingPage from '../components/landing/LandingPage';

type HomePageProps = {
  lang: Lang;
};

export default function HomePage({ lang }: HomePageProps) {
  return <LandingPage lang={lang} />;
}