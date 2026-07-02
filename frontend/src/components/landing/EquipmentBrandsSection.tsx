import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type EquipmentBrandsSectionProps = {
  lang: Lang;
};

export default function EquipmentBrandsSection({
  lang,
}: EquipmentBrandsSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="equipment-brands-title"
      className="bg-[#062D31] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <header className={isRtl ? 'text-right' : 'text-left'}>
          <p className="text-xs font-extrabold uppercase text-[#F4D03F]">
            {t.trust.brands.eyebrow}
          </p>
          <h2
            id="equipment-brands-title"
            className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-5xl"
          >
            {t.trust.brands.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            {t.trust.brands.description}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
          {t.trust.brands.items.map((brand) => (
            <BrandTile key={brand} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandTile({ brand }: { brand: string }) {
  return (
    <article className="grid min-h-28 place-items-center rounded-lg border border-white/14 bg-white text-center shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
      <span className="px-3 text-xl font-black text-[#062D31]">{brand}</span>
    </article>
  );
}
