import type { Lang } from '../../i18n/sharedContent';
import HeroSection from './HeroSection';
import TrustedClientsSection from './TrustedClientsSection';
import EquipmentBrandsSection from './EquipmentBrandsSection';
import SpecializedServicesSection from './SpecializedServicesSection';
import OperationalReachSection from './OperationalReachSection';
import DeliveryMapSection from './DeliveryMapSection';
import StorySection from './StorySection';
import FaqSection from './FaqSection';

type LandingPageProps = {
  lang: Lang;
};

export default function LandingPage({ lang }: LandingPageProps) {
  return (
    <>
      <HeroSection lang={lang} />
      <SpecializedServicesSection lang={lang} />
      <TrustedClientsSection lang={lang} />
      <EquipmentBrandsSection lang={lang} />
      <OperationalReachSection lang={lang} />
      {/* <DeliveryMapSectionBeta lang={lang} /> */}
      {/* Original map version kept for rollback/testing:
      
      */}
      <DeliveryMapSection lang={lang} />
      <StorySection lang={lang} />
      
      <FaqSection lang={lang} />
    </>
  );
}
