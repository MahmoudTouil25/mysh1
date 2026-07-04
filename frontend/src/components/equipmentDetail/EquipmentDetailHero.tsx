import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';
import EquipmentMediaViewer from './EquipmentMediaViewer';
import EquipmentTechnicalTable from './EquipmentTechnicalTable';

type EquipmentDetailHeroProps = {
  lang: Lang;
  equipment: Equipment;
  categoryLabel: string;
  availabilityLabel: string;
  conditionLabel: string;
  formatCurrency: (value: number) => string;
  quoteSlot?: React.ReactNode;
};

export default function EquipmentDetailHero({
  lang,
  equipment,
  categoryLabel,
  availabilityLabel,
  conditionLabel,
  formatCurrency,
  quoteSlot,
}: EquipmentDetailHeroProps) {
  const t = equipmentDetailContent[lang];

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
      <div className="contents lg:order-2 lg:block lg:sticky lg:top-28">
        <div className="order-1">
          <EquipmentMediaViewer lang={lang} equipment={equipment} />
        </div>

        <div className="order-4 lg:mt-6">
          <EquipmentTechnicalTable
            lang={lang}
            equipment={equipment}
            availabilityLabel={availabilityLabel}
            conditionLabel={conditionLabel}
            formatCurrency={formatCurrency}
          />
        </div>
      </div>

      <div className="order-2 lg:order-1">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          {t.hero.eyebrow}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {categoryLabel && <Badge>{categoryLabel}</Badge>}
          {availabilityLabel && <Badge>{availabilityLabel}</Badge>}
          {conditionLabel && <Badge>{conditionLabel}</Badge>}
        </div>

        <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#1B263B] md:text-6xl">
          {equipment.name}
        </h1>

        <p className="mt-4 text-base font-semibold leading-7 text-[#5C677D] md:text-lg md:leading-8">
          {equipment.brand} · {equipment.model} · {equipment.year}
        </p>

        {quoteSlot && <div className="mt-7">{quoteSlot}</div>}

        <div className="mt-8 rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#1B263B]">
            {t.hero.descriptionTitle}
          </h2>

          <p className="mt-3 text-base leading-7 text-[#5C677D]">
            {equipment.description ||
              (lang === 'en'
                ? 'This equipment is available for rental and project support. Contact MYSH to confirm availability, rental duration and pricing.'
                : 'هذه المعدة متاحة للتأجير ودعم المشاريع. تواصل مع MYSH لتأكيد التوفر ومدة الإيجار والأسعار.')}
          </p>
        </div>
      </div>
    </section>
  );
}

type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-[#C2C7C9] bg-white px-3 py-1.5 text-xs font-black text-[#1B263B] shadow-sm">
      {children}
    </span>
  );
}