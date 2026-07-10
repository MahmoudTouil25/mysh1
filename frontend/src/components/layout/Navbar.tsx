'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import {
  useEquipmentFavorites,
  type FavoriteEquipment,
} from '../../contexts/EquipmentFavoritesContext';
import { getFirstEquipmentImage } from '../../utils/equipmentFilters';
import { buildFavoritesContactHref } from '../../utils/contactQuote';
import LanguageToggle from '../common/LanguageToggle';

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

type NavLinkItem = {
  label: string;
  href: string;
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const pathname = usePathname();
  const t = sharedContent[lang];
  const equipmentText = equipmentContent[lang];
  const isRtl = lang === 'ar';
  const {
    favoriteEquipment,
    favoriteCount,
    removeFavorite,
    clearFavorites,
  } = useEquipmentFavorites();

  const navLinks: NavLinkItem[] = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.equipment, href: '/equipment' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.csr, href: '/csr' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const closeFavoritesPanel = () => {
    setIsFavoritesOpen(false);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-AE' : 'en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getLinkClass = (href: string) =>
    [
      'text-sm font-semibold transition hover:text-white',
      pathname === href ? 'text-white' : 'text-white/80',
    ].join(' ');

  const getMobileLinkClass = (href: string) =>
    [
      'rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white/10 hover:text-white',
      isRtl ? 'text-right' : 'text-left',
      pathname === href ? 'bg-white/10 text-white' : 'text-white/85',
    ].join(' ');

  return (
    <header
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Primary navigation"
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/18
            bg-[#062D31]/45
            shadow-[0_8px_32px_rgba(6,45,49,0.28)]
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-[#062D31]/38
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-[#062D31]/12 to-transparent" />

          <div className="relative z-10 flex min-h-16 items-center justify-between gap-4 px-4 md:px-6">
            <Link
              href="/"
              aria-label="MYSH homepage"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img
                src="/logo-mysh-Footer.png"
                alt="MYSH Heavy Equipment Rental"
                className="h-11 w-auto object-contain md:h-12"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageToggle lang={lang} setLang={setLang} />

              <button
                type="button"
                aria-label={`${t.nav.cart}: ${favoriteCount}`}
                aria-expanded={isFavoritesOpen}
                onClick={() => setIsFavoritesOpen((current) => !current)}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <CartIcon />
                {favoriteCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F4D03F] px-1 text-[0.6875rem] font-semibold text-[#1B263B]">
                    <span className="tabular-nums">{favoriteCount}</span>
                  </span>
                )}
              </button>

              <Link
                href={buildFavoritesContactHref()}
                className="button-label inline-flex min-h-10 items-center justify-center rounded-full bg-[#F4D03F] px-5 text-sm font-semibold uppercase text-[#1B263B] transition hover:brightness-95"
              >
                {t.nav.quote}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle lang={lang} setLang={setLang} />

              <button
                type="button"
                aria-label={`${t.nav.cart}: ${favoriteCount}`}
                aria-expanded={isFavoritesOpen}
                onClick={() => {
                  closeMobileMenu();
                  setIsFavoritesOpen((current) => !current);
                }}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <CartIcon />
                {favoriteCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F4D03F] px-1 text-[0.6875rem] font-semibold text-[#1B263B]">
                    <span className="tabular-nums">{favoriteCount}</span>
                  </span>
                )}
              </button>

              <button
                type="button"
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span className="sr-only">
                  {isOpen ? t.nav.closeMenu : t.nav.openMenu}
                </span>

                <span className="flex flex-col gap-1.5">
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? 'translate-y-2 rotate-45' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? 'opacity-0' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? '-translate-y-2 -rotate-45' : '',
                    ].join(' ')}
                  />
                </span>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="relative z-10 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={getMobileLinkClass(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href={buildFavoritesContactHref()}
                  onClick={closeMobileMenu}
                  className="button-label mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#F4D03F] px-5 text-sm font-semibold uppercase text-[#1B263B]"
                >
                  {t.nav.quote}
                </Link>
              </div>
            </div>
          )}
        </nav>

        {isFavoritesOpen && (
          <FavoritesGlassPanel
            favoriteEquipment={favoriteEquipment}
            favoriteCount={favoriteCount}
            labels={equipmentText}
            isRtl={isRtl}
            formatCurrency={formatCurrency}
            onClose={closeFavoritesPanel}
            onRemove={removeFavorite}
            onClear={clearFavorites}
          />
        )}
      </div>
    </header>
  );
}

type FavoritesGlassPanelProps = {
  favoriteEquipment: FavoriteEquipment[];
  favoriteCount: number;
  labels: (typeof equipmentContent)[Lang];
  isRtl: boolean;
  formatCurrency: (value: number) => string;
  onClose: () => void;
  onRemove: (equipmentId: number) => void;
  onClear: () => void;
};

function FavoritesGlassPanel({
  favoriteEquipment,
  favoriteCount,
  labels,
  isRtl,
  formatCurrency,
  onClose,
  onRemove,
  onClear,
}: FavoritesGlassPanelProps) {
  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={[
        'absolute top-[calc(100%+0.75rem)] z-50 w-full sm:w-[440px]',
        isRtl ? 'left-0' : 'right-0',
      ].join(' ')}
    >
      <section className="overflow-hidden rounded-2xl border border-white/18 bg-[#062D31]/72 text-white shadow-[0_18px_60px_rgba(6,45,49,0.32)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#062D31]/58">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-[#062D31]/10 to-transparent" />

        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h2 className="text-h3 text-white">{labels.favoritesCart.title}</h2>
              <p className="mt-1 text-body-sm text-white/68">
                <span className="tabular-nums">{favoriteCount}</span>{' '}
                {favoriteCount === 1
                  ? labels.favoritesCart.itemCountSingular
                  : labels.favoritesCart.itemCount}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close favorites panel"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                x
              </span>
            </button>
          </div>

          {favoriteCount === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-white/20 bg-white/8 p-4 text-body-sm text-white/72">
              {labels.favoritesCart.empty}
            </p>
          ) : (
            <>
              <div className="mt-4 max-h-[min(60vh,440px)] space-y-3 overflow-y-auto pe-1">
                {favoriteEquipment.map((item) => {
                  const image = getFirstEquipmentImage(item.images);
                  const detailHref = `/equipment/${item.slug ?? item.id}`;

                  return (
                    <article
                      key={item.id}
                      className="grid grid-cols-[64px_1fr_auto] items-center gap-3 rounded-xl border border-white/12 bg-white/10 p-3 backdrop-blur-md"
                    >
                      <Link
                        href={detailHref}
                        onClick={onClose}
                        className="relative h-14 overflow-hidden rounded-lg bg-white/10"
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="flex h-full items-center justify-center text-[0.65rem] font-semibold text-white/58">
                            {labels.card.noImage}
                          </span>
                        )}
                      </Link>

                      <div className="min-w-0">
                        <Link
                          href={detailHref}
                          onClick={onClose}
                          className="block truncate text-body-sm font-semibold text-white transition hover:text-[#F4D03F]"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 truncate text-[0.75rem] text-white/58">
                          {item.brand} / {item.model} / {item.year}
                        </p>
                        <p className="mt-1 text-[0.75rem] font-semibold text-white/82">
                          {Number.isFinite(item.dailyRate)
                            ? `${formatCurrency(Number(item.dailyRate))} / ${
                                labels.card.daily
                              }`
                            : labels.card.requestQuote}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`${labels.favoritesCart.remove}: ${item.name}`}
                        onClick={() => onRemove(item.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        <span aria-hidden="true" className="text-base leading-none">
                          x
                        </span>
                      </button>
                    </article>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onClear}
                  className="button-label inline-flex min-h-10 flex-1 items-center justify-center rounded-xl border border-white/18 bg-white/8 px-4 text-sm font-semibold uppercase text-white transition hover:bg-white/14"
                >
                  {labels.favoritesCart.clear}
                </button>

                <Link
                  href={buildFavoritesContactHref()}
                  onClick={onClose}
                  className="button-label inline-flex min-h-10 flex-1 items-center justify-center rounded-xl bg-[#F4D03F] px-4 text-sm font-semibold uppercase text-[#1B263B] transition hover:brightness-95"
                >
                  {labels.favoritesCart.requestSelected}
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
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
