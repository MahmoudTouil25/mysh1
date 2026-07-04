import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

type OperationalReachSectionProps = {
  lang: Lang;
};

export default function OperationalReachSection({
  lang,
}: OperationalReachSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="about"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-white px-4 py-section-mobile md:py-section"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className={isRtl ? 'text-right' : 'text-left'}>
          <SectionHeading
            eyebrow={t.reach.eyebrow}
            title={t.reach.title}
            subtitle={t.reach.description}
          />
        </div>

        <Card variant="light" className="bg-slate-50 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {t.reach.stats.map((stat) => (
              <Card
                key={stat.label}
                variant="light"
                interactive
                className="p-6 text-center"
              >
                <p className="font-heading text-h3 tabular-nums text-[#062D31]">
                  {stat.value}
                </p>
                <p className="mt-2 text-body-sm font-semibold text-[#1B263B]/78">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>

          <Card
            variant="dark"
            className={[
              'mt-5 border-[#F4D03F]/22 bg-[#062D31] p-6 shadow-[0_18px_48px_rgba(6,45,49,0.18)]',
              isRtl ? 'text-right' : 'text-left',
            ].join(' ')}
          >
            <p className="text-eyebrow uppercase text-[#F4D03F]">
              {t.reach.operationsTitle}
            </p>
            <p className="mt-4 text-body font-medium text-black/88">
              {t.reach.operationsDescription}
            </p>
          </Card>
        </Card>
      </div>
    </section>
  );
}
