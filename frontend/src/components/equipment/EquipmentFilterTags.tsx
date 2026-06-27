import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { Category, EquipmentFilters } from '../../types/equipment';
type EquipmentFilterTagsProps = {
  lang: Lang;
  filters: EquipmentFilters;
  categoriesById: Map<number, Category>;
  hasFilters: boolean;
  onRemoveFilter: (type: keyof EquipmentFilters, value?: string | number) => void;
  onClearAll: () => void;
};

export default function EquipmentFilterTags({
  lang,
  filters,
  categoriesById,
  hasFilters,
  onRemoveFilter,
  onClearAll,
}: EquipmentFilterTagsProps) {
  const t = equipmentContent[lang];

  if (!hasFilters) {
    return null;
  }

  const getCategoryLabel = (categoryId: number): string => {
    const category = categoriesById.get(categoryId);

    if (!category) {
      return String(categoryId);
    }

    return t.categories[category.name] ?? category.name;
  };

  const getAvailabilityLabel = (value: string): string => {
    return t.availability[value] ?? value;
  };

  const getConditionLabel = (value: string): string => {
    return t.condition[value] ?? value;
  };

  return (
    <section
      className="mb-6 flex flex-wrap items-center gap-2"
      aria-label={t.filters.activeFilters}
    >
      <span className="text-sm font-extrabold text-[#5C677D]">
        {t.filters.activeFilters}:
      </span>

      {filters.search.trim() && (
        <FilterChip
          label={`${t.tags.search}: ${filters.search}`}
          onRemove={() => onRemoveFilter('search')}
        />
      )}

      {filters.categoryId !== null && (
        <FilterChip
          label={`${t.tags.category}: ${getCategoryLabel(filters.categoryId)}`}
          onRemove={() => onRemoveFilter('categoryId')}
        />
      )}

      {filters.availability.map((value) => (
        <FilterChip
          key={value}
          label={`${t.tags.availability}: ${getAvailabilityLabel(value)}`}
          onRemove={() => onRemoveFilter('availability', value)}
        />
      ))}

      {filters.condition.map((value) => (
        <FilterChip
          key={value}
          label={`${t.tags.condition}: ${getConditionLabel(value)}`}
          onRemove={() => onRemoveFilter('condition', value)}
        />
      ))}

      {filters.location.trim() && (
        <FilterChip
          label={`${t.tags.location}: ${filters.location}`}
          onRemove={() => onRemoveFilter('location')}
        />
      )}

      {filters.minDailyRate.trim() && (
        <FilterChip
          label={`${t.tags.minRate}: ${filters.minDailyRate}`}
          onRemove={() => onRemoveFilter('minDailyRate')}
        />
      )}

      {filters.maxDailyRate.trim() && (
        <FilterChip
          label={`${t.tags.maxRate}: ${filters.maxDailyRate}`}
          onRemove={() => onRemoveFilter('maxDailyRate')}
        />
      )}

      <button
        type="button"
        onClick={onClearAll}
        className="ms-2 text-sm font-extrabold text-[#855300] underline-offset-4 transition hover:underline"
      >
        {t.filters.clearAll}
      </button>
    </section>
  );
}

type FilterChipProps = {
  label: string;
  onRemove: () => void;
};

function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="
        inline-flex items-center gap-2 rounded-full border border-[#C2C7C9]
        bg-white px-3 py-1.5 text-sm font-bold text-[#1B263B]
        shadow-sm transition hover:border-[#1B263B]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B263B]
        focus-visible:ring-offset-2
      "
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-base leading-none">
        ×
      </span>
    </button>
  );
}
