'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Lang } from '@/i18n/sharedContent';
import { useEquipmentFavorites } from '@/contexts/EquipmentFavoritesContext';
import {
  getEquipmentQuoteDetails,
  type QuoteEquipmentDetails,
} from '@/utils/contactQuote';

type RentalMode = 'dates' | 'period';

type ContactFormValues = {
  fullName: string;
  phone: string;
  email: string;
  projectLocation: string;
  rentalMode: RentalMode;
  startDate: string;
  endDate: string;
  periodMonths: string;
  periodWeeks: string;
  periodDays: string;
  message: string;
};

type ContactCopy = {
  eyebrow: string;
  title: string;
  description: string;
  selectedTitle: string;
  selectedSingle: string;
  selectedMultiple: string;
  fields: {
    fullName: string;
    phone: string;
    email: string;
    projectLocation: string;
    rentalDuration: string;
    rentalDates: string;
    rentalPeriod: string;
    startDate: string;
    endDate: string;
    months: string;
    weeks: string;
    days: string;
    message: string;
  };
  placeholders: {
    fullName: string;
    phone: string;
    email: string;
    projectLocation: string;
    message: string;
  };
  actions: {
    email: string;
    whatsapp: string;
  };
  helperText: string;
};

const emptyFormValues: ContactFormValues = {
  fullName: '',
  phone: '',
  email: '',
  projectLocation: '',
  rentalMode: 'dates',
  startDate: '',
  endDate: '',
  periodMonths: '1',
  periodWeeks: '0',
  periodDays: '0',
  message: '',
};

const contactContent: Record<Lang, ContactCopy> = {
  en: {
    eyebrow: 'Request Quote',
    title: 'Tell us what your project needs.',
    description:
      'Send a clear rental request by WhatsApp or email. If you selected equipment, the message is prepared automatically and you can still refine it before sending.',
    selectedTitle: 'Selected equipment',
    selectedSingle: '1 equipment item is ready in the message.',
    selectedMultiple: 'equipment items are ready in the message.',
    fields: {
      fullName: 'Full name',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      projectLocation: 'Project location',
      rentalDuration: 'Rental duration',
      rentalDates: 'Start / End dates',
      rentalPeriod: 'Rental period',
      startDate: 'Start date',
      endDate: 'End date',
      months: 'Months',
      weeks: 'Weeks',
      days: 'Days',
      message: 'Message',
    },
    placeholders: {
      fullName: 'Your name',
      phone: '+971...',
      email: 'Personal or work email',
      projectLocation: 'Dubai, UAE',
      message: 'Tell us what equipment or project support you need.',
    },
    actions: {
      email: 'Send via Email',
      whatsapp: 'Send via WhatsApp',
    },
    helperText:
      'Your message will be prepared with your contact details, rental window and selected equipment.',
  },
  ar: {
    eyebrow: 'طلب عرض سعر',
    title: 'أخبرنا بما يحتاجه مشروعك.',
    description:
      'أرسل طلب تأجير واضح عبر واتساب أو البريد الإلكتروني. إذا اخترت معدات، سيتم تجهيز الرسالة تلقائياً ويمكنك تعديلها قبل الإرسال.',
    selectedTitle: 'المعدات المحددة',
    selectedSingle: 'تم تجهيز معدة واحدة في الرسالة.',
    selectedMultiple: 'معدات جاهزة في الرسالة.',
    fields: {
      fullName: 'الاسم الكامل',
      phone: 'الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      projectLocation: 'موقع المشروع',
      rentalDuration: 'مدة الإيجار',
      rentalDates: 'تاريخ البداية والنهاية',
      rentalPeriod: 'فترة الإيجار',
      startDate: 'تاريخ البداية',
      endDate: 'تاريخ النهاية',
      months: 'الأشهر',
      weeks: 'الأسابيع',
      days: 'الأيام',
      message: 'الرسالة',
    },
    placeholders: {
      fullName: 'اسمك',
      phone: '+971...',
      email: 'بريد شخصي أو مهني',
      projectLocation: 'دبي، الإمارات',
      message: 'أخبرنا بالمعدات أو دعم المشروع الذي تحتاجه.',
    },
    actions: {
      email: 'الإرسال عبر البريد',
      whatsapp: 'الإرسال عبر واتساب',
    },
    helperText:
      'سيتم تجهيز الرسالة بمعلومات التواصل ومدة الإيجار والمعدات المحددة.',
  },
};

function cleanValue(value: string): string {
  return value.trim();
}

function hasValue(value: string | undefined): value is string {
  return Boolean(value?.trim());
}

function parseDurationPart(value: string, fallbackValue: number): number {
  const numericValue = Number.parseInt(value, 10);

  return Number.isFinite(numericValue) && numericValue >= 0
    ? numericValue
    : fallbackValue;
}

function formatPeriodPart(
  value: number,
  singularLabel: string,
  pluralLabel: string,
): string | null {
  if (value <= 0) {
    return null;
  }

  return `${value} ${value === 1 ? singularLabel : pluralLabel}`;
}

function buildRentalDurationSummary({
  lang,
  formValues,
}: {
  lang: Lang;
  formValues: ContactFormValues;
}): string {
  if (formValues.rentalMode === 'dates') {
    const startDate = cleanValue(formValues.startDate);
    const endDate = cleanValue(formValues.endDate);

    if (startDate && endDate) {
      return lang === 'ar'
        ? `من ${startDate} إلى ${endDate}`
        : `From ${startDate} to ${endDate}`;
    }

    if (startDate) {
      return lang === 'ar' ? `تبدأ في ${startDate}` : `Starts on ${startDate}`;
    }

    if (endDate) {
      return lang === 'ar' ? `تنتهي في ${endDate}` : `Ends on ${endDate}`;
    }

    return '';
  }

  const months = Math.max(1, parseDurationPart(formValues.periodMonths, 1));
  const weeks = parseDurationPart(formValues.periodWeeks, 0);
  const days = parseDurationPart(formValues.periodDays, 0);

  const parts =
    lang === 'ar'
      ? [
          formatPeriodPart(months, 'شهر', 'أشهر'),
          formatPeriodPart(weeks, 'أسبوع', 'أسابيع'),
          formatPeriodPart(days, 'يوم', 'أيام'),
        ]
      : [
          formatPeriodPart(months, 'month', 'months'),
          formatPeriodPart(weeks, 'week', 'weeks'),
          formatPeriodPart(days, 'day', 'days'),
        ];

  return parts.filter((part): part is string => Boolean(part)).join(', ');
}

function parseEquipmentFromParams(
  searchParams: URLSearchParams,
): QuoteEquipmentDetails | null {
  if (searchParams.get('quote') !== 'equipment') {
    return null;
  }

  const name = searchParams.get('name')?.trim();

  if (!name) {
    return null;
  }

  return {
    id: searchParams.get('id') ?? undefined,
    name,
    brand: searchParams.get('brand') ?? undefined,
    model: searchParams.get('model') ?? undefined,
    year: searchParams.get('year') ?? undefined,
    category: searchParams.get('category') ?? undefined,
    availability: searchParams.get('availability') ?? undefined,
    condition: searchParams.get('condition') ?? undefined,
    location: searchParams.get('location') ?? undefined,
    operatingWeight: searchParams.get('operatingWeight') ?? undefined,
    enginePower: searchParams.get('enginePower') ?? undefined,
  };
}

function buildEquipmentLines({
  lang,
  equipment,
}: {
  lang: Lang;
  equipment: QuoteEquipmentDetails[];
}): string[] {
  if (equipment.length === 0) {
    return [];
  }

  const lines: string[] =
    lang === 'ar'
      ? ['أرغب في طلب عرض سعر للمعدات التالية:']
      : ['I would like to request a quote for the following equipment:'];

  equipment.forEach((item, index) => {
    lines.push('');
    lines.push(`${index + 1}. ${item.name}`);

    const details = [
      [lang === 'ar' ? 'العلامة' : 'Brand', item.brand],
      [lang === 'ar' ? 'الموديل' : 'Model', item.model],
      [lang === 'ar' ? 'السنة' : 'Year', item.year],
      [lang === 'ar' ? 'الفئة' : 'Category', item.category],
      [lang === 'ar' ? 'الحالة' : 'Condition', item.condition],
      [lang === 'ar' ? 'التوفر' : 'Availability', item.availability],
      [lang === 'ar' ? 'الموقع' : 'Location', item.location],
      [lang === 'ar' ? 'وزن التشغيل' : 'Operating weight', item.operatingWeight],
      [lang === 'ar' ? 'قوة المحرك' : 'Engine power', item.enginePower],
    ];

    details.forEach(([label, value]) => {
      if (hasValue(value)) {
        lines.push(`   ${label}: ${value.trim()}`);
      }
    });
  });

  lines.push('');
  lines.push(
    lang === 'ar'
      ? 'يرجى تزويدي بالتوفر والأسعار وشروط الإيجار وخيارات التجهيز.'
      : 'Please share availability, pricing, rental terms and mobilization options.',
  );

  return lines;
}

function buildAutomaticMessage({
  lang,
  equipment,
}: {
  lang: Lang;
  equipment: QuoteEquipmentDetails[];
}): string {
  return buildEquipmentLines({ lang, equipment }).join('\n');
}

function getEquipmentKey(item: QuoteEquipmentDetails): string {
  if (item.id?.trim()) {
    return `id:${item.id.trim()}`;
  }

  return [
    item.name,
    item.brand,
    item.model,
    item.year,
  ]
    .map((value) => value?.trim().toLowerCase() ?? '')
    .join('|');
}

function mergeSelectedEquipment(
  equipment: QuoteEquipmentDetails[],
): QuoteEquipmentDetails[] {
  const seenKeys = new Set<string>();

  return equipment.filter((item) => {
    const key = getEquipmentKey(item);

    if (seenKeys.has(key)) {
      return false;
    }

    seenKeys.add(key);
    return true;
  });
}

function buildContactMessage({
  lang,
  formValues,
}: {
  lang: Lang;
  formValues: ContactFormValues;
}) {
  const lines: string[] =
    lang === 'ar'
      ? ['مرحباً فريق MYSH،', '', 'أرغب في طلب عرض سعر لتأجير معدات.']
      : ['Hello MYSH team,', '', 'I would like to request an equipment rental quote.'];

  if (formValues.fullName.trim()) {
    lines.push(
      lang === 'ar'
        ? `الاسم: ${formValues.fullName.trim()}`
        : `Name: ${formValues.fullName.trim()}`,
    );
  }

  if (formValues.phone.trim()) {
    lines.push(
      lang === 'ar'
        ? `الهاتف / واتساب: ${formValues.phone.trim()}`
        : `Phone / WhatsApp: ${formValues.phone.trim()}`,
    );
  }

  if (formValues.email.trim()) {
    lines.push(
      lang === 'ar'
        ? `البريد الإلكتروني: ${formValues.email.trim()}`
        : `Email: ${formValues.email.trim()}`,
    );
  }

  if (formValues.projectLocation.trim()) {
    lines.push(
      lang === 'ar'
        ? `موقع المشروع: ${formValues.projectLocation.trim()}`
        : `Project location: ${formValues.projectLocation.trim()}`,
    );
  }

  const rentalDuration = buildRentalDurationSummary({ lang, formValues });

  if (rentalDuration) {
    lines.push(
      lang === 'ar'
        ? `مدة الإيجار: ${rentalDuration}`
        : `Rental duration: ${rentalDuration}`,
    );
  }

  if (formValues.message.trim()) {
    lines.push('');
    lines.push(lang === 'ar' ? 'تفاصيل الطلب:' : 'Request details:');
    lines.push(formValues.message.trim());
  }

  return lines.join('\n');
}

export default function ContactPage() {
  const { lang } = useLanguage('en');
  const t = contactContent[lang];
  const isRtl = lang === 'ar';
  const searchParams = useSearchParams();
  const searchParamString = searchParams.toString();
  const { favoriteEquipment } = useEquipmentFavorites();
  const [formValues, setFormValues] =
    useState<ContactFormValues>(emptyFormValues);
  const lastAutomaticMessageRef = useRef('');

  const selectedEquipment = useMemo(() => {
    const currentSearchParams = new URLSearchParams(searchParamString);
    const quoteMode = currentSearchParams.get('quote');
    const favoriteQuoteDetails = favoriteEquipment.map((item) =>
      getEquipmentQuoteDetails({ item }),
    );

    if (quoteMode === 'favorites') {
      return favoriteQuoteDetails;
    }

    const equipmentFromParams = parseEquipmentFromParams(currentSearchParams);

    if (quoteMode === 'equipment' && equipmentFromParams) {
      return mergeSelectedEquipment([
        equipmentFromParams,
        ...favoriteQuoteDetails,
      ]);
    }

    return [];
  }, [favoriteEquipment, searchParamString]);

  const automaticMessage = useMemo(() => {
    return buildAutomaticMessage({ lang, equipment: selectedEquipment });
  }, [lang, selectedEquipment]);

  useEffect(() => {
    if (!automaticMessage) {
      return;
    }

    setFormValues((currentValues) => {
      const currentMessage = currentValues.message.trim();
      const previousAutomaticMessage = lastAutomaticMessageRef.current;

      if (currentMessage && currentValues.message !== previousAutomaticMessage) {
        return currentValues;
      }

      lastAutomaticMessageRef.current = automaticMessage;

      return {
        ...currentValues,
        message: automaticMessage,
      };
    });
  }, [automaticMessage]);

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  };

  const updateRentalMode = (mode: RentalMode) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      rentalMode: mode,
    }));
  };

  const emailUrl = useMemo(() => {
    const emailTo = process.env.NEXT_PUBLIC_MYSH_SALES_EMAIL ?? 'sales@mysh.ae';
    const subject =
      lang === 'ar' ? 'طلب عرض سعر من موقع MYSH' : 'MYSH quote request';
    const body = buildContactMessage({ lang, formValues });

    return `mailto:${emailTo}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [lang, formValues]);

  const whatsAppUrl = useMemo(() => {
    const whatsappNumber =
      process.env.NEXT_PUBLIC_MYSH_WHATSAPP_NUMBER ?? '';
    const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');

    if (!cleanNumber) {
      return '';
    }

    const message = buildContactMessage({ lang, formValues });

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }, [lang, formValues]);

  const selectedEquipmentLabel =
    selectedEquipment.length === 1
      ? t.selectedSingle
      : `${selectedEquipment.length} ${t.selectedMultiple}`;

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#5C677D]">
            {t.description}
          </p>

          {selectedEquipment.length > 0 && (
            <div className="mt-8 rounded-2xl border border-[#F4D03F]/45 bg-[#F4D03F]/12 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#855300]">
                {t.selectedTitle}
              </p>
              <p className="mt-2 text-sm font-extrabold text-[#1B263B]">
                {selectedEquipmentLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedEquipment.map((item) => (
                  <span
                    key={`${item.id ?? item.name}-${item.model ?? ''}`}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#1B263B] shadow-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-5 shadow-[0_16px_40px_rgba(27,38,59,0.08)] md:p-6"
        >
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-[#1B263B]">
              {t.eyebrow}
            </h2>

            <p className="mt-3 text-sm font-medium leading-6 text-[#5C677D]">
              {t.helperText}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FormField
              label={t.fields.fullName}
              value={formValues.fullName}
              placeholder={t.placeholders.fullName}
              onChange={(value) => updateField('fullName', value)}
            />

            <FormField
              label={t.fields.phone}
              value={formValues.phone}
              placeholder={t.placeholders.phone}
              onChange={(value) => updateField('phone', value)}
            />

            <FormField
              label={t.fields.email}
              type="email"
              value={formValues.email}
              placeholder={t.placeholders.email}
              onChange={(value) => updateField('email', value)}
            />

            <FormField
              label={t.fields.projectLocation}
              value={formValues.projectLocation}
              placeholder={t.placeholders.projectLocation}
              onChange={(value) => updateField('projectLocation', value)}
            />

            <div className="sm:col-span-2">
              <span className="text-sm font-extrabold text-[#1B263B]">
                {t.fields.rentalDuration}
              </span>

              <div className="mt-2 grid rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] p-1 sm:grid-cols-2">
                <RentalModeButton
                  label={t.fields.rentalDates}
                  active={formValues.rentalMode === 'dates'}
                  onClick={() => updateRentalMode('dates')}
                />
                <RentalModeButton
                  label={t.fields.rentalPeriod}
                  active={formValues.rentalMode === 'period'}
                  onClick={() => updateRentalMode('period')}
                />
              </div>
            </div>

            {formValues.rentalMode === 'dates' ? (
              <>
                <FormField
                  label={t.fields.startDate}
                  type="date"
                  value={formValues.startDate}
                  onChange={(value) => updateField('startDate', value)}
                />
                <FormField
                  label={t.fields.endDate}
                  type="date"
                  value={formValues.endDate}
                  onChange={(value) => updateField('endDate', value)}
                />
              </>
            ) : (
              <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
                <FormField
                  label={t.fields.months}
                  type="number"
                  min={1}
                  value={formValues.periodMonths}
                  onChange={(value) => updateField('periodMonths', value)}
                />
                <FormField
                  label={t.fields.weeks}
                  type="number"
                  min={0}
                  value={formValues.periodWeeks}
                  onChange={(value) => updateField('periodWeeks', value)}
                />
                <FormField
                  label={t.fields.days}
                  type="number"
                  min={0}
                  value={formValues.periodDays}
                  onChange={(value) => updateField('periodDays', value)}
                />
              </div>
            )}

            <label className="sm:col-span-2">
              <span className="text-sm font-extrabold text-[#1B263B]">
                {t.fields.message}
              </span>

              <textarea
                value={formValues.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder={t.placeholders.message}
                rows={8}
                className="mt-2 w-full resize-none rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] px-4 py-3 text-sm font-semibold leading-6 text-[#1B263B] outline-none transition placeholder:text-[#5C677D]/70 focus:border-[#1B263B] focus:bg-white"
              />
            </label>
          </div>

          <p className="mt-4 text-xs font-semibold leading-5 text-[#5C677D]">
            {t.helperText}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsAppUrl || undefined}
              target={whatsAppUrl ? '_blank' : undefined}
              rel={whatsAppUrl ? 'noreferrer' : undefined}
              aria-disabled={!whatsAppUrl}
              className={[
                'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-extrabold transition',
                whatsAppUrl
                  ? 'bg-[#25D366] text-white hover:brightness-95'
                  : 'pointer-events-none bg-[#C2C7C9] text-[#5C677D]',
              ].join(' ')}
            >
              <WhatsAppIcon />
              {t.actions.whatsapp}
            </a>

            <a
              href={emailUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
            >
              <MailIcon />
              {t.actions.email}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: number;
  className?: string;
};

function FormField({
  label,
  value,
  onChange,
  placeholder,
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
        placeholder={placeholder}
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

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="M4.5 6.5h15v11h-15v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 7 7 5.6L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="M5.2 19.1 6.1 16.1C5.4 14.9 5 13.5 5 12c0-4.4 3.4-7.8 7.8-7.8 4.1 0 7.4 3.3 7.4 7.4 0 4.4-3.4 7.8-7.8 7.8-1.4 0-2.7-.4-3.8-1l-3.4.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.7c-.2 0-.5.1-.7.4-.2.3-.6.7-.6 1.5s.6 1.6.7 1.7c.1.2 1.2 2 3 2.7 1.5.6 1.9.5 2.3.4.5-.1 1.3-.6 1.5-1.1.2-.5.2-.9.1-1-.1-.1-.3-.2-.6-.4-.3-.1-1.3-.6-1.6-.7-.2-.1-.4-.1-.6.2-.2.3-.6.8-.8.9-.1.2-.3.2-.6 0-.3-.1-1-.4-1.6-1-.5-.5-.8-1.1-.9-1.3-.1-.3 0-.4.2-.6.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5.1-.2.1-.3 0-.4-.1-.2-.3-.4-.5-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
