'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Category, Equipment } from '../types/equipment';
import { getCategories, getEquipment } from '../services/api';
import type { Lang } from '../i18n/sharedContent';
import { equipmentContent } from '../i18n/equipmentContent';

import { useEquipmentFilters } from '../hooks/useEquipmentFilters';
import { groupEquipmentByName } from '../utils/equipmentFilters';

import EquipmentToolbar from '../components/equipment/EquipmentToolbar';
import EquipmentFilterTags from '../components/equipment/EquipmentFilterTags';
import EquipmentFilterPanel from '../components/equipment/EquipmentFilterPanel';
import EquipmentResultsHeader from '../components/equipment/EquipmentResultsHeader';
import EquipmentEmptyState from '../components/equipment/EquipmentEmptyState';
import EquipmentGrid from '../components/equipment/EquipmentGrid';
import EquipmentList from '../components/equipment/EquipmentList';

type EquipmentListPageProps = {
  lang: Lang;
  initialEquipment?: Equipment[];
  initialCategories?: Category[];
};

const EQUIPMENT_PAGE_SIZE = 6;

export default function EquipmentListPage({
  lang,
  initialEquipment = [],
  initialCategories = [],
}: EquipmentListPageProps) {
  const t = equipmentContent[lang];

  const [equipment, setEquipment] = useState<Equipment[]>(initialEquipment);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [loading, setLoading] = useState(initialEquipment.length === 0);
  const [hasLoadError, setHasLoadError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (initialEquipment.length > 0 && initialCategories.length > 0) {
      return;
    }

    Promise.all([getEquipment(), getCategories()])
      .then(([equipmentData, categoriesData]) => {
        setEquipment(equipmentData);
        setCategories(categoriesData);
        setHasLoadError(false);
      })
      .catch((err) => {
        console.error(err);
        setHasLoadError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [initialCategories.length, initialEquipment.length]);

  const {
    filters,
    filteredEquipment,
    locations,
    categoriesById,

    viewMode,
    setViewMode,

    isMobileFiltersOpen,
    toggleMobileFilters,

    activeFilterCount,
    hasFilters,

    setSearch,
    setCategoryId,
    toggleAvailability,
    toggleCondition,
    setLocation,
    setMinDailyRate,
    setMaxDailyRate,

    clearAllFilters,
    removeFilter,
  } = useEquipmentFilters({
    equipment,
    categories,
  });

  const groupedEquipment = useMemo(() => {
    return groupEquipmentByName(equipment);
  }, [equipment]);

  const groupedFilteredEquipment = useMemo(() => {
    return groupEquipmentByName(filteredEquipment);
  }, [filteredEquipment]);

  const totalPages = Math.max(
    1,
    Math.ceil(groupedFilteredEquipment.length / EQUIPMENT_PAGE_SIZE),
  );

  const paginatedEquipment = useMemo(() => {
    const startIndex = (currentPage - 1) * EQUIPMENT_PAGE_SIZE;

    return groupedFilteredEquipment.slice(
      startIndex,
      startIndex + EQUIPMENT_PAGE_SIZE,
    );
  }, [currentPage, groupedFilteredEquipment]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-AE' : 'en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (loading) {
    return (
      <div
        id="equipment"
        className="min-h-screen bg-[#F8F9FA] px-4 pt-32 text-[#1B263B]"
      >
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm">
          {t.page.loading}
        </div>
      </div>
    );
  }

  if (hasLoadError) {
    return (
      <div
        id="equipment"
        className="min-h-screen bg-[#F8F9FA] px-4 pt-32 text-[#1B263B]"
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-white p-8 text-red-700 shadow-sm">
          {t.page.error}
        </div>
      </div>
    );
  }

  return (
    <div
      id="equipment"
      className="min-h-screen bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.page.eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {t.page.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C677D] md:text-lg">
            {t.page.description}
          </p>
        </header>

        <EquipmentToolbar
          lang={lang}
          searchValue={filters.search}
          onSearchChange={setSearch}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onToggleFilters={toggleMobileFilters}
          activeFilterCount={activeFilterCount}
        />

        <EquipmentFilterTags
          lang={lang}
          filters={filters}
          categoriesById={categoriesById}
          hasFilters={hasFilters}
          onRemoveFilter={removeFilter}
          onClearAll={clearAllFilters}
        />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <EquipmentFilterPanel
            lang={lang}
            filters={filters}
            categories={categories}
            locations={locations}
            isMobileOpen={isMobileFiltersOpen}
            hasFilters={hasFilters}
            onClearAll={clearAllFilters}
            onCategoryChange={setCategoryId}
            onAvailabilityToggle={toggleAvailability}
            onConditionToggle={toggleCondition}
            onLocationChange={setLocation}
            onMinDailyRateChange={setMinDailyRate}
            onMaxDailyRateChange={setMaxDailyRate}
          />

          <section>
            <EquipmentResultsHeader
              lang={lang}
              resultCount={groupedFilteredEquipment.length}
              totalCount={groupedEquipment.length}
            />

            {groupedFilteredEquipment.length === 0 ? (
              <EquipmentEmptyState
                lang={lang}
                hasFilters={hasFilters}
                onClearAll={clearAllFilters}
              />
            ) : viewMode === 'grid' ? (
              <EquipmentGrid
                lang={lang}
                equipment={paginatedEquipment}
                categoriesById={categoriesById}
                formatCurrency={formatCurrency}
              />
            ) : (
              <EquipmentList
                lang={lang}
                equipment={paginatedEquipment}
                categoriesById={categoriesById}
                formatCurrency={formatCurrency}
              />
            )}

            {groupedFilteredEquipment.length > EQUIPMENT_PAGE_SIZE && (
              <EquipmentPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

type EquipmentPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function EquipmentPagination({
  currentPage,
  totalPages,
  onPageChange,
}: EquipmentPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Equipment pages"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-[#C2C7C9] bg-white px-3 text-sm font-black text-[#1B263B] transition hover:border-[#1B263B] disabled:cursor-not-allowed disabled:opacity-40"
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
          className={
            page === currentPage
              ? 'inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-[#1B263B] px-3 text-sm font-black text-white'
              : 'inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-[#C2C7C9] bg-white px-3 text-sm font-black text-[#1B263B] transition hover:border-[#1B263B]'
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-[#C2C7C9] bg-white px-3 text-sm font-black text-[#1B263B] transition hover:border-[#1B263B] disabled:cursor-not-allowed disabled:opacity-40"
      >
        &gt;
      </button>
    </nav>
  );
}
