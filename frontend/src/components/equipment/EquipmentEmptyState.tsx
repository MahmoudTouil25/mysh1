import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';

type EquipmentEmptyStateProps = {
  lang: Lang;
  hasFilters: boolean;
  onClearAll: () => void;
};

export default function EquipmentEmptyState({
  lang,
  hasFilters,
  onClearAll,
}: EquipmentEmptyStateProps) {
  const t = equipmentContent[lang];

  return (
    <div className="rounded-3xl border border-dashed border-[#C2C7C9] bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F9FA] text-2xl">
        ⛓️
      </div>

      <h2 className="mt-5 text-2xl font-black text-[#1B263B]">
        {t.page.noResults}
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-[#5C677D]">
        {lang === 'en'
          ? 'Try adjusting your search or removing some filters to see more equipment.'
          : 'جرّب تعديل البحث أو إزالة بعض الفلاتر لعرض المزيد من المعدات.'}
      </p>

      {hasFilters && (
        <button
          type="button"
          onClick={onClearAll}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
        >
          {t.filters.clearAll}
        </button>
      )}
    </div>
  );
}