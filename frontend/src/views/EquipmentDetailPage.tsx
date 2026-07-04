'use client';



import type { Category } from '../types/equipment';
import type { Lang } from '../i18n/sharedContent';
import { useLanguage } from '../i18n/LanguageContext';
import { equipmentContent } from '../i18n/equipmentContent';
import { equipmentDetailContent } from '../i18n/equipmentDetailContent';
import { useEquipmentDetail } from '../hooks/useEquipmentDetail';

import EquipmentDetailHero from '../components/equipmentDetail/EquipmentDetailHero';
import EquipmentQuoteBox from '../components/equipmentDetail/EquipmentQuoteBox';
import EquipmentUseCases from '../components/equipmentDetail/EquipmentUseCases';
import EquipmentRelatedSection from '../components/equipmentDetail/EquipmentRelatedSection';



type EquipmentDetailPageProps = {
  lang?: Lang;
  equipmentId?: string | number;
};

function getCurrentPageUrl(): string | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window.location.href;
}

export default function EquipmentDetailPage({
  lang: fallbackLang = 'en',
  equipmentId,
}: EquipmentDetailPageProps) {
  const { lang } = useLanguage(fallbackLang);
  const listText = equipmentContent[lang];
  const detailText = equipmentDetailContent[lang];

  const resolvedEquipmentId = equipmentId;

  const {
    equipment,
    relatedEquipment,
    categoriesById,
    category,
    loading,
    hasLoadError,
    notFound,
  } = useEquipmentDetail({
    equipmentId: resolvedEquipmentId,
  });

  const getCategoryLabel = (categoryValue: Category | null): string => {
    if (!categoryValue) {
      return '';
    }

    return listText.categories[categoryValue.name] ?? categoryValue.name;
  };

  const getAvailabilityLabel = (value?: string): string => {
    return value ? listText.availability[value] ?? value : '';
  };

  const getConditionLabel = (value?: string): string => {
    return value ? listText.condition[value] ?? value : '';
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-AE' : 'en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 pt-32 text-[#1B263B]">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm">
          {detailText.page.loading}
        </div>
      </div>
    );
  }

  if (hasLoadError) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 pt-32 text-[#1B263B]">
        <div className="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-white p-8 text-red-700 shadow-sm">
          {detailText.page.error}
        </div>
      </div>
    );
  }

  if (notFound || !equipment) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 pt-32 text-[#1B263B]">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-[#1B263B]">
            {detailText.page.notFoundTitle}
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#5C677D]">
            {detailText.page.notFoundDescription}
          </p>

          <a
            href="/equipment"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
          >
            {detailText.page.backToEquipment}
          </a>
        </div>
      </div>
    );
  }

  const categoryLabel = getCategoryLabel(category);
  const rawCategoryName = category?.name;
  const currentPageUrl = getCurrentPageUrl();

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <div className="mx-auto max-w-7xl">
        <EquipmentDetailHero
          lang={lang}
          equipment={equipment}
          categoryLabel={categoryLabel}
          availabilityLabel={getAvailabilityLabel(equipment.availability)}
          conditionLabel={getConditionLabel(equipment.condition)}
          formatCurrency={formatCurrency}
          quoteSlot={
            <EquipmentQuoteBox
              lang={lang}
              equipment={equipment}
              categoryName={categoryLabel}
              pageUrl={currentPageUrl}
            />
          }
        />

        <EquipmentUseCases
          lang={lang}
          categoryName={rawCategoryName}
          equipmentName={equipment.name}
        />

        <EquipmentRelatedSection
          lang={lang}
          relatedEquipment={relatedEquipment}
          categoriesById={categoriesById}
          formatCurrency={formatCurrency}
        />
      </div>
    </div>
  );
}
