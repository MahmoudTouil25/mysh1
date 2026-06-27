import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';
import ServiceCard from './ServiceCard';

type ServicesSpecializationsProps = {
  lang: Lang;
};

export default function ServicesSpecializations({
  lang,
}: ServicesSpecializationsProps) {
  const t = servicesContent[lang];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.specializations.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1B263B] md:text-5xl">
            {t.specializations.title}
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#F4D03F]" />

          <p className="mt-5 text-base leading-7 text-[#5C677D]">
            {t.specializations.description}
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.specializations.services.map((service) => (
            <ServiceCard
              key={service.title}
              lang={lang}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}