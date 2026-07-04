import { useMemo, useState } from 'react';
import type { Category, Equipment } from '../types/equipment';
import {
  defaultEquipmentFilters,
  filterEquipment,
  getActiveEquipmentFilterCount,
  getUniqueEquipmentBrands,
  getUniqueEquipmentModels,
  getUniqueEquipmentOperatingWeights,
  groupEquipmentByName,
  hasActiveEquipmentFilters,
} from '../utils/equipmentFilters';
import type { EquipmentFilters, ViewMode } from '../types/equipment';

function createDefaultFilters(): EquipmentFilters {
  return {
    ...defaultEquipmentFilters,
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

  const brands = useMemo(() => {
    return getUniqueEquipmentBrands(equipment);
  }, [equipment]);

  const models = useMemo(() => {
    return getUniqueEquipmentModels(equipment);
  }, [equipment]);

  const operatingWeights = useMemo(() => {
    return getUniqueEquipmentOperatingWeights(equipment);
  }, [equipment]);

  const filterCategories = useMemo(() => {
    const displayedCategoryIds = new Set(
      groupEquipmentByName(equipment).map((item) => item.categoryId),
    );

    return categories.filter((category) => displayedCategoryIds.has(category.id));
  }, [categories, equipment]);

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

  const setBrand = (brand: string) => {
    updateFilters({ brand });
  };

  const setModel = (model: string) => {
    updateFilters({ model });
  };

  const setOperatingWeight = (operatingWeight: string) => {
    updateFilters({ operatingWeight });
  };

  const clearAllFilters = () => {
    setFilters(createDefaultFilters());
  };

  const removeFilter = (type: keyof EquipmentFilters) => {
    setFilters((currentFilters) => {
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
    brands,
    models,
    operatingWeights,
    filterCategories,
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
    setBrand,
    setModel,
    setOperatingWeight,

    clearAllFilters,
    removeFilter,
  };
}
