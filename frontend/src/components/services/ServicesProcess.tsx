import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';

type ServicesProcessProps = {
  lang: Lang;
};

export default function ServicesProcess({ lang }: ServicesProcessProps) {
  const t = servicesContent[lang];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.process.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1B263B] md:text-5xl">
            {t.process.title}
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#F4D03F]" />

          <p className="mt-5 text-base leading-7 text-[#5C677D]">
            {t.process.description}
          </p>
        </header>

        <div className="relative max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-0 start-5 top-0 hidden w-px bg-[#C2C7C9] sm:block"
          />

          <div className="space-y-5">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="relative grid gap-4 rounded-3xl border border-[#C2C7C9]/70 bg-white p-5 shadow-sm transition hover:shadow-[0_16px_40px_rgba(27,38,59,0.08)] sm:grid-cols-[48px_1fr]"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1B263B] text-sm font-black text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#1B263B]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5C677D]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}