import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type DeliveryMapSectionProps = {
  lang: Lang;
};

const markerPositions = [
  'left-[49%] top-[32%]',
  'left-[35%] top-[59%]',
  'left-[62%] top-[43%]',
];

export default function DeliveryMapSection({ lang }: DeliveryMapSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="delivery-map"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#062D31] px-4 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header
          className={[
            'mb-8 max-w-3xl',
            isRtl ? 'text-right' : 'text-left',
          ].join(' ')}
        >
          <p className="text-eyebrow uppercase text-[#F4D03F]">
            {t.deliveryMap.eyebrow}
          </p>

          <h2 className="mt-4 text-h2 md:text-h1">
            {t.deliveryMap.title}
          </h2>

          <p className="mt-4 max-w-prose text-body-lg text-white/70">
            {t.deliveryMap.description}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-[#071B1E] shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,208,63,0.14),transparent_28%),radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%)]" />

            <svg
              viewBox="0 0 720 420"
              role="img"
              aria-label={t.deliveryMap.mapLabel}
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="delivery-map-grid"
                  width="48"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 48 0 L 0 0 0 48"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                </pattern>
                <filter id="delivery-map-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="720" height="420" fill="#071B1E" />
              <rect width="720" height="420" fill="url(#delivery-map-grid)" />

              <path
                d="M0 0 H262 C243 44 239 84 257 118 C275 154 257 199 229 230 C197 266 185 309 194 420 H0 Z"
                fill="#0E3C43"
                opacity="0.72"
              />
              <path
                d="M244 19 C226 62 236 102 255 129 C274 157 264 190 235 224 C205 259 194 305 203 420"
                fill="none"
                stroke="rgba(219,234,239,0.34)"
                strokeWidth="2"
              />

              <path
                d="M315 42 C353 36 399 49 425 80 C449 108 463 141 491 165 C522 191 551 217 559 252 C568 289 541 316 503 329 C460 344 421 338 386 358 C352 377 312 391 272 374 C233 358 213 323 217 282 C221 239 247 210 251 171 C256 121 274 68 315 42 Z"
                fill="rgba(244,208,63,0.08)"
                stroke="#F4D03F"
                strokeWidth="4"
                filter="url(#delivery-map-glow)"
              />
              <path
                d="M315 42 C353 36 399 49 425 80 C449 108 463 141 491 165 C522 191 551 217 559 252 C568 289 541 316 503 329 C460 344 421 338 386 358 C352 377 312 391 272 374 C233 358 213 323 217 282 C221 239 247 210 251 171 C256 121 274 68 315 42 Z"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeDasharray="9 10"
                strokeWidth="1.5"
              />

              <path
                d="M280 86 C340 119 392 163 444 217 C475 249 505 275 534 294"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeLinecap="round"
                strokeWidth="7"
              />
              <path
                d="M249 285 C310 278 361 252 413 224 C466 197 513 194 559 208"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>

            {t.deliveryMap.markers.map((marker, index) => (
              <div
                key={marker}
                className={[
                  'absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-body-sm font-semibold text-white shadow-lg backdrop-blur-md',
                  markerPositions[index],
                  isRtl ? 'flex-row-reverse' : '',
                ].join(' ')}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#F4D03F] shadow-[0_0_18px_rgba(244,208,63,0.9)]" />
                <span>{marker}</span>
              </div>
            ))}

            <div
              className={[
                'absolute bottom-5 z-10 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-body-sm font-medium text-white/85 backdrop-blur-md',
                isRtl ? 'right-5 text-right' : 'left-5 text-left',
              ].join(' ')}
            >
              {t.deliveryMap.mapLabel}
            </div>
          </div>

          <aside
            className={[
              'flex flex-col justify-center',
              isRtl ? 'text-right' : 'text-left',
            ].join(' ')}
          >
            <div className="border-s-2 border-[#F4D03F] ps-5">
              <p className="text-eyebrow uppercase text-[#F4D03F]">
                {t.strength.eyebrow}
              </p>
              <h3 className="mt-3 text-h3 text-white">
                {t.strength.title}
              </h3>
              <p className="mt-4 text-body text-white/70">
                {t.strength.note}
              </p>
            </div>

            <div className="mt-8 divide-y divide-[#F4D03F]/22">
              {t.strength.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={[
                    'py-5 first:pt-0 last:pb-0',
                    isRtl ? 'text-right' : 'text-left',
                  ].join(' ')}
                >
                  <p className="font-heading text-h2 tabular-nums tracking-[-0.01em] text-[#F4D03F]">
                    {stat.value}
                  </p>
                  <h4 className="mt-2 text-body font-semibold text-white">
                    {stat.label}
                  </h4>
                  <p className="mt-2 text-body-sm text-white/62">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
