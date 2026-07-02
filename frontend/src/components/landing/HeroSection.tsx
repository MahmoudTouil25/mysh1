import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type HeroSectionProps = {
  lang: Lang;
};

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = landingContent[lang];

  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#0E2A2C] px-4 pt-28 text-white md:min-h-[820px] md:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-equipment.jpg')" }}
      />

      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[#062D31]/65" />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.16),transparent_34%),linear-gradient(180deg,rgba(6,45,49,0.36),rgba(6,45,49,0.88))]"
      />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center justify-center">
        <div className="mx-auto max-w-[350px] text-center md:max-w-3xl">
          <h1 className="text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-4 max-w-[310px] text-base font-medium leading-6 text-white/80 md:mt-6 md:max-w-2xl md:text-xl md:leading-8">
            {t.hero.description}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-4 sm:max-w-sm md:flex-row md:justify-center md:max-w-none">
            <a
              href="#contact"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-[#855300] px-8 text-sm font-extrabold text-[#1B263B] shadow-[0_10px_22px_rgba(0,0,0,0.22)] transition hover:brightness-110 md:w-auto"
            >
              {t.hero.primaryCta}
            </a>

            <a
              href="#equipment"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-md border border-white/80 bg-white/5 px-8 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/12 md:w-auto"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
