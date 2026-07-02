'use client';

import Link from 'next/link';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import { useEquipmentFavorites } from '../../contexts/EquipmentFavoritesContext';
import { getFirstEquipmentImage } from '../../utils/equipmentFilters';

type EquipmentFavoritesCartProps = {
  lang: Lang;
  formatCurrency: (value: number) => string;
};

export default function EquipmentFavoritesCart({
  lang,
  formatCurrency,
}: EquipmentFavoritesCartProps) {
  const t = equipmentContent[lang];
  const { favoriteEquipment, favoriteCount, removeFavorite, clearFavorites } =
    useEquipmentFavorites();

  return (
    <section
      id="equipment-favorites-cart"
      className="mb-8 scroll-mt-28 rounded-3xl border border-[#C2C7C9]/70 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1B263B] text-white">
            <CartIcon />
          </span>

          <div>
            <h2 className="text-xl font-black text-[#1B263B]">
              {t.favoritesCart.title}
            </h2>
            <p className="text-sm font-semibold text-[#5C677D]">
              {favoriteCount}{' '}
              {favoriteCount === 1
                ? t.favoritesCart.itemCountSingular
                : t.favoritesCart.itemCount}
            </p>
          </div>
        </div>

        {favoriteCount > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={clearFavorites}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[#1B263B]/20 px-4 text-sm font-extrabold text-[#1B263B] transition hover:border-[#1B263B]"
            >
              {t.favoritesCart.clear}
            </button>

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#F4D03F] px-4 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
            >
              {t.favoritesCart.requestSelected}
            </Link>
          </div>
        )}
      </div>

      {favoriteCount === 0 ? (
        <p className="mt-5 rounded-2xl border border-dashed border-[#C2C7C9] bg-[#F8F9FA] p-4 text-sm font-bold text-[#5C677D]">
          {t.favoritesCart.empty}
        </p>
      ) : (
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {favoriteEquipment.map((item) => {
            const image = getFirstEquipmentImage(item.images);
            const detailHref = `/equipment/${item.slug ?? item.id}`;

            return (
              <article
                key={item.id}
                className="grid grid-cols-[76px_1fr_auto] items-center gap-3 rounded-2xl border border-[#C2C7C9]/70 bg-[#F8F9FA] p-3"
              >
                <Link
                  href={detailHref}
                  className="relative h-16 overflow-hidden rounded-xl bg-[#DEE3E5]"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center text-[11px] font-bold text-[#5C677D]">
                      {t.card.noImage}
                    </span>
                  )}
                </Link>

                <div className="min-w-0">
                  <Link
                    href={detailHref}
                    className="block truncate text-sm font-black text-[#1B263B] hover:underline"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 truncate text-xs font-semibold text-[#5C677D]">
                    {item.brand} / {item.model} / {item.year}
                  </p>
                  <p className="mt-1 text-xs font-black text-[#1B263B]">
                    {Number.isFinite(item.dailyRate)
                      ? `${formatCurrency(Number(item.dailyRate))} / ${
                          t.card.daily
                        }`
                      : t.card.requestQuote}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label={`${t.favoritesCart.remove}: ${item.name}`}
                  onClick={() => removeFavorite(item.id)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1B263B]/20 bg-white text-[#1B263B] transition hover:border-[#1B263B]"
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    x
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
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
