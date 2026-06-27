import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';

type EquipmentResultsHeaderProps = {
  lang: Lang;
  resultCount: number;
  totalCount: number;
};

export default function EquipmentResultsHeader({
  lang,
  resultCount,
  totalCount,
}: EquipmentResultsHeaderProps) {
  const t = equipmentContent[lang];

  const resultsLabel =
    resultCount === 1 ? t.page.resultFound : t.page.resultsFound;

  return (
    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-extrabold text-[#5C677D]">
        <span className="text-[#1B263B]">{resultCount}</span> {resultsLabel}
      </p>

      {totalCount > 0 && resultCount !== totalCount && (
        <p className="text-sm font-semibold text-[#5C677D]">
          {resultCount} / {totalCount}
        </p>
      )}
    </div>
  );
}