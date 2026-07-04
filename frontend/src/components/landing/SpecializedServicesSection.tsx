import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import { servicesContent } from '../../i18n/servicesContent';
import ServiceCard from '../services/ServiceCard';
import SectionHeading from '../ui/SectionHeading';

type SpecializedServicesSectionProps = {
  lang: Lang;
};

export default function SpecializedServicesSection({
  lang,
}: SpecializedServicesSectionProps) {
  const t = landingContent[lang];
  const servicesText = servicesContent[lang];
  const isRtl = lang === 'ar';
  const services = servicesText.specializations.services.slice(0, 3);

  return (
    <section
      id="services"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-slate-50 px-4 py-section-mobile md:py-section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          className={[
            'mb-10 max-w-2xl',
            isRtl ? 'text-right' : 'text-left',
          ].join(' ')}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              lang={lang}
              service={service}
              href="/equipment"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
