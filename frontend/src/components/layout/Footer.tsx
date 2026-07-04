import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const t = sharedContent[lang];
  const year = new Date().getFullYear();
  const isRtl = lang === 'ar';

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

  return (
    <footer
      id="contact"
      dir={isRtl ? 'rtl' : 'ltr'}
      className={[
        'bg-[#DEE3E5] px-4 py-12 md:py-16',
        isRtl ? 'text-right' : 'text-left',
      ].join(' ')}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="MYSH homepage"
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B263B]"
          >
            <Image
              src="/logo-mysh-Footer.png"
              alt="MYSH Heavy Equipment Rental"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
          </Link>

          <p className="mt-5 max-w-prose text-body text-[#424849]">
            {t.footer.description}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 sm:gap-12"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-eyebrow uppercase text-[#1B263B]/60">
                {section.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm font-medium text-[#424849] transition hover:text-[#1B263B]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#C2C7C9] pt-6">
        <p className="text-eyebrow uppercase text-[#424849]">
          © {year} MYSH Industrial Equipment Rental. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
