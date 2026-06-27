import type { ReactNode } from 'react';
import type { Category } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { EquipmentFilters } from '../../types/equipment';

type EquipmentFilterPanelProps = {
  lang: Lang;
  filters: EquipmentFilters;
  categories: Category[];
  locations: string[];
  isMobileOpen: boolean;
  hasFilters: boolean;
  onClearAll: () => void;
  onCategoryChange: (categoryId: number | null) => void;
  onAvailabilityToggle: (value: string) => void;
  onConditionToggle: (value: string) => void;
  onLocationChange: (location: string) => void;
  onMinDailyRateChange: (value: string) => void;
  onMaxDailyRateChange: (value: string) => void;
};

const availabilityOptions = [
  'available',
  'on_rent',
  'maintenance',
  'unavailable',
];

const conditionOptions = ['excellent', 'good', 'fair'];

export default function EquipmentFilterPanel({
  lang,
  filters,
  categories,
  locations,
  isMobileOpen,
  hasFilters,
  onClearAll,
  onCategoryChange,
  onAvailabilityToggle,
  onConditionToggle,
  onLocationChange,
  onMinDailyRateChange,
  onMaxDailyRateChange,
}: EquipmentFilterPanelProps) {
  const t = equipmentContent[lang];

  const getCategoryLabel = (category: Category): string => {
    return t.categories[category.name] ?? category.name;
  };

  const getAvailabilityLabel = (value: string): string => {
    return t.availability[value] ?? value;
  };

  const getConditionLabel = (value: string): string => {
    return t.condition[value] ?? value;
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
          <select
            value={filters.categoryId ?? ''}
            onChange={(event) =>
              onCategoryChange(
                event.target.value ? Number(event.target.value) : null,
              )
            }
            className="
              h-11 w-full appearance-auto rounded-2xl border border-[#C2C7C9]
              bg-[#F8F9FA] px-3 text-sm font-semibold text-[#1B263B]
              outline-none transition focus:border-[#1B263B] focus:bg-white
            "
          >
            <option value="">{t.filters.allCategories}</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {getCategoryLabel(category)}
              </option>
            ))}
          </select>
        </FilterGroup>

        <FilterGroup title={t.filters.availability}>
          <div className="space-y-2">
            {availabilityOptions.map((option) => (
              <CheckboxFilter
                key={option}
                label={getAvailabilityLabel(option)}
                checked={filters.availability.includes(option)}
                onChange={() => onAvailabilityToggle(option)}
              />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title={t.filters.condition}>
          <div className="space-y-2">
            {conditionOptions.map((option) => (
              <CheckboxFilter
                key={option}
                label={getConditionLabel(option)}
                checked={filters.condition.includes(option)}
                onChange={() => onConditionToggle(option)}
              />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title={t.filters.location}>
          <select
            value={filters.location}
            onChange={(event) => onLocationChange(event.target.value)}
            className="
              h-11 w-full appearance-auto rounded-2xl border border-[#C2C7C9]
              bg-[#F8F9FA] px-3 text-sm font-semibold text-[#1B263B]
              outline-none transition focus:border-[#1B263B] focus:bg-white
            "
          >
            <option value="">{t.filters.allLocations}</option>

            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </FilterGroup>

        <FilterGroup title={t.filters.dailyRate}>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              min="0"
              value={filters.minDailyRate}
              onChange={(event) => onMinDailyRateChange(event.target.value)}
              placeholder={t.filters.min}
              className="
                h-11 rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA]
                px-3 text-sm font-semibold text-[#1B263B] outline-none
                transition placeholder:text-[#5C677D]/70
                focus:border-[#1B263B] focus:bg-white
              "
            />

            <input
              type="number"
              min="0"
              value={filters.maxDailyRate}
              onChange={(event) => onMaxDailyRateChange(event.target.value)}
              placeholder={t.filters.max}
              className="
                h-11 rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA]
                px-3 text-sm font-semibold text-[#1B263B] outline-none
                transition placeholder:text-[#5C677D]/70
                focus:border-[#1B263B] focus:bg-white
              "
            />
          </div>
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

type CheckboxFilterProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function CheckboxFilter({ label, checked, onChange }: CheckboxFilterProps) {
  return (
    <label
      className="
        flex cursor-pointer items-center gap-3 rounded-2xl px-2 py-1.5
        text-sm font-semibold text-[#1B263B] transition hover:bg-[#F8F9FA]
      "
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-[#C2C7C9] accent-[#1B263B]"
      />

      <span>{label}</span>
    </label>
  );
}
