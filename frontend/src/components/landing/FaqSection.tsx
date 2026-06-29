'use client';

import { useId, useState } from 'react';
import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type FaqSectionProps = {
  lang: Lang;
};

export default function FaqSection({ lang }: FaqSectionProps) {
  const t = landingContent[lang];
  const isRtl = lang === 'ar';
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#062D31] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h2 className="text-2xl font-black tracking-[-0.01em] text-white md:text-4xl">
            {t.faq.title}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-white/62">
            {t.faq.description}
          </p>
        </header>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-button-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-lg border border-white/5 bg-[#143A3E] shadow-[0_10px_28px_rgba(0,0,0,0.16)]"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  className={[
                    'flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D03F] focus-visible:ring-inset',
                    isRtl ? 'flex-row-reverse text-right' : 'text-left',
                  ].join(' ')}
                >
                  <span className="text-sm font-extrabold text-white md:text-base">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      'grid h-5 w-5 shrink-0 place-items-center text-white/85 transition',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                  >
                    <span className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-current" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={[
                      'border-t border-white/6 px-5 pb-5 pt-4',
                      isRtl ? 'text-right' : 'text-left',
                    ].join(' ')}
                  >
                    <p className="text-sm leading-6 text-white/68">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
