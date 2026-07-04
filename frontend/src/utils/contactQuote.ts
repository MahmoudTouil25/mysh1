import type { Equipment } from '../types/equipment';
import {
  formatEquipmentEnginePower,
  formatEquipmentOperatingWeight,
} from './equipmentFilters';

export type QuoteEquipmentDetails = {
  id?: string;
  name: string;
  brand?: string;
  model?: string;
  year?: string;
  category?: string;
  availability?: string;
  condition?: string;
  location?: string;
  operatingWeight?: string;
  enginePower?: string;
};

function hasValue(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function getEquipmentQuoteDetails({
  item,
  categoryLabel,
  availabilityLabel,
  conditionLabel,
}: {
  item: Equipment;
  categoryLabel?: string;
  availabilityLabel?: string;
  conditionLabel?: string;
}): QuoteEquipmentDetails {
  const operatingWeight = formatEquipmentOperatingWeight(item, '');
  const enginePower = formatEquipmentEnginePower(item, '');

  return {
    id: String(item.id),
    name: item.name,
    brand: item.brand,
    model: item.model,
    year: String(item.year),
    category: categoryLabel,
    availability: availabilityLabel || item.availability,
    condition: conditionLabel || item.condition,
    location: item.location,
    operatingWeight,
    enginePower,
  };
}

export function buildEquipmentContactHref(
  details: QuoteEquipmentDetails,
): string {
  const params = new URLSearchParams({ quote: 'equipment' });

  Object.entries(details).forEach(([key, value]) => {
    if (hasValue(value)) {
      params.set(key, value.trim());
    }
  });

  return `/contact?${params.toString()}`;
}

export function buildFavoritesContactHref(): string {
  return '/contact?quote=favorites';
}
