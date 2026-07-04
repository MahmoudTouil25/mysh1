import type { ReactNode } from 'react';
import type { Category } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { EquipmentFilters } from '../../types/equipment';

type EquipmentFilterPanelProps = {
  lang: Lang;
  filters: EquipmentFilters;
  categories: Category[];
  brands: string[];
  models: string[];
  operatingWeights: string[];
  isMobileOpen: boolean;
  hasFilters: boolean;
  onClearAll: () => void;
  onCategoryChange: (categoryId: number | null) => void;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onOperatingWeightChange: (operatingWeight: string) => void;
};

export default function EquipmentFilterPanel({
  lang,
  filters,
  categories,
  brands,
  models,
  operatingWeights,
  isMobileOpen,
  hasFilters,
  onClearAll,
  onCategoryChange,
  onBrandChange,
  onModelChange,
  onOperatingWeightChange,
}: EquipmentFilterPanelProps) {
  const t = equipmentContent[lang];

  const getCategoryLabel = (category: Category): string => {
    return t.categories[category.name] ?? category.name;
  };

  return (
    <aside
      className={[
        'rounded-3xl border border-[#C2C7C9]/70 bg-white p-5 shadow-sm',
        'lg:sticky lg:top-28 lg:block lg:self-start',
        isMobileOpen ? 'block' : 'hidden',
      ].join(' ')}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-lg font-black text-[#1B263B]">
          {t.filters.title}
        </h2>

        {hasFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-sm font-extrabold text-[#855300] transition hover:underline"
          >
            {t.filters.clearAll}
          </button>
        )}
      </div>

      <div className="space-y-6">
        <FilterGroup title={t.filters.category}>
          <FilterSelect
            value={filters.categoryId ?? ''}
            onChange={(value) => onCategoryChange(value ? Number(value) : null)}
          >
            <option value="">{t.filters.allCategories}</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {getCategoryLabel(category)}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup title={t.filters.brand}>
          <FilterSelect value={filters.brand} onChange={onBrandChange}>
            <option value="">{t.filters.allBrands}</option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup title={t.filters.model}>
          <FilterSelect value={filters.model} onChange={onModelChange}>
            <option value="">{t.filters.allModels}</option>

            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup title={t.filters.operatingWeight}>
          <FilterSelect
            value={filters.operatingWeight}
            onChange={onOperatingWeightChange}
          >
            <option value="">{t.filters.allOperatingWeights}</option>

            {operatingWeights.map((operatingWeight) => (
              <option key={operatingWeight} value={operatingWeight}>
                {operatingWeight}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
      </div>
    </aside>
  );
}

type FilterGroupProps = {
  title: string;
  children: ReactNode;
};

function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {title}
      </h3>

      {children}
    </div>
  );
}

type FilterSelectProps = {
  value: string | number;
  onChange: (value: string) => void;
  children: ReactNode;
};

function FilterSelect({ value, onChange, children }: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="
        h-11 w-full appearance-auto rounded-2xl border border-[#C2C7C9]
        bg-[#F8F9FA] px-3 text-sm font-semibold text-[#1B263B]
        outline-none transition focus:border-[#1B263B] focus:bg-white
      "
    >
      {children}
    </select>
  );
}
