import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type DeliveryMapSectionBetaProps = {
  lang: Lang;
};

const markerPositions = [
  {
    labelClass: 'left-[58%] top-[45%]',
    dotClass: 'left-[55%] top-[50%]',
  },
  {
    labelClass: 'left-[23%] top-[60%]',
    dotClass: 'left-[27%] top-[66%]',
  },
  {
    labelClass: 'left-[72%] top-[30%]',
    dotClass: 'left-[69%] top-[36%]',
  },
];

export default function DeliveryMapSectionBeta({
  lang,
}: DeliveryMapSectionBetaProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="delivery-map"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden bg-[#062D31] px-4 py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_70%_74%,rgba(255,255,255,0.06),transparent_28%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="relative aspect-square min-h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-[#071B1E] shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:min-h-[520px] lg:min-h-0">
          <iframe
            title={t.deliveryMap.mapLabel}
            src="https://www.openstreetmap.org/export/embed.html?bbox=54.742%2C24.895%2C55.651%2C25.493&layer=mapnik&marker=25.2048%2C55.2708"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />

          {t.deliveryMap.markers.map((marker, index) => {
            const position = markerPositions[index] ?? markerPositions[0];

            return (
              <div key={marker}>
                <span
                  aria-hidden="true"
                  className={[
                    'absolute z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4D03F] shadow-[0_0_0_10px_rgba(244,208,63,0.14),0_0_24px_rgba(244,208,63,0.95)]',
                    position.dotClass,
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap text-xs font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]',
                    position.labelClass,
                  ].join(' ')}
                >
                  {marker}
                </span>
              </div>
            );
          })}
        </div>

        <aside className={isRtl ? 'text-right' : 'text-left'}>
          <div className="mb-8 h-0.5 w-full bg-[#F4D03F] shadow-[0_0_18px_rgba(244,208,63,0.45)]" />

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {t.strength.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-h2 tabular-nums tracking-[-0.01em] text-[#F4D03F]">
                  {stat.value}
                </p>
                <h3 className="mt-3 text-eyebrow uppercase leading-5 text-[#F4D03F]">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-body-lg leading-8 text-white/78">
            {t.deliveryMap.description}
          </p>

          <div className="mt-8 rounded-2xl border border-white/14 bg-white/8 px-5 py-4 text-body-sm font-semibold text-white/82 backdrop-blur-md">
            {t.deliveryMap.updateNote}
          </div>
        </aside>
      </div>
    </section>
  );
}
