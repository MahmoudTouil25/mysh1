import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';

type ServicesHeroProps = {
  lang: Lang;
};

export default function ServicesHero({ lang }: ServicesHeroProps) {
  const t = servicesContent[lang];

  return (
    <section className="relative overflow-hidden bg-[#0E2A2C] px-4 pb-20 pt-32 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mysh-fleet-rental-service.png')" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#062D31]/65"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.16),transparent_34%),linear-gradient(180deg,rgba(6,45,49,0.36),rgba(6,45,49,0.88))]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-[#F4D03F]/30 bg-[#F4D03F]/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#F4D03F]">
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            {t.hero.title}{' '}
            <span className="text-[#F4D03F]">{t.hero.highlightedTitle}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/75 md:text-lg md:leading-8">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={t.hero.primaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F4D03F] px-6 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
            >
              {t.hero.primaryCta}
              <span aria-hidden="true" className="ms-2">
                {lang === 'ar' ? '←' : '→'}
              </span>
            </a>

            <a
              href={t.hero.secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-6 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="overflow-hidden rounded-3xl bg-[#DEE3E5]">
              <img
                src="/images/mysh-fleet-rental-service.png"
                alt={t.hero.highlightedTitle}
                className="h-[430px] w-full object-cover opacity-90"
              />
            </div>

            <div className="absolute -bottom-6 start-8 rounded-3xl bg-[#F4D03F] p-5 text-[#1B263B] shadow-xl">
              <p className="text-3xl font-black">MYSH</p>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em]">
                Dubai · UAE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
