'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Lang } from '@/i18n/sharedContent';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactCopy = {
  eyebrow: string;
  title: string;
  description: string;
  fields: {
    name: string;
    email: string;
    message: string;
  };
  placeholders: ContactFormValues;
  actions: {
    email: string;
    whatsapp: string;
  };
  panels: Array<{
    title: string;
    body: string;
  }>;
};

const emptyFormValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

const contactContent: Record<Lang, ContactCopy> = {
  en: {
    eyebrow: 'Contact',
    title: 'Request equipment rental support.',
    description:
      'Share your project sector, required equipment, rental duration, site location and preferred mobilization date. The MYSH team can then review availability and quote options.',
    fields: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },
    placeholders: {
      name: 'Your name',
      email: 'Personal or work email',
      message: 'Tell us what equipment or project support you need.',
    },
    actions: {
      email: 'Send by email',
      whatsapp: 'Send by WhatsApp',
    },
    panels: [
      
      
    ],
  },
  ar: {
    eyebrow: 'اتصل بنا',
    title: 'اطلب دعم تأجير المعدات.',
    description:
      'شاركنا نوع المشروع والمعدات المطلوبة ومدة الإيجار وموقع العمل وتاريخ التجهيز المفضل، وسيراجع فريق MYSH التوفر وخيارات العرض.',
    fields: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
    },
    placeholders: {
      name: 'اسمك',
      email: 'بريد شخصي أو مهني',
      message: 'أخبرنا بالمعدات أو دعم المشروع الذي تحتاجه.',
    },
    actions: {
      email: 'إرسال عبر البريد',
      whatsapp: 'إرسال عبر واتساب',
    },
    panels: [
     
      
    ],
  },
};

function buildContactMessage({
  lang,
  formValues,
}: {
  lang: Lang;
  formValues: ContactFormValues;
}) {
  const lines: string[] =
    lang === 'ar'
      ? ['مرحباً فريق MYSH،', '', 'أرغب في التواصل بخصوص طلب معدات أو دعم مشروع.']
      : ['Hello MYSH team,', '', 'I would like to contact you about equipment rental or project support.'];

  if (formValues.name.trim()) {
    lines.push(
      lang === 'ar'
        ? `الاسم: ${formValues.name.trim()}`
        : `Name: ${formValues.name.trim()}`,
    );
  }

  if (formValues.email.trim()) {
    lines.push(
      lang === 'ar'
        ? `البريد الإلكتروني: ${formValues.email.trim()}`
        : `Email: ${formValues.email.trim()}`,
    );
  }

  if (formValues.message.trim()) {
    lines.push('');
    lines.push(lang === 'ar' ? 'الرسالة:' : 'Message:');
    lines.push(formValues.message.trim());
  }

  return lines.join('\n');
}

export default function ContactPage() {
  const { lang } = useLanguage('en');
  const t = contactContent[lang];
  const isRtl = lang === 'ar';
  const [formValues, setFormValues] =
    useState<ContactFormValues>(emptyFormValues);

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  };

  const emailUrl = useMemo(() => {
    const emailTo = process.env.NEXT_PUBLIC_MYSH_SALES_EMAIL ?? 'sales@mysh.ae';
    const subject =
      lang === 'ar' ? 'طلب تواصل من موقع MYSH' : 'MYSH website contact request';
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

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#5C677D]">
            {t.description}
          </p>

          <div className="mt-8 grid gap-4">
            {t.panels.map((panel) => (
              <div key={panel.title} className="rounded-2xl bg-[#F8F9FA] p-5">
                <h2 className="text-lg font-black">{panel.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#5C677D]">
                  {panel.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-[#C2C7C9]/70 bg-white p-6 shadow-[0_16px_40px_rgba(27,38,59,0.08)] md:p-8"
        >
          <div className="grid gap-5">
            <FormField
              id="contact-name"
              label={t.fields.name}
              value={formValues.name}
              placeholder={t.placeholders.name}
              onChange={(value) => updateField('name', value)}
            />

            <FormField
              id="contact-email"
              label={t.fields.email}
              type="email"
              value={formValues.email}
              placeholder={t.placeholders.email}
              onChange={(value) => updateField('email', value)}
            />

            <label>
              <span className="text-sm font-extrabold text-[#1B263B]">
                {t.fields.message}
              </span>

              <textarea
                id="contact-message"
                value={formValues.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder={t.placeholders.message}
                rows={7}
                className="mt-2 w-full resize-none rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#1B263B] outline-none transition placeholder:text-[#5C677D]/70 focus:border-[#1B263B] focus:bg-white"
              />
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={emailUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
            >
              <MailIcon />
              {t.actions.email}
            </a>

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
          </div>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
};

function FormField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: FormFieldProps) {
  return (
    <label htmlFor={id}>
      <span className="text-sm font-extrabold text-[#1B263B]">{label}</span>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] px-4 text-sm font-semibold text-[#1B263B] outline-none transition placeholder:text-[#5C677D]/70 focus:border-[#1B263B] focus:bg-white"
      />
    </label>
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
