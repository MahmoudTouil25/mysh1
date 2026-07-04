import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import SectionHeading from '../ui/SectionHeading';

type TrustedClientsSectionProps = {
  lang: Lang;
};

export default function TrustedClientsSection({
  lang,
}: TrustedClientsSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';
  const logoScale = {
    default: 1,
    featured: 1.28,
    moreFeatured: 1.7,
  };
  const clientLogos = [
    {
      name: 'NMDC Group',
      src: '/clients/NMDC%20Group%20white.svg',
      className: 'bg-[#062D31]',
      scale: logoScale.default,
    },
    {
      name: 'Trojan Construction Group',
      src: '/clients/trojan_descktop.webp',
      className: 'bg-white',
      scale: logoScale.moreFeatured,
    },
    {
      name: 'Client logo',
      src: '/clients/blob-aa8b55e.webp',
      className: 'bg-white',
      scale: logoScale.featured,
    },
    {
      name: 'Client project partner',
      src: '/clients/PHOTO-2025-01-07-22-50-12-2.jpg',
      className: 'bg-white',
      scale: logoScale.default,
    },
  ];

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="trusted-clients-title"
      className="bg-white"
    >
      <div className="px-4 py-section-mobile md:py-section">
        <div
          className={[
            'mx-auto max-w-7xl',
            isRtl ? 'text-right' : 'text-left',
          ].join(' ')}
        >
          <SectionHeading
            id="trusted-clients-title"
            eyebrow={t.trust.clients.eyebrow}
            title={t.trust.clients.title}
            subtitle={t.trust.clients.description}
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <ClientLogoTile key={logo.src} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ClientLogoTileProps = {
  logo: {
    name: string;
    src: string;
    className: string;
    scale: number;
  };
};

function ClientLogoTile({ logo }: ClientLogoTileProps) {
  return (
    <div
      className={[
        'group flex min-h-28 items-center justify-center rounded-2xl border border-brand-dark/10 p-5 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover',
        logo.className,
      ].join(' ')}
    >
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={220}
        height={96}
        style={
          {
            '--client-logo-scale': logo.scale,
          } as CSSProperties
        }
        className="max-h-16 w-auto object-contain [transform:scale(var(--client-logo-scale))] transition-transform duration-300 group-hover:[transform:scale(calc(var(--client-logo-scale)*1.05))]"
      />
    </div>
  );
}
