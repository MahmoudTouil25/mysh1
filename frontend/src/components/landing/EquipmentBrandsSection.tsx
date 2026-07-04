import Image from 'next/image';
import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import SectionHeading from '../ui/SectionHeading';

type EquipmentBrandsSectionProps = {
  lang: Lang;
};

export default function EquipmentBrandsSection({
  lang,
}: EquipmentBrandsSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';
  const logos = [
    { name: 'CAT', src: '/logos/cat.svg', width: 132, height: 48 },
    { name: 'KOMATSU', src: '/logos/komatsu.svg', width: 156, height: 48 },
    { name: 'VOLVO', src: '/logos/volvo.svg', width: 144, height: 48 },
    { name: 'SANY', src: '/logos/sany.svg', width: 132, height: 48 },
    { name: 'HITACHI', src: '/logos/hitachi.svg', width: 150, height: 48 },
  ];

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="equipment-brands-title"
      className="relative overflow-hidden border-t border-white/10 bg-[#062D31] px-4 py-section-mobile text-white md:py-section"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,208,63,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(6,45,49,0))]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className={isRtl ? 'text-right' : 'text-left'}>
          <SectionHeading
            id="equipment-brands-title"
            eyebrow={t.trust.brands.eyebrow}
            title={t.trust.brands.title}
            subtitle={t.trust.brands.description}
            inverse
          />
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex min-h-28 items-center justify-center rounded-2xl border border-white/18 bg-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-white/14"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} equipment brand logo`}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
