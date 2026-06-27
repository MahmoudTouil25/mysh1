import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type SpecializedServicesSectionProps = {
  lang: Lang;
};

const imagePaths = [
  '/images/service-earthmoving.jpg',
  '/images/service-lifting.jpg',
  '/images/service-power.jpg',
];

export default function SpecializedServicesSection({
  lang,
}: SpecializedServicesSectionProps) {
  const t = landingContent[lang];

  return (
    <section id="services" className="bg-[#F8F9FA] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.services.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#1B263B] md:text-5xl">
            {t.services.title}
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-[0_16px_40px_rgba(27,38,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(27,38,59,0.14)]"
            >
              <div
                className="h-56 bg-[#DEE3E5] bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${imagePaths[index]})` }}
                role="img"
                aria-label={service.title}
              />

              <div className="p-6">
                <h3 className="text-2xl font-black tracking-[-0.02em] text-[#1B263B]">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#5C677D]">
                  {service.description}
                </p>

                <a
                  href="#equipment"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#1B263B]"
                >
                  {t.services.action}
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