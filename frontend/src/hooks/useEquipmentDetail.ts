import { useEffect, useMemo, useState } from 'react';
import { getCategories, getEquipment } from '../services/api';
import type { Category, Equipment } from '../types/equipment';

type UseEquipmentDetailParams = {
  equipmentId: string | number | undefined;
  relatedLimit?: number;
};

function parseEquipmentId(equipmentId: string | number | undefined): number | null {
  if (equipmentId === undefined || equipmentId === null || equipmentId === '') {
    return null;
  }

  const parsedId = Number(equipmentId);

  return Number.isFinite(parsedId) ? parsedId : null;
}

function getUniqueEquipmentById(equipment: Equipment[]): Equipment[] {
  const equipmentById = new Map<number, Equipment>();

  equipment.forEach((item) => {
    if (!equipmentById.has(item.id)) {
      equipmentById.set(item.id, item);
    }
  });

  return Array.from(equipmentById.values());
}

export function useEquipmentDetail({
  equipmentId,
  relatedLimit = 3,
}: UseEquipmentDetailParams) {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let ignore = false;

    Promise.all([getEquipment(), getCategories()])
      .then(([equipmentData, categoriesData]) => {
        if (ignore) {
          return;
        }

        setEquipmentList(equipmentData);
        setCategories(categoriesData);
      })
      .catch((err) => {
        if (ignore) {
          return;
        }

        console.error(err);
        setHasLoadError(true);
      })
      .finally(() => {
        if (ignore) {
          return;
        }

        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const equipmentIdNumber = useMemo(() => {
    return parseEquipmentId(equipmentId);
  }, [equipmentId]);

  const categoriesById = useMemo(() => {
    return new Map(categories.map((category) => [category.id, category]));
  }, [categories]);

  const equipment = useMemo(() => {
    if (equipmentIdNumber === null) {
      return null;
    }

    return equipmentList.find((item) => item.id === equipmentIdNumber) ?? null;
  }, [equipmentIdNumber, equipmentList]);

  const category = useMemo(() => {
    if (!equipment) {
      return null;
    }

    return categoriesById.get(equipment.categoryId) ?? null;
  }, [categoriesById, equipment]);

  const relatedEquipment = useMemo(() => {
    if (!equipment) {
      return [];
    }

    const sameCategory = equipmentList.filter(
      (item) => item.id !== equipment.id && item.categoryId === equipment.categoryId,
    );

    const availableFallback = equipmentList.filter(
      (item) =>
        item.id !== equipment.id &&
        item.categoryId !== equipment.categoryId &&
        item.availability === 'available',
    );

    const generalFallback = equipmentList.filter(
      (item) =>
        item.id !== equipment.id && item.categoryId !== equipment.categoryId,
    );

    return getUniqueEquipmentById([
      ...sameCategory,
      ...availableFallback,
      ...generalFallback,
    ]).slice(0, relatedLimit);
  }, [equipment, equipmentList, relatedLimit]);

  const notFound =
    !loading &&
    !hasLoadError &&
    (equipmentIdNumber === null || equipment === null);

  return {
    equipment,
    equipmentList,
    relatedEquipment,

    categories,
    categoriesById,
    category,

    loading,
    hasLoadError,
    notFound,
  };
}
