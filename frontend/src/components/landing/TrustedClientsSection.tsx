import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type TrustedClientsSectionProps = {
  lang: Lang;
};

export default function TrustedClientsSection({
  lang,
}: TrustedClientsSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';
  const logos = [...t.trust.clients.items, ...t.trust.clients.items];

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="trusted-clients-title"
      className="bg-white"
    >
      <div className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2
            id="trusted-clients-title"
            className={[
              'max-w-4xl text-3xl font-black leading-tight text-[#062D31] md:text-5xl',
              isRtl ? 'text-right' : 'text-left',
            ].join(' ')}
          >
            {t.trust.clients.title}
          </h2>
        </div>
      </div>

      <div className="overflow-hidden bg-[#062D31] py-8 md:py-10">
        <div
          className={[
            'trusted-logo-track flex w-max items-center gap-4',
            isRtl ? 'trusted-logo-track-rtl' : '',
          ].join(' ')}
        >
          {logos.map((label, index) => (
            <ClientLogo
              key={`${label}-${index}`}
              label={label}
              ariaHidden={index >= t.trust.clients.items.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogo({
  label,
  ariaHidden,
}: {
  label: string;
  ariaHidden: boolean;
}) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="grid h-24 w-64 shrink-0 place-items-center rounded-lg border border-white/15 bg-white px-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:h-28 md:w-72"
    >
      <span className="text-base font-black leading-snug text-[#062D31] md:text-lg">
        {label}
      </span>
    </article>
  );
}
