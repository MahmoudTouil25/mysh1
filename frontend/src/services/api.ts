const API_URL = import.meta.env.VITE_API_URL;

export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number | null;
};

export type Equipment = {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  categoryId: number;
  operatingWeight: number;
  enginePower: number;
  condition: string;
  availability: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  minimumRentalDays: number;
  location: string;
  description?: string;
  images?: string;
};

async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export function getCategories() {
  return apiGet<Category[]>('/categories');
}

export function getEquipment() {
  return apiGet<Equipment[]>('/equipment');
}

export function getEquipmentById(id: number) {
  return apiGet<Equipment>(`/equipment/${id}`);
}