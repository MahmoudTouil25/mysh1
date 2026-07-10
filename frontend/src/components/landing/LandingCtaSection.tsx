import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import { buildFavoritesContactHref } from '../../utils/contactQuote';
import Button from '../ui/Button';

type LandingCtaSectionProps = {
  lang: Lang;
};

export default function LandingCtaSection({ lang }: LandingCtaSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-slate-50 px-4 py-section-mobile md:py-section"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-card bg-gradient-to-br from-yellow-300 to-brand-yellow px-6 py-12 text-center text-brand-darker shadow-xl shadow-yellow-900/10 md:px-10">
          <h2 className="text-h2 md:text-h1">
            {t.cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-prose text-body text-brand-darker/75">
            {t.cta.description}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={buildFavoritesContactHref()}
              variant="outline"
              className="w-full border-brand-dark bg-brand-dark text-white hover:bg-brand-darker sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="grid h-4 w-4 place-items-center rounded-sm border border-white/70 text-[0.625rem] leading-none"
              >
                W
              </span>
              {t.cta.whatsappCta}
            </Button>

            <Button
              href={buildFavoritesContactHref()}
              variant="outline"
              className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark/5 sm:w-auto"
            >
              {t.cta.emailCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
