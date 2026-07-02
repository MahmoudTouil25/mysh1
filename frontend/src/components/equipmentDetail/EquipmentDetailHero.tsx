import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';
import EquipmentMediaViewer from './EquipmentMediaViewer';

type EquipmentDetailHeroProps = {
  lang: Lang;
  equipment: Equipment;
  categoryLabel: string;
  availabilityLabel: string;
  conditionLabel: string;
  formatCurrency: (value: number) => string;
};

export default function EquipmentDetailHero({
  lang,
  equipment,
  categoryLabel,
  availabilityLabel,
  conditionLabel,
  formatCurrency,
}: EquipmentDetailHeroProps) {
  const t = equipmentDetailContent[lang];
  const fallbackText = lang === 'ar' ? 'غير محدد' : 'Not specified';
  const rateFallbackText = lang === 'ar' ? 'اطلب السعر' : 'Request rate';

  const formatOptionalNumber = (
    value: number | undefined,
    suffix: string,
  ): string => {
    return Number.isFinite(value) ? `${value} ${suffix}` : fallbackText;
  };

  const formatOptionalCurrency = (value: number | undefined): string => {
    return Number.isFinite(value) ? formatCurrency(Number(value)) : rateFallbackText;
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
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

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <SpecCard label={t.specs.brand} value={equipment.brand} />
          <SpecCard label={t.specs.model} value={equipment.model} />
          <SpecCard label={t.specs.year} value={equipment.year} />
          <SpecCard
            label={t.specs.operatingWeight}
            value={formatOptionalNumber(equipment.operatingWeight, 't')}
          />
          <SpecCard
            label={t.specs.enginePower}
            value={formatOptionalNumber(equipment.enginePower, 'kW')}
          />
          <SpecCard
            label={t.specs.location}
            value={equipment.location || fallbackText}
          />
        </div>

        <div className="mt-6 grid gap-3 rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-5 shadow-sm sm:grid-cols-3">
          <PriceCard
            label={t.specs.dailyRate}
            value={formatOptionalCurrency(equipment.dailyRate)}
          />
          <PriceCard
            label={t.specs.weeklyRate}
            value={formatOptionalCurrency(equipment.weeklyRate)}
          />
          <PriceCard
            label={t.specs.monthlyRate}
            value={formatOptionalCurrency(equipment.monthlyRate)}
          />
        </div>
      </div>

      <div className="order-1 lg:order-2 lg:sticky lg:top-28">
        <EquipmentMediaViewer lang={lang} equipment={equipment} />
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

type SpecCardProps = {
  label: string;
  value: string | number;
};

function SpecCard({ label, value }: SpecCardProps) {
  return (
    <div className="rounded-2xl border border-[#C2C7C9]/70 bg-white p-4 shadow-sm">
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>

      <p className="mt-2 text-base font-black text-[#1B263B]">{value}</p>
    </div>
  );
}

type PriceCardProps = {
  label: string;
  value: string;
};

function PriceCard({ label, value }: PriceCardProps) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>

      <p className="mt-2 text-lg font-black text-[#1B263B]">{value}</p>
    </div>
  );
}
