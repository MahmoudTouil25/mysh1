import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import {
  formatEquipmentEnginePower,
  formatEquipmentOperatingWeight,
  getFirstEquipmentImage,
} from '../../utils/equipmentFilters';
import {
  buildEquipmentContactHref,
  getEquipmentQuoteDetails,
} from '../../utils/contactQuote';
import Link from 'next/link';
import EquipmentFavoriteButton from './EquipmentFavoriteButton';

type EquipmentListItemProps = {
  lang: Lang;
  item: Equipment;
  categoryLabel: string;
  availabilityLabel: string;
  conditionLabel: string;
  formatCurrency: (value: number) => string;
};

export default function EquipmentListItem({
  lang,
  item,
  categoryLabel,
  availabilityLabel,
  conditionLabel,
}: EquipmentListItemProps) {
  const t = equipmentContent[lang];
  const image = getFirstEquipmentImage(item.images);
  const fallbackText = lang === 'ar' ? 'غير محدد' : 'Not specified';
  const quoteHref = buildEquipmentContactHref(
    getEquipmentQuoteDetails({
      item,
      categoryLabel,
      availabilityLabel,
      conditionLabel,
    }),
  );
  const detailPills = [
    availabilityLabel,
    conditionLabel,
    item.location,
    formatEquipmentOperatingWeight(item, ''),
    formatEquipmentEnginePower(item, ''),
  ].filter((value): value is string => Boolean(value));

  return (
    <article
      id={`equipment-${item.id}`}
      className="grid gap-4 rounded-3xl border border-[#C2C7C9]/70 bg-white p-4 shadow-sm transition hover:shadow-[0_16px_40px_rgba(27,38,59,0.08)] md:grid-cols-[180px_1fr_auto] md:items-center"
    >
      <div className="h-40 overflow-hidden rounded-2xl bg-[#DEE3E5] md:h-32">
        {image ? (
          <img
            src={image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-bold text-[#5C677D]">
            {t.card.noImage}
          </div>
        )}
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#855300]">
          {categoryLabel}
        </p>

        <h2 className="mt-1 text-xl font-black text-[#1B263B]">
          {item.name}
        </h2>

        <p className="mt-2 text-sm font-semibold text-[#5C677D]">
          {item.brand} · {item.model} · {item.year}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {detailPills.length > 0 ? (
            detailPills.map((value) => <Pill key={value}>{value}</Pill>)
          ) : (
            <Pill>{fallbackText}</Pill>
          )}
        </div>
      </div>

      <div className="md:text-end">
        <div className="mb-3 flex justify-end">
          <EquipmentFavoriteButton lang={lang} item={item} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
          <Link
            href={`/equipment/${'slug' in item ? item.slug : item.id}`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-[#1B263B]/20 px-5 text-sm font-extrabold text-[#1B263B] transition hover:border-[#1B263B]"
          >
            {t.card.viewDetails}
          </Link>

          <Link
            href={quoteHref}
            className="inline-flex h-11 min-w-[9.5rem] items-center justify-center whitespace-nowrap rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
          >
            {t.card.requestQuote}
          </Link>
        </div>
      </div>
    </article>
  );
}

type PillProps = {
  children: React.ReactNode;
};

function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full bg-[#F8F9FA] px-3 py-1 text-xs font-bold text-[#1B263B]">
      {children}
    </span>
  );
}
