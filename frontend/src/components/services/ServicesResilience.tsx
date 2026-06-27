import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';

type ServicesResilienceProps = {
  lang: Lang;
};

export default function ServicesResilience({ lang }: ServicesResilienceProps) {
  const t = servicesContent[lang];

  return (
    <section className="bg-[#0E2A2C] px-4 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4D03F]">
            {t.resilience.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            {t.resilience.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            {t.resilience.description}
          </p>

          <div className="mt-8 space-y-4">
            {t.resilience.strengths.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F4D03F]/15 text-sm font-black text-[#F4D03F]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-4 shadow-2xl">
          <div className="overflow-hidden rounded-3xl bg-[#DEE3E5]">
            <img
              src={t.resilience.image}
              alt={t.resilience.title}
              className="h-72 w-full object-cover opacity-85 md:h-[420px]"
            />
          </div>

          <div className="mt-4 rounded-3xl bg-[#F4D03F] p-5 text-[#1B263B]">
            <p className="text-4xl font-black">{t.resilience.statValue}</p>

            <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.12em]">
              {t.resilience.statLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}