import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { ViewMode } from '../../types/equipment';
import EquipmentSearchBar from './EquipmentSearchBar';
import EquipmentViewToggle from './EquipmentViewToggle';

type EquipmentToolbarProps = {
  lang: Lang;
  searchValue: string;
  onSearchChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (viewMode: ViewMode) => void;
  onToggleFilters: () => void;
  activeFilterCount: number;
};

export default function EquipmentToolbar({
  lang,
  searchValue,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onToggleFilters,
  activeFilterCount,
}: EquipmentToolbarProps) {
  const t = equipmentContent[lang];

  return (
    <section className="mb-6 rounded-3xl border border-[#C2C7C9]/70 bg-white p-4 shadow-sm md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <EquipmentSearchBar
          lang={lang}
          value={searchValue}
          onChange={onSearchChange}
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onToggleFilters}
            className="
              inline-flex h-11 items-center justify-center rounded-2xl
              border border-[#C2C7C9] bg-white px-4 text-sm font-extrabold
              text-[#1B263B] transition hover:border-[#1B263B]
              lg:hidden
            "
          >
            {t.filters.openFilters}

            {activeFilterCount > 0 && (
              <span className="ms-2 rounded-full bg-[#F4D03F] px-2 py-0.5 text-xs">
                {activeFilterCount}
              </span>
            )}
          </button>

          <EquipmentViewToggle
            lang={lang}
            viewMode={viewMode}
            onChange={onViewModeChange}
          />
        </div>
      </div>
    </section>
  );
}