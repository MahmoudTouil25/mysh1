'use client';

import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { FavoriteEquipment } from '../../contexts/EquipmentFavoritesContext';
import { useEquipmentFavorites } from '../../contexts/EquipmentFavoritesContext';

type EquipmentFavoriteButtonProps = {
  lang: Lang;
  item: FavoriteEquipment;
  className?: string;
};

export default function EquipmentFavoriteButton({
  lang,
  item,
  className = '',
}: EquipmentFavoriteButtonProps) {
  const t = equipmentContent[lang];
  const { isFavorite, toggleFavorite } = useEquipmentFavorites();
  const active = isFavorite(item.id);
  const label = active ? t.card.removeFavorite : t.card.addFavorite;

  return (
    <button
      type="button"
      aria-label={`${label}: ${item.name}`}
      aria-pressed={active}
      title={label}
      onClick={() => toggleFavorite(item)}
      className={[
        'inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B263B]/40',
        active
          ? 'border-[#F4D03F] bg-[#F4D03F] text-[#1B263B]'
          : 'border-white/70 bg-white/90 text-[#1B263B] hover:bg-[#F4D03F]',
        className,
      ].join(' ')}
    >
      <HeartIcon filled={active} />
    </button>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill={filled ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    </svg>
  );
}
