import type { Category, Equipment } from '../types/equipment';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

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
