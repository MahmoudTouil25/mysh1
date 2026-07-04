export type Equipment = {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  categoryId: number;
  operatingWeight?: number;
  enginePower?: number;
  condition?: string;
  availability?: string;
  dailyRate?: number;
  weeklyRate?: number;
  monthlyRate?: number;
  minimumRentalDays?: number;
  location?: string;
  description?: string;
  images?: string;
  'Operating weight kg'?: string | number;
  'Engine power kW'?: string | number;
  'Engine power HP'?: string | number;
  'Payload / Load t'?: string | number;
  'Body/Bucket/Blade capacity'?: string | number;
  'Max speed km/h'?: string | number;
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
  parentId?: number | null;
};

export type ViewMode = 'grid' | 'list';

export type EquipmentFilters = {
  search: string;
  categoryId: number | null;
  brand: string;
  model: string;
  operatingWeight: string;
};
