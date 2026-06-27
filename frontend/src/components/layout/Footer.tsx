import Link from 'next/link';
import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const t = sharedContent[lang];
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: t.footer.company,
      items: [
        { label: t.footer.services, href: '/services' },
        { label: t.footer.equipment, href: '/equipment' },
        { label: 'Projects', href: '/projects' },
        { label: 'Blog', href: '/blog' },
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
    <footer id="contact" className="bg-[#DEE3E5] px-4 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="MYSH homepage"
            className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B263B]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B263B] text-lg font-black text-[#F4D03F]">
              M
            </div>

            <div>
              <span className="block text-xl font-extrabold text-[#1B263B]">
                MYSH
              </span>
              <span className="text-sm font-semibold text-[#5C677D]">
                Heavy Equipment Rental
              </span>
            </div>
          </Link>

          <p className="mt-5 max-w-md text-base leading-7 text-[#424849]">
            {t.footer.description}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 sm:gap-12"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1B263B]/60">
                {section.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-[#424849] transition hover:text-[#1B263B]"
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
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#424849]">
          © {year} MYSH Industrial Equipment Rental. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
