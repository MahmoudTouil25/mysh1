import type { Lang } from '../i18n/sharedContent';

import ServicesHero from '../components/services/ServicesHero';
import ServicesSpecializations from '../components/services/ServicesSpecializations';
import ServicesResilience from '../components/services/ServicesResilience';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesFaq from '../components/services/ServicesFaq';
import ServicesCTA from '../components/services/ServicesCTA';

type ServicesPageProps = {
  lang: Lang;
};

export default function ServicesPage({ lang }: ServicesPageProps) {
  return (
    <div
      id="services"
      className="min-h-screen bg-[#F8F9FA] text-[#1B263B]"
    >
      <ServicesHero lang={lang} />

      <ServicesSpecializations lang={lang} />

      <ServicesResilience lang={lang} />

      <ServicesProcess lang={lang} />

      <ServicesFaq lang={lang} />

      <ServicesCTA lang={lang} />
    </div>
  );
}
