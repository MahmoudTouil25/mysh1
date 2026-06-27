import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';

type FloatingWhatsAppProps = {
  lang: Lang;
  phoneNumber?: string;
  message?: string;
};

export default function FloatingWhatsApp({
  lang,
  phoneNumber = '',
  message = 'Hello MYSH, I would like to request equipment rental information.',
}: FloatingWhatsAppProps) {
  const t = sharedContent[lang];

  const href = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : '#contact';

  return (
    <a
      href={href}
      aria-label={t.whatsapp.label}
      target={phoneNumber ? '_blank' : undefined}
      rel={phoneNumber ? 'noreferrer' : undefined}
      className="fixed bottom-5 end-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M5.2 19.1L6.1 16.1C5.4 14.9 5 13.5 5 12C5 7.6 8.4 4.2 12.8 4.2C16.9 4.2 20.2 7.5 20.2 11.6C20.2 16 16.8 19.4 12.4 19.4C11 19.4 9.7 19 8.6 18.4L5.2 19.1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 8.7C9.2 8.7 8.9 8.8 8.7 9.1C8.5 9.4 8.1 9.8 8.1 10.6C8.1 11.4 8.7 12.2 8.8 12.3C8.9 12.5 10 14.3 11.8 15C13.3 15.6 13.7 15.5 14.1 15.4C14.6 15.3 15.4 14.8 15.6 14.3C15.8 13.8 15.8 13.4 15.7 13.3C15.6 13.2 15.4 13.1 15.1 12.9C14.8 12.8 13.8 12.3 13.5 12.2C13.3 12.1 13.1 12.1 12.9 12.4C12.7 12.7 12.3 13.2 12.1 13.3C12 13.5 11.8 13.5 11.5 13.3C11.2 13.2 10.5 12.9 9.9 12.3C9.4 11.8 9.1 11.2 9 11C8.9 10.7 9 10.6 9.2 10.4C9.3 10.3 9.5 10.1 9.6 10C9.7 9.8 9.8 9.7 9.9 9.5C10 9.3 10 9.2 9.9 9.1C9.8 8.9 9.6 8.7 9.4 8.7Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}