import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';

type FooterProps = {
  lang: Lang;
};

type FooterContactItem = {
  label: string;
  value: string;
  href?: string;
  valueDir?: 'ltr' | 'rtl' | 'auto';
};

function getPublicPhoneNumber() {
  const phoneNumber = process.env.NEXT_PUBLIC_MYSH_WHATSAPP_NUMBER?.trim();

  if (!phoneNumber || !/^\+?\d{7,15}$/.test(phoneNumber)) {
    return null;
  }

  return phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
}

export default function Footer({ lang }: FooterProps) {
  const t = sharedContent[lang];
  const year = new Date().getFullYear();
  const isRtl = lang === 'ar';
  const publicPhoneNumber = getPublicPhoneNumber();
  const publicEmail =
    process.env.NEXT_PUBLIC_MYSH_SALES_EMAIL?.trim() ||
    t.footer.contact.emailValue;

  const footerSections = [
    {
      title: t.footer.company,
      items: [
        { label: t.footer.services, href: '/services' },
        { label: t.footer.equipment, href: '/equipment' },
        { label: t.nav.projects, href: '/projects' },
        { label: t.nav.blog, href: '/blog' },
      ],
    },
    {
      title: t.footer.legal,
      items: [
        { label: 'CSR', href: '/csr' },
        { label: t.nav.contact, href: '/contact' },
      ],
    },
  ];
  const contactItems: FooterContactItem[] = [
    {
      label: t.footer.contact.address,
      value: t.footer.contact.addressValue,
    },
    {
      label: t.footer.contact.phone,
      value: publicPhoneNumber ?? t.footer.contact.phoneValue,
      href: publicPhoneNumber ? `tel:${publicPhoneNumber}` : undefined,
      valueDir: 'ltr',
    },
    {
      label: t.footer.contact.email,
      value: publicEmail,
      href: `mailto:${publicEmail}`,
      valueDir: 'ltr',
    },
  ];

  return (
    <footer
      id="contact"
      dir={isRtl ? 'rtl' : 'ltr'}
      className={[
        'relative isolate overflow-hidden bg-[#062D31]/90 px-4 py-12 text-white backdrop-blur-xl supports-[backdrop-filter]:bg-[#062D31]/82 md:py-16',
        isRtl ? 'text-right' : 'text-left',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#062D31]/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.16),transparent_34%),linear-gradient(180deg,rgba(6,45,49,0.28),rgba(6,45,49,0.88))]"
      />

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.35fr_0.9fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="MYSH homepage"
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Image
              src="/logo-mysh-Footer.png"
              alt="MYSH Heavy Equipment Rental"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
          </Link>

          <p className="mt-5 max-w-prose text-body text-white/72">
            {t.footer.description}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 sm:gap-12"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-eyebrow uppercase text-white/55">
                {section.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm font-medium text-white/72 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <section aria-labelledby="footer-contact-title">
          <h2
            id="footer-contact-title"
            className="text-eyebrow uppercase text-white/55"
          >
            {t.footer.contact.title}
          </h2>

          <dl className="mt-4 space-y-4">
            {contactItems.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#F4D03F]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-body-sm font-medium text-white/72">
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.valueDir}
                      className="inline-block transition hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span dir={item.valueDir} className="inline-block">
                      {item.value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/16 pt-6">
        <p className="text-eyebrow uppercase text-white/58">
          &copy; {year} MYSH Industrial Equipment Rental. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
