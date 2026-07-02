'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import type { Equipment } from '../types/equipment';

export type FavoriteEquipment = Equipment & {
  slug?: string;
};

type EquipmentFavoritesContextValue = {
  favoriteEquipment: FavoriteEquipment[];
  favoriteCount: number;
  isFavorite: (equipmentId: number) => boolean;
  toggleFavorite: (equipment: FavoriteEquipment) => void;
  removeFavorite: (equipmentId: number) => void;
  clearFavorites: () => void;
};

const EquipmentFavoritesContext =
  createContext<EquipmentFavoritesContextValue | null>(null);

type EquipmentFavoritesProviderProps = {
  children: React.ReactNode;
};

export function EquipmentFavoritesProvider({
  children,
}: EquipmentFavoritesProviderProps) {
  const [favoriteEquipment, setFavoriteEquipment] = useState<
    FavoriteEquipment[]
  >([]);

  const favoriteIds = useMemo(() => {
    return new Set(favoriteEquipment.map((item) => item.id));
  }, [favoriteEquipment]);

  const value = useMemo<EquipmentFavoritesContextValue>(() => {
    return {
      favoriteEquipment,
      favoriteCount: favoriteEquipment.length,
      isFavorite: (equipmentId: number) => favoriteIds.has(equipmentId),
      toggleFavorite: (equipment: FavoriteEquipment) => {
        setFavoriteEquipment((currentFavorites) => {
          if (currentFavorites.some((item) => item.id === equipment.id)) {
            return currentFavorites.filter((item) => item.id !== equipment.id);
          }

          return [equipment, ...currentFavorites];
        });
      },
      removeFavorite: (equipmentId: number) => {
        setFavoriteEquipment((currentFavorites) =>
          currentFavorites.filter((item) => item.id !== equipmentId),
        );
      },
      clearFavorites: () => {
        setFavoriteEquipment([]);
      },
    };
  }, [favoriteEquipment, favoriteIds]);

  return (
    <EquipmentFavoritesContext.Provider value={value}>
      {children}
    </EquipmentFavoritesContext.Provider>
  );
}

export function useEquipmentFavorites() {
  const context = useContext(EquipmentFavoritesContext);

  if (!context) {
    throw new Error(
      'useEquipmentFavorites must be used inside EquipmentFavoritesProvider',
    );
  }

  return context;
}
