import type { Category, Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';
import EquipmentGrid from '../equipment/EquipmentGrid';

type EquipmentRelatedSectionProps = {
  lang: Lang;
  relatedEquipment: Equipment[];
  categoriesById: Map<number, Category>;
  formatCurrency: (value: number) => string;
};

export default function EquipmentRelatedSection({
  lang,
  relatedEquipment,
  categoriesById,
  formatCurrency,
}: EquipmentRelatedSectionProps) {
  const t = equipmentDetailContent[lang];

  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          {t.related.eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1B263B] md:text-4xl">
          {t.related.title}
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-[#5C677D]">
          {t.related.description}
        </p>
      </div>

      {relatedEquipment.length > 0 ? (
        <EquipmentGrid
          lang={lang}
          equipment={relatedEquipment}
          categoriesById={categoriesById}
          formatCurrency={formatCurrency}
        />
      ) : (
        <div className="rounded-3xl border border-dashed border-[#C2C7C9] bg-white p-8 text-center text-sm font-bold text-[#5C677D] shadow-sm">
          {t.related.empty}
        </div>
      )}
    </section>
  );
}