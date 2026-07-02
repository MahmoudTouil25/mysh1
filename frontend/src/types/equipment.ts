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
  availability: string[];
  condition: string[];
  location: string;
  minDailyRate: string;
  maxDailyRate: string;
};
