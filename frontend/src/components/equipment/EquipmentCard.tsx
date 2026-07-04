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

type EquipmentCardProps = {
  lang: Lang;
  item: Equipment;
  categoryLabel: string;
  availabilityLabel: string;
  conditionLabel: string;
  formatCurrency: (value: number) => string;
};

export default function EquipmentCard({
  lang,
  item,
  categoryLabel,
  availabilityLabel,
  conditionLabel,
}: EquipmentCardProps) {
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

  return (
    <article
      id={`equipment-${item.id}`}
      className="group overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-[0_16px_40px_rgba(27,38,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(27,38,59,0.14)]"
    >
      <div className="relative h-56 overflow-hidden bg-[#DEE3E5]">
        {image ? (
          <img
            src={image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-bold text-[#5C677D]">
            {t.card.noImage}
          </div>
        )}

        {availabilityLabel && (
          <span className="absolute end-4 top-4 rounded-full bg-[#F4D03F] px-3 py-1 text-xs font-black text-[#1B263B] shadow-sm">
            {availabilityLabel}
          </span>
        )}

        <EquipmentFavoriteButton
          lang={lang}
          item={item}
          className="absolute start-4 top-4"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#855300]">
          {categoryLabel}
        </p>

        <h2 className="mt-2 text-xl font-black leading-tight text-[#1B263B]">
          {item.name}
        </h2>

        <p className="mt-2 text-sm font-semibold text-[#5C677D]">
          {item.brand} · {item.model} · {item.year}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Spec label={t.card.location} value={item.location || fallbackText} />
          <Spec
            label={t.card.weight}
            value={formatEquipmentOperatingWeight(item, fallbackText)}
          />
          <Spec
            label={t.card.power}
            value={formatEquipmentEnginePower(item, fallbackText)}
          />
          <Spec
            label={t.card.condition}
            value={conditionLabel || fallbackText}
          />
        </div>

        

        <div className="mt-5 grid grid-cols-[0.85fr_1.15fr] gap-3">
          <Link
            href={`/equipment/${'slug' in item ? item.slug : item.id}`}
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-[#1B263B]/20 px-3 text-sm font-extrabold text-[#1B263B] transition hover:border-[#1B263B]"
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

type SpecProps = {
  label: string;
  value: string | number;
};

function Spec({ label, value }: SpecProps) {
  return (
    <div className="rounded-2xl border border-[#C2C7C9]/60 bg-white p-3">
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>

      <p className="mt-1 text-sm font-extrabold text-[#1B263B]">{value}</p>
    </div>
  );
}
