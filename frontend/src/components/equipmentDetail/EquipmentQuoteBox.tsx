import { useMemo, useState } from 'react';
import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';
import {
  buildMailQuoteUrl,
  buildWhatsAppQuoteUrl,
  emptyEquipmentQuoteFormValues,
} from '../../utils/equipmentQuoteTemplates';
import type {
  EquipmentQuoteFormValues,
  EquipmentRentalMode,
} from '../../utils/equipmentQuoteTemplates';

type EquipmentQuoteBoxProps = {
  lang: Lang;
  equipment: Equipment;
  categoryName?: string;
  pageUrl?: string;
  whatsappNumber?: string;
  emailTo?: string;
};

export default function EquipmentQuoteBox({
  lang,
  equipment,
  categoryName,
  pageUrl,
  whatsappNumber = process.env.NEXT_PUBLIC_MYSH_WHATSAPP_NUMBER ?? '',
  emailTo = process.env.NEXT_PUBLIC_MYSH_SALES_EMAIL ?? 'sales@mysh.ae',
}: EquipmentQuoteBoxProps) {
  const t = equipmentDetailContent[lang];

  const [formValues, setFormValues] = useState<EquipmentQuoteFormValues>(
    emptyEquipmentQuoteFormValues,
  );

  const updateField = (
    field: keyof EquipmentQuoteFormValues,
    value: string,
  ) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  };

  const updateRentalMode = (mode: EquipmentRentalMode) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      rentalMode: mode,
    }));
  };

  const whatsAppUrl = useMemo(() => {
    return buildWhatsAppQuoteUrl({
      lang,
      equipment,
      formValues,
      categoryName,
      pageUrl,
      whatsappNumber,
    });
  }, [lang, equipment, formValues, categoryName, pageUrl, whatsappNumber]);

  const emailUrl = useMemo(() => {
    return buildMailQuoteUrl({
      lang,
      equipment,
      formValues,
      categoryName,
      pageUrl,
      emailTo,
    });
  }, [lang, equipment, formValues, categoryName, pageUrl, emailTo]);

  return (
    <section className="rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-5 shadow-[0_16px_40px_rgba(27,38,59,0.08)]">
      <div>
        

        <h2 className="text-2xl font-black tracking-[-0.03em] text-[#1B263B]">
          {t.quote.title}
        </h2>

        <p className="mt-3 text-sm font-medium leading-6 text-[#5C677D]">
          {t.quote.description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <FormField
          label={t.quote.fullName}
          value={formValues.fullName}
          onChange={(value) => updateField('fullName', value)}
        />

        <FormField
          label={t.quote.phone}
          value={formValues.phone}
          onChange={(value) => updateField('phone', value)}
        />

        <FormField
          label={t.quote.email}
          type="email"
          value={formValues.email}
          onChange={(value) => updateField('email', value)}
        />

        <FormField
          label={t.quote.projectLocation}
          value={formValues.projectLocation}
          onChange={(value) => updateField('projectLocation', value)}
        />

        <div className="sm:col-span-2">
          <span className="text-sm font-extrabold text-[#1B263B]">
            {t.quote.rentalDuration}
          </span>

          <div className="mt-2 grid rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] p-1 sm:grid-cols-2">
            <RentalModeButton
              label={t.quote.rentalDates}
              active={formValues.rentalMode === 'dates'}
              onClick={() => updateRentalMode('dates')}
            />
            <RentalModeButton
              label={t.quote.rentalPeriod}
              active={formValues.rentalMode === 'period'}
              onClick={() => updateRentalMode('period')}
            />
          </div>
        </div>

        {formValues.rentalMode === 'dates' ? (
          <>
            <FormField
              label={t.quote.startDate}
              type="date"
              value={formValues.startDate}
              onChange={(value) => updateField('startDate', value)}
            />
            <FormField
              label={t.quote.endDate}
              type="date"
              value={formValues.endDate}
              onChange={(value) => updateField('endDate', value)}
            />
          </>
        ) : (
          <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
            <FormField
              label={t.quote.months}
              type="number"
              min={1}
              value={formValues.periodMonths}
              onChange={(value) => updateField('periodMonths', value)}
            />
            <FormField
              label={t.quote.weeks}
              type="number"
              min={0}
              value={formValues.periodWeeks}
              onChange={(value) => updateField('periodWeeks', value)}
            />
            <FormField
              label={t.quote.days}
              type="number"
              min={0}
              value={formValues.periodDays}
              onChange={(value) => updateField('periodDays', value)}
            />
          </div>
        )}

        <label className="sm:col-span-2">
          <span className="text-sm font-extrabold text-[#1B263B]">
            {t.quote.message}
          </span>

          <textarea
            value={formValues.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder={t.quote.messagePlaceholder}
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#1B263B] outline-none transition placeholder:text-[#5C677D]/70 focus:border-[#1B263B] focus:bg-white"
          />
        </label>
      </div>

      <p className="mt-4 text-xs font-semibold leading-5 text-[#5C677D]">
        {t.quote.helperText}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={whatsAppUrl || undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!whatsAppUrl}
          className={[
            'inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-extrabold transition',
            whatsAppUrl
              ? 'bg-[#25D366] text-white hover:brightness-95'
              : 'pointer-events-none bg-[#C2C7C9] text-[#5C677D]',
          ].join(' ')}
        >
          {t.quote.sendWhatsApp}
        </a>

        <a
          href={emailUrl || undefined}
          aria-disabled={!emailUrl}
          className={[
            'inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-extrabold transition',
            emailUrl
              ? 'bg-[#F4D03F] text-[#1B263B] hover:brightness-95'
              : 'pointer-events-none bg-[#C2C7C9] text-[#5C677D]',
          ].join(' ')}
        >
          {t.quote.sendEmail}
        </a>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  min?: number;
  className?: string;
};

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  min,
  className = '',
}: FormFieldProps) {
  return (
    <label className={className}>
      <span className="text-sm font-extrabold text-[#1B263B]">{label}</span>

      <input
        type={type}
        min={min}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] px-4 text-sm font-semibold text-[#1B263B] outline-none transition placeholder:text-[#5C677D]/70 focus:border-[#1B263B] focus:bg-white"
      />
    </label>
  );
}

type RentalModeButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function RentalModeButton({ label, active, onClick }: RentalModeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'h-10 rounded-xl px-3 text-sm font-extrabold transition',
        active
          ? 'bg-white text-[#1B263B] shadow-sm'
          : 'text-[#5C677D] hover:text-[#1B263B]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
