'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '../../i18n/sharedContent';
import { sharedContent } from '../../i18n/sharedContent';
import LanguageToggle from '../common/LanguageToggle';

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

type NavLinkItem = {
  label: string;
  href: string;
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = sharedContent[lang];

  const navLinks: NavLinkItem[] = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.equipment, href: '/equipment' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.csr, href: '/csr' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const getLinkClass = (href: string) =>
    [
      'text-sm font-semibold transition hover:text-white',
      pathname === href ? 'text-white' : 'text-white/80',
    ].join(' ');

  const getMobileLinkClass = (href: string) =>
    [
      'rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white/10 hover:text-white',
      pathname === href ? 'bg-white/10 text-white' : 'text-white/85',
    ].join(' ');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Primary navigation"
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/20
            bg-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.18)]
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-white/10
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-white/8 to-transparent" />

          <div className="relative z-10 flex min-h-16 items-center justify-between gap-4 px-4 md:px-6">
            <Link
              href="/"
              aria-label="MYSH homepage"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img
                src="/mysh-logo-for-dark-navbar.png"
                alt="MYSH Heavy Equipment Rental"
                className="h-11 w-auto object-contain md:h-12"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageToggle lang={lang} setLang={setLang} />

              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
              >
                {t.nav.quote}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle lang={lang} setLang={setLang} />

              <button
                type="button"
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span className="sr-only">
                  {isOpen ? t.nav.closeMenu : t.nav.openMenu}
                </span>

                <span className="flex flex-col gap-1.5">
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? 'translate-y-2 rotate-45' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? 'opacity-0' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block h-0.5 w-5 rounded-full bg-current transition',
                      isOpen ? '-translate-y-2 -rotate-45' : '',
                    ].join(' ')}
                  />
                </span>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="relative z-10 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={getMobileLinkClass(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B]"
                >
                  {t.nav.quote}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
