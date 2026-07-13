import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import SectionHeading from '../ui/SectionHeading';

type StorySectionProps = {
  lang: Lang;
};

export default function StorySection({ lang }: StorySectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="story"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-slate-50 px-4 py-section-mobile md:py-section"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className={isRtl ? 'lg:order-2' : ''}>
          <div className="relative max-w-xl overflow-hidden rounded-card bg-white shadow-card">
            <div className="relative aspect-[1.28] overflow-hidden bg-slate-200">
              <img
                src={t.story.image}
                alt={t.story.title}
                className="h-full w-full object-cover"
              />

              <div
                aria-hidden="true"
                className={[
                  'absolute inset-y-0 w-[0%] bg-brand-dark/65 grayscale backdrop-saturate-0',
                  isRtl ? 'right-0' : 'left-0',
                ].join(' ')}
              />

              <div
                aria-hidden="true"
                className={[
                  'absolute top-0 h-full w-[0%] bg-slate-50',
                  isRtl
                    ? 'left-0 [clip-path:polygon(0_0,100%_0,0_100%)]'
                    : 'right-0 [clip-path:polygon(100%_0,100%_100%,0_100%)]',
                ].join(' ')}
              />
            </div>

            <div
              className={[
                'absolute bottom-4 border border-white/10 bg-black/40 px-5 py-4 text-white shadow-card backdrop-blur-md',
                isRtl
                  ? 'right-4 rounded-card text-right'
                  : 'left-4 rounded-card',
              ].join(' ')}
            >
              <p className="font-heading text-h3 tabular-nums tracking-[-0.01em] text-white">
                {t.story.statValue}
              </p>
              <p className="mt-1 text-body-sm font-medium text-white/72">
                {t.story.statLabel}
              </p>
            </div>
          </div>
        </div>

        <div
          className={[
            'max-w-2xl',
            isRtl ? 'text-right lg:order-1' : 'text-left',
          ].join(' ')}
        >
          <SectionHeading
            eyebrow={t.story.eyebrow}
            title={t.story.title}
            subtitle={t.story.description}
          />

          <div className="mt-8 space-y-5">
            {t.story.items.map((item, index) => (
              <article
                key={item.title}
                className={[
                  'flex gap-4',
                  isRtl ? 'text-right' : '',
                ].join(' ')}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-dark text-body-sm font-semibold text-white">
                  {index === 0 ? '77' : 'UAE'}
                </div>

                <div>
                  <h3 className="text-body-sm font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
