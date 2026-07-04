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
      type: 'brand';
      label: string;
      value: string;
    }
  | {
      type: 'model';
      label: string;
      value: string;
    }
  | {
      type: 'operatingWeight';
      label: string;
      value: string;
    };

export const defaultEquipmentFilters: EquipmentFilters = {
  search: '',
  categoryId: null,
  brand: '',
  model: '',
  operatingWeight: '',
};

export function normalizeSearchValue(value: unknown): string {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064B-\u065F]/g, '')
    .toLowerCase()
    .trim();
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

export function getEquipmentOperatingWeightValue(
  item: Equipment,
): string | null {
  const excelWeight = item['Operating weight kg'];

  if (excelWeight !== undefined && excelWeight !== null) {
    const value = String(excelWeight).trim();

    if (value) {
      return value;
    }
  }

  if (Number.isFinite(item.operatingWeight)) {
    return String(item.operatingWeight);
  }

  return null;
}

export function formatEquipmentOperatingWeight(
  item: Equipment,
  fallbackText: string,
): string {
  const excelWeight = item['Operating weight kg'];

  if (excelWeight !== undefined && excelWeight !== null) {
    const value = String(excelWeight).trim();

    if (value) {
      return `${value} t`;
    }
  }

  if (Number.isFinite(item.operatingWeight)) {
    return `${item.operatingWeight} t`;
  }

  return fallbackText;
}

export function formatEquipmentEnginePower(
  item: Equipment,
  fallbackText: string,
): string {
  const excelPowerKw = item['Engine power kW'];

  if (excelPowerKw !== undefined && excelPowerKw !== null) {
    const value = String(excelPowerKw).trim();

    if (value) {
      return `${value} kW`;
    }
  }

  if (Number.isFinite(item.enginePower)) {
    return `${item.enginePower} kW`;
  }

  return fallbackText;
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

  return Array.from(equipmentByName.values()).sort((firstItem, secondItem) =>
    firstItem.name.localeCompare(secondItem.name),
  );
}

export function hasActiveEquipmentFilters(filters: EquipmentFilters): boolean {
  return (
    filters.search.trim() !== '' ||
    filters.categoryId !== null ||
    filters.brand.trim() !== '' ||
    filters.model.trim() !== '' ||
    filters.operatingWeight.trim() !== ''
  );
}

export function getActiveEquipmentFilterCount(
  filters: EquipmentFilters,
): number {
  let count = 0;

  if (filters.search.trim()) count += 1;
  if (filters.categoryId !== null) count += 1;
  if (filters.brand.trim()) count += 1;
  if (filters.model.trim()) count += 1;
  if (filters.operatingWeight.trim()) count += 1;

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
  const selectedBrand = normalizeSearchValue(filters.brand);
  const selectedModel = normalizeSearchValue(filters.model);
  const selectedOperatingWeight = normalizeSearchValue(filters.operatingWeight);

  return equipment.filter((item) => {
    const operatingWeightValue = formatEquipmentOperatingWeight(item, '');
    const searchableText = normalizeSearchValue(
      [
        item.name,
        item.brand,
        item.model,
        item.year,
        operatingWeightValue,
        item.description,
      ].join(' '),
    );

    const matchesSearch = search === '' || searchableText.includes(search);

    const matchesCategory =
      filters.categoryId === null || item.categoryId === filters.categoryId;

    const matchesBrand =
      selectedBrand === '' || normalizeSearchValue(item.brand) === selectedBrand;

    const matchesModel =
      selectedModel === '' || normalizeSearchValue(item.model) === selectedModel;

    const matchesOperatingWeight =
      selectedOperatingWeight === '' ||
      normalizeSearchValue(operatingWeightValue) === selectedOperatingWeight;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesModel &&
      matchesOperatingWeight
    );
  });
}

export function getUniqueEquipmentBrands(equipment: Equipment[]): string[] {
  const brands = equipment
    .map((item) => item.brand?.trim())
    .filter((brand): brand is string => Boolean(brand));

  return Array.from(new Set(brands)).sort((a, b) => a.localeCompare(b));
}

export function getUniqueEquipmentModels(equipment: Equipment[]): string[] {
  const models = equipment
    .map((item) => item.model?.trim())
    .filter((model): model is string => Boolean(model));

  return Array.from(new Set(models)).sort((a, b) => a.localeCompare(b));
}

export function getUniqueEquipmentOperatingWeights(
  equipment: Equipment[],
): string[] {
  const operatingWeights = equipment
    .map((item) => formatEquipmentOperatingWeight(item, ''))
    .filter((value): value is string => Boolean(value));

  return Array.from(new Set(operatingWeights)).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );
}
