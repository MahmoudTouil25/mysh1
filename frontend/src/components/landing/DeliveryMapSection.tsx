import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type DeliveryMapSectionProps = {
  lang: Lang;
};

const markerPositions = [
  'left-[53%] top-[44%]',
  'left-[42%] top-[57%]',
  'left-[58%] top-[39%]',
  'left-[29%] top-[72%]',
  'left-[79%] top-[43%]',
  'left-[64%] top-[34%]',
  'left-[73%] top-[22%]',
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
                d="M148 315 C174 278 208 250 250 226 C292 202 320 179 351 151 C390 116 439 86 489 63 C523 47 556 53 577 78 C594 98 588 116 569 129 C548 144 541 164 554 181 C571 205 618 199 637 224 C655 249 639 281 606 286 C574 291 548 276 514 279 C478 282 450 304 425 329 C394 360 350 379 300 379 C250 379 191 359 148 315 Z"
                fill="rgba(244,208,63,0.08)"
                stroke="#F4D03F"
                strokeWidth="4"
                strokeLinejoin="round"
                filter="url(#delivery-map-glow)"
              />
              <path
                d="M148 315 C174 278 208 250 250 226 C292 202 320 179 351 151 C390 116 439 86 489 63 C523 47 556 53 577 78 C594 98 588 116 569 129 C548 144 541 164 554 181 C571 205 618 199 637 224 C655 249 639 281 606 286 C574 291 548 276 514 279 C478 282 450 304 425 329 C394 360 350 379 300 379 C250 379 191 359 148 315 Z"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeDasharray="9 10"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M202 310 C258 271 323 217 386 160 C438 112 497 78 556 82"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeLinecap="round"
                strokeWidth="7"
              />
              <path
                d="M355 207 C423 191 481 196 535 221 C561 233 586 254 604 276"
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
                  'absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md md:gap-2 md:px-3 md:py-2 md:text-body-sm',
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
