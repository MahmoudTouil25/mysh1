import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

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
      className="bg-[#F5FAFC] px-4 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className={isRtl ? 'lg:order-2' : ''}>
          <div className="relative max-w-xl overflow-hidden rounded-lg bg-white shadow-[0_24px_55px_rgba(27,38,59,0.18)]">
            <div className="relative aspect-[1.28] overflow-hidden bg-[#D9E1E4]">
              <img
                src={t.story.image}
                alt={t.story.title}
                className="h-full w-full object-cover"
              />

              <div
                aria-hidden="true"
                className={[
                  'absolute inset-y-0 w-[49%] bg-[#283437]/65 grayscale backdrop-saturate-0',
                  isRtl ? 'right-0' : 'left-0',
                ].join(' ')}
              />

              <div
                aria-hidden="true"
                className={[
                  'absolute top-0 h-full w-[47%] bg-[#F5FAFC]',
                  isRtl
                    ? 'left-0 [clip-path:polygon(0_0,100%_0,0_100%)]'
                    : 'right-0 [clip-path:polygon(100%_0,100%_100%,0_100%)]',
                ].join(' ')}
              />
            </div>

            <div
              className={[
                'absolute bottom-0 rounded-tr-lg bg-white px-5 py-4 shadow-[0_12px_25px_rgba(27,38,59,0.14)]',
                isRtl ? 'right-0 rounded-tr-none rounded-tl-lg text-right' : 'left-0',
              ].join(' ')}
            >
              <p className="text-3xl font-black leading-none text-[#1B263B]">
                {t.story.statValue}
              </p>
              <p className="mt-1 text-xs font-bold text-[#5C677D]">
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
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B87500]">
            {t.story.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#1B263B] md:text-5xl">
            {t.story.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5C677D] md:text-lg md:leading-8">
            {t.story.description}
          </p>

          <div className="mt-8 space-y-5">
            {t.story.items.map((item, index) => (
              <article
                key={item.title}
                className={[
                  'flex gap-4',
                  isRtl ? 'flex-row-reverse text-right' : '',
                ].join(' ')}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#062D31] text-xs font-black text-white">
                  {index === 0 ? '77' : 'UAE'}
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#1B263B]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#5C677D]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="#about"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[#062D31] px-6 text-sm font-extrabold text-white transition hover:bg-[#0E3C43]"
          >
            {t.story.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
