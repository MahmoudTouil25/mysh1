import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type LandingCtaSectionProps = {
  lang: Lang;
};

export default function LandingCtaSection({ lang }: LandingCtaSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#F5FAFC] px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-[#F9A91A] px-6 py-12 text-center text-[#101719] shadow-[0_18px_45px_rgba(133,83,0,0.14)] md:px-10">
          <h2 className="text-2xl font-black leading-tight md:text-4xl">
            {t.cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-[#101719]/75 md:text-base md:leading-7">
            {t.cta.description}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={t.cta.whatsappHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#062D31] px-5 text-sm font-extrabold text-white transition hover:bg-[#0E3C43]"
            >
              <span
                aria-hidden="true"
                className="grid h-4 w-4 place-items-center rounded-sm border border-white/70 text-[10px] leading-none"
              >
                W
              </span>
              {t.cta.whatsappCta}
            </a>

            <a
              href={t.cta.emailHref}
              className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-extrabold text-[#101719] underline-offset-4 transition hover:underline"
            >
              {t.cta.emailCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
