import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import Button from '../ui/Button';

type HeroSectionProps = {
  lang: Lang;
};

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="home"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative isolate min-h-[760px] overflow-hidden bg-brand-dark px-4 pt-28 text-white md:min-h-[820px] md:pt-36"
    >
      <video
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-equipment.jpg"
      >
        <source src="/mysh.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[#062D31]/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.16),transparent_34%),linear-gradient(180deg,rgba(6,45,49,0.28),rgba(6,45,49,0.88))]"
      />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center justify-center">
        <div className="mx-auto max-w-[350px] text-center md:max-w-3xl">
          <p className="mx-auto mb-5 inline-flex max-w-full rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-center text-eyebrow uppercase text-brand-yellow backdrop-blur-sm">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-h1 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-display">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-prose text-body-lg text-white/80">
            {t.hero.description}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-4 sm:max-w-sm md:flex-row md:justify-center md:max-w-none">
            <Button
              href="#contact"
              className="min-h-14 w-full px-8 shadow-[0_10px_22px_rgba(0,0,0,0.22)] md:w-auto"
            >
              {t.hero.primaryCta}
            </Button>

            <Button
              href="/equipment"
              variant="outline"
              className="min-h-14 w-full border-white/80 px-8 font-bold text-white backdrop-blur-sm md:w-auto"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
