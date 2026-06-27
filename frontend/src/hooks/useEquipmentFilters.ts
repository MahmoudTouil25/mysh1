import { useMemo, useState } from 'react';
import type { Category, Equipment } from '../types/equipment';
import {
  defaultEquipmentFilters,
  filterEquipment,
  getActiveEquipmentFilterCount,
  getUniqueEquipmentLocations,
  hasActiveEquipmentFilters,
  toggleStringFilterValue,
} from '../utils/equipmentFilters';
import type { EquipmentFilters, ViewMode } from '../types/equipment';

function createDefaultFilters(): EquipmentFilters {
  return {
    ...defaultEquipmentFilters,
    availability: [],
    condition: [],
  };
}

type UseEquipmentFiltersParams = {
  equipment: Equipment[];
  categories: Category[];
};

export function useEquipmentFilters({
  equipment,
  categories,
}: UseEquipmentFiltersParams) {
  const [filters, setFilters] = useState<EquipmentFilters>(
    createDefaultFilters,
  );

  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredEquipment = useMemo(() => {
    return filterEquipment(equipment, filters);
  }, [equipment, filters]);

  const locations = useMemo(() => {
    return getUniqueEquipmentLocations(equipment);
  }, [equipment]);

  const categoriesById = useMemo(() => {
    return new Map(categories.map((category) => [category.id, category]));
  }, [categories]);

  const activeFilterCount = useMemo(() => {
    return getActiveEquipmentFilterCount(filters);
  }, [filters]);

  const hasFilters = useMemo(() => {
    return hasActiveEquipmentFilters(filters);
  }, [filters]);

  const updateFilters = (partialFilters: Partial<EquipmentFilters>) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      ...partialFilters,
    }));
  };

  const setSearch = (search: string) => {
    updateFilters({ search });
  };

  const setCategoryId = (categoryId: number | null) => {
    updateFilters({ categoryId });
  };

  const toggleAvailability = (value: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      availability: toggleStringFilterValue(
        currentFilters.availability,
        value,
      ),
    }));
  };

  const toggleCondition = (value: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      condition: toggleStringFilterValue(currentFilters.condition, value),
    }));
  };

  const setLocation = (location: string) => {
    updateFilters({ location });
  };

  const setMinDailyRate = (minDailyRate: string) => {
    updateFilters({ minDailyRate });
  };

  const setMaxDailyRate = (maxDailyRate: string) => {
    updateFilters({ maxDailyRate });
  };

  const clearAllFilters = () => {
    setFilters(createDefaultFilters());
  };

  const removeFilter = (
    type: keyof EquipmentFilters,
    value?: string | number,
  ) => {
    setFilters((currentFilters) => {
      if (type === 'availability' && typeof value === 'string') {
        return {
          ...currentFilters,
          availability: currentFilters.availability.filter(
            (item) => item !== value,
          ),
        };
      }

      if (type === 'condition' && typeof value === 'string') {
        return {
          ...currentFilters,
          condition: currentFilters.condition.filter((item) => item !== value),
        };
      }

      return {
        ...currentFilters,
        [type]: createDefaultFilters()[type],
      };
    });
  };

  const openMobileFilters = () => {
    setIsMobileFiltersOpen(true);
  };

  const closeMobileFilters = () => {
    setIsMobileFiltersOpen(false);
  };

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen((currentValue) => !currentValue);
  };

  return {
    filters,
    setFilters,
    updateFilters,

    filteredEquipment,
    locations,
    categoriesById,

    viewMode,
    setViewMode,

    isMobileFiltersOpen,
    setIsMobileFiltersOpen,
    openMobileFilters,
    closeMobileFilters,
    toggleMobileFilters,

    activeFilterCount,
    hasFilters,

    setSearch,
    setCategoryId,
    toggleAvailability,
    toggleCondition,
    setLocation,
    setMinDailyRate,
    setMaxDailyRate,

    clearAllFilters,
    removeFilter,
  };
}