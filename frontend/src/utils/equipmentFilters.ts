import type { Equipment, EquipmentFilters } from '../types/equipment';


export type FilterTag =
  | {
      type: 'search';
      label: string;
      value: string;
    }
  | {
      type: 'categoryId';
      label: string;
      value: number;
    }
  | {
      type: 'availability';
      label: string;
      value: string;
    }
  | {
      type: 'condition';
      label: string;
      value: string;
    }
  | {
      type: 'location';
      label: string;
      value: string;
    }
  | {
      type: 'minDailyRate';
      label: string;
      value: string;
    }
  | {
      type: 'maxDailyRate';
      label: string;
      value: string;
    };

export const defaultEquipmentFilters: EquipmentFilters = {
  search: '',
  categoryId: null,
  availability: [],
  condition: [],
  location: '',
  minDailyRate: '',
  maxDailyRate: '',
};

export function normalizeSearchValue(value: unknown): string {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064B-\u065F]/g, '')
    .toLowerCase()
    .trim();
}

function toNumber(value: string): number | null {
  const cleanedValue = value.trim();

  if (!cleanedValue) {
    return null;
  }

  const parsedValue = Number(cleanedValue);

  return Number.isFinite(parsedValue) ? parsedValue : null;
}

export function getFirstEquipmentImage(images?: string): string | null {
  if (!images) {
    return null;
  }

  const firstImage = images
    .split(',')
    .map((image) => image.trim())
    .find(Boolean);

  return firstImage ?? null;
}

export function groupEquipmentByName(equipment: Equipment[]): Equipment[] {
  const equipmentByName = new Map<string, Equipment>();

  equipment.forEach((item) => {
    const nameKey = normalizeSearchValue(item.name);
    const groupKey = nameKey || `equipment-${item.id}`;
    const currentItem = equipmentByName.get(groupKey);

    if (!currentItem) {
      equipmentByName.set(groupKey, item);
      return;
    }

    if (!currentItem.images && item.images) {
      equipmentByName.set(groupKey, {
        ...currentItem,
        images: item.images,
      });
    }
  });

  return Array.from(equipmentByName.values());
}

export function hasActiveEquipmentFilters(filters: EquipmentFilters): boolean {
  return (
    filters.search.trim() !== '' ||
    filters.categoryId !== null ||
    filters.availability.length > 0 ||
    filters.condition.length > 0 ||
    filters.location.trim() !== '' ||
    filters.minDailyRate.trim() !== '' ||
    filters.maxDailyRate.trim() !== ''
  );
}

export function getActiveEquipmentFilterCount(
  filters: EquipmentFilters,
): number {
  let count = 0;

  if (filters.search.trim()) count += 1;
  if (filters.categoryId !== null) count += 1;
  count += filters.availability.length;
  count += filters.condition.length;
  if (filters.location.trim()) count += 1;
  if (filters.minDailyRate.trim()) count += 1;
  if (filters.maxDailyRate.trim()) count += 1;

  return count;
}

export function toggleStringFilterValue(
  values: string[],
  value: string,
): string[] {
  return values.includes(value)
    ? values.filter((currentValue) => currentValue !== value)
    : [...values, value];
}

export function filterEquipment(
  equipment: Equipment[],
  filters: EquipmentFilters,
): Equipment[] {
  const search = normalizeSearchValue(filters.search);
  const minDailyRate = toNumber(filters.minDailyRate);
  const maxDailyRate = toNumber(filters.maxDailyRate);
  const selectedLocation = normalizeSearchValue(filters.location);

  return equipment.filter((item) => {
    const searchableText = normalizeSearchValue(
      [
        item.name,
        item.brand,
        item.model,
        item.year,
        item.location,
        item.description,
        item.availability,
        item.condition,
        item.dailyRate,
        item.weeklyRate,
        item.monthlyRate,
      ].join(' '),
    );

    const matchesSearch = search === '' || searchableText.includes(search);

    const matchesCategory =
      filters.categoryId === null || item.categoryId === filters.categoryId;

    const matchesAvailability =
      filters.availability.length === 0 ||
      filters.availability.includes(item.availability);

    const matchesCondition =
      filters.condition.length === 0 ||
      filters.condition.includes(item.condition);

    const matchesLocation =
      selectedLocation === '' ||
      normalizeSearchValue(item.location) === selectedLocation;

    const matchesMinRate =
      minDailyRate === null || Number(item.dailyRate) >= minDailyRate;

    const matchesMaxRate =
      maxDailyRate === null || Number(item.dailyRate) <= maxDailyRate;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAvailability &&
      matchesCondition &&
      matchesLocation &&
      matchesMinRate &&
      matchesMaxRate
    );
  });
}

export function getUniqueEquipmentLocations(equipment: Equipment[]): string[] {
  const locations = equipment
    .map((item) => item.location?.trim())
    .filter((location): location is string => Boolean(location));

  return Array.from(new Set(locations)).sort((a, b) => a.localeCompare(b));
}
