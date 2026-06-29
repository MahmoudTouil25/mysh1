import type { Lang } from '../../i18n/sharedContent';
import HeroSection from './HeroSection';
import SpecializedServicesSection from './SpecializedServicesSection';
import OperationalReachSection from './OperationalReachSection';
import DeliveryMapSection from './DeliveryMapSection';
import StorySection from './StorySection';
import FaqSection from './FaqSection';
import LandingCtaSection from './LandingCtaSection';

type LandingPageProps = {
  lang: Lang;
};

export default function LandingPage({ lang }: LandingPageProps) {
  return (
    <>
      <HeroSection lang={lang} />
      <SpecializedServicesSection lang={lang} />
      <OperationalReachSection lang={lang} />
      <DeliveryMapSection lang={lang} />
      <StorySection lang={lang} />
      <FaqSection lang={lang} />
      <LandingCtaSection lang={lang} />
    </>
  );
}
