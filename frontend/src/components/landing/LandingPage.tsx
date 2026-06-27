import type { Lang } from '../../i18n/sharedContent';
import HeroSection from './HeroSection';
import SpecializedServicesSection from './SpecializedServicesSection';
import OperationalReachSection from './OperationalReachSection';
import FaqSection from './FaqSection';

type LandingPageProps = {
  lang: Lang;
};

export default function LandingPage({ lang }: LandingPageProps) {
  return (
    <>
      <HeroSection lang={lang} />
      <SpecializedServicesSection lang={lang} />
      <OperationalReachSection lang={lang} />
      <FaqSection lang={lang} />
    </>
  );
}
