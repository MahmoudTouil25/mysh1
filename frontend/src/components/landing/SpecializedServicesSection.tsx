import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type SpecializedServicesSectionProps = {
  lang: Lang;
};

export default function SpecializedServicesSection({
  lang,
}: SpecializedServicesSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';
  const services = t.services.items;

  return (
    <section
      id="services"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#F8F9FA] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header
          className={[
            'mb-10 max-w-2xl',
            isRtl ? 'text-right' : 'text-left',
          ].join(' ')}
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.services.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#1B263B] md:text-5xl">
            {t.services.title}
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-[0_16px_40px_rgba(27,38,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(27,38,59,0.14)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#DEE3E5]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <span className="absolute end-4 top-4 rounded-full bg-[#DCEEEF] px-3 py-1 text-xs font-black uppercase text-[#1B263B] shadow-sm">
                  {service.badge}
                </span>
              </div>

              <div className={['p-6', isRtl ? 'text-right' : 'text-left'].join(' ')}>
                <h3 className="text-2xl font-black tracking-[-0.02em] text-[#1B263B]">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#5C677D]">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#1B263B]"
                >
                  {service.cta}
                  <span aria-hidden="true">{lang === 'ar' ? '←' : '→'}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
