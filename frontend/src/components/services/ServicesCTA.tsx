import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';

type ServicesCTAProps = {
  lang: Lang;
};

export default function ServicesCTA({ lang }: ServicesCTAProps) {
  const t = servicesContent[lang];

  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1B263B] p-8 text-white shadow-[0_24px_70px_rgba(27,38,59,0.22)] md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.18),transparent_36%)]"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F4D03F]">
                MYSH
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                {t.cta.title}
              </h2>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/70">
                {t.cta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={t.cta.primaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F4D03F] px-6 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
              >
                {t.cta.primaryCta}
                <span aria-hidden="true" className="ms-2">
                  {lang === 'ar' ? '←' : '→'}
                </span>
              </a>

              <a
                href={t.cta.secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                {t.cta.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}