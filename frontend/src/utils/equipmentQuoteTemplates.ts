import type { Lang } from '../i18n/sharedContent';
import type { Equipment } from '../types/equipment';

export type EquipmentQuoteFormValues = {
  fullName: string;
  phone: string;
  email: string;
  projectLocation: string;
  rentalDuration: string;
  message: string;
};

export const emptyEquipmentQuoteFormValues: EquipmentQuoteFormValues = {
  fullName: '',
  phone: '',
  email: '',
  projectLocation: '',
  rentalDuration: '',
  message: '',
};

type BuildQuoteTemplateParams = {
  lang: Lang;
  equipment: Equipment;
  formValues: EquipmentQuoteFormValues;
  categoryName?: string;
  pageUrl?: string;
};

type BuildWhatsAppQuoteUrlParams = BuildQuoteTemplateParams & {
  whatsappNumber: string;
};

type BuildMailQuoteUrlParams = BuildQuoteTemplateParams & {
  emailTo: string;
};

function cleanValue(value: string): string {
  return value.trim();
}

function hasValue(value: string): boolean {
  return cleanValue(value).length > 0;
}

function formatEquipmentLine(equipment: Equipment): string {
  return `${equipment.brand} ${equipment.model} - ${equipment.name}`;
}

export function buildEquipmentQuoteSubject({
  lang,
  equipment,
}: Pick<BuildQuoteTemplateParams, 'lang' | 'equipment'>): string {
  if (lang === 'ar') {
    return `طلب عرض سعر - ${equipment.name}`;
  }

  return `Quote Request - ${equipment.name}`;
}

export function buildEquipmentQuoteMessage({
  lang,
  equipment,
  formValues,
  categoryName,
  pageUrl,
}: BuildQuoteTemplateParams): string {
  const lines: string[] = [];

  if (lang === 'ar') {
    lines.push('مرحباً فريق MYSH،');
    lines.push('');
    lines.push('أرغب في طلب عرض سعر للمعدة التالية:');
    lines.push(`المعدة: ${formatEquipmentLine(equipment)}`);

    if (categoryName) {
      lines.push(`الفئة: ${categoryName}`);
    }

    lines.push(`الموقع الحالي: ${equipment.location}`);
    lines.push(`السعر اليومي التقريبي: AED ${equipment.dailyRate}`);
    lines.push('');

    lines.push('معلومات الطلب:');

    if (hasValue(formValues.fullName)) {
      lines.push(`الاسم: ${cleanValue(formValues.fullName)}`);
    }

    if (hasValue(formValues.phone)) {
      lines.push(`الهاتف / واتساب: ${cleanValue(formValues.phone)}`);
    }

    if (hasValue(formValues.email)) {
      lines.push(`البريد الإلكتروني: ${cleanValue(formValues.email)}`);
    }

    if (hasValue(formValues.projectLocation)) {
      lines.push(`موقع المشروع: ${cleanValue(formValues.projectLocation)}`);
    }

    if (hasValue(formValues.rentalDuration)) {
      lines.push(`مدة الإيجار: ${cleanValue(formValues.rentalDuration)}`);
    }

    if (hasValue(formValues.message)) {
      lines.push('');
      lines.push('رسالة إضافية:');
      lines.push(cleanValue(formValues.message));
    }

    if (pageUrl) {
      lines.push('');
      lines.push(`رابط المعدة: ${pageUrl}`);
    }

    lines.push('');
    lines.push('يرجى تزويدي بالتوفر والأسعار وشروط الإيجار.');

    return lines.join('\n');
  }

  lines.push('Hello MYSH team,');
  lines.push('');
  lines.push('I would like to request a quote for the following equipment:');
  lines.push(`Equipment: ${formatEquipmentLine(equipment)}`);

  if (categoryName) {
    lines.push(`Category: ${categoryName}`);
  }

  lines.push(`Current location: ${equipment.location}`);
  lines.push(`Estimated daily rate: AED ${equipment.dailyRate}`);
  lines.push('');

  lines.push('Request details:');

  if (hasValue(formValues.fullName)) {
    lines.push(`Name: ${cleanValue(formValues.fullName)}`);
  }

  if (hasValue(formValues.phone)) {
    lines.push(`Phone / WhatsApp: ${cleanValue(formValues.phone)}`);
  }

  if (hasValue(formValues.email)) {
    lines.push(`Email: ${cleanValue(formValues.email)}`);
  }

  if (hasValue(formValues.projectLocation)) {
    lines.push(`Project location: ${cleanValue(formValues.projectLocation)}`);
  }

  if (hasValue(formValues.rentalDuration)) {
    lines.push(`Rental duration: ${cleanValue(formValues.rentalDuration)}`);
  }

  if (hasValue(formValues.message)) {
    lines.push('');
    lines.push('Additional message:');
    lines.push(cleanValue(formValues.message));
  }

  if (pageUrl) {
    lines.push('');
    lines.push(`Equipment page: ${pageUrl}`);
  }

  lines.push('');
  lines.push('Please share availability, pricing and rental conditions.');

  return lines.join('\n');
}

export function buildWhatsAppQuoteUrl({
  whatsappNumber,
  ...templateParams
}: BuildWhatsAppQuoteUrlParams): string {
  const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');

  if (!cleanNumber) {
    return '';
  }

  const message = buildEquipmentQuoteMessage(templateParams);

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailQuoteUrl({
  emailTo,
  ...templateParams
}: BuildMailQuoteUrlParams): string {
  const cleanEmail = emailTo.trim();

  if (!cleanEmail) {
    return '';
  }

  const subject = buildEquipmentQuoteSubject({
    lang: templateParams.lang,
    equipment: templateParams.equipment,
  });

  const body = buildEquipmentQuoteMessage(templateParams);

  return `mailto:${cleanEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}