import type { Category, Equipment } from '../types/equipment';

const API_URL =

  process.env.NEXT_PUBLIC_API_URL ?? 'https://mysh.onrender.com';

async function apiGet<T>(endpoint: string): Promise<T> {
  const url = `${API_URL.replace(/\/$/, '')}${endpoint}`;
  const response = await fetch(url);
  const contentType = response.headers.get('content-type') ?? '';

  if (!response.ok) {
    throw new Error(`API error ${response.status} while fetching ${url}`);
  }

  if (!contentType.includes('application/json')) {
    throw new Error(
      `Expected JSON from ${url}, received ${contentType || 'unknown content type'}`,
    );
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
