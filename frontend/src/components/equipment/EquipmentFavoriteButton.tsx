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
      <CartIcon />
    </button>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2.2l2.5 12.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" />
    </svg>
  );
}
