'use client';

import { useId, useState } from 'react';
import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';
import { cn } from '../../lib/cn';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

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
      className="bg-brand-dark px-4 py-section-mobile text-white md:py-section"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.description}
          align="center"
          inverse
          className="mb-10"
        />

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-button-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;

            return (
              <Card
                key={item.question}
                variant="dark"
                className={cn(
                  'overflow-hidden transition-colors duration-200 ease-out hover:bg-white/10',
                  isOpen && 'bg-white/5',
                )}
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
                    'flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-inset',
                    isRtl ? 'flex-row-reverse text-right' : 'text-left',
                  ].join(' ')}
                >
                  <span className="text-body-sm font-semibold text-white md:text-body">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      'grid h-5 w-5 shrink-0 place-items-center text-white/85 transition-transform duration-300',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                  >
                    <span className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-current" />
                  </span>
                </button>

                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={[
                        'border-t border-white/6 px-5 pb-5 pt-4',
                        isRtl ? 'text-right' : 'text-left',
                      ].join(' ')}
                    >
                      <p className="text-body-sm text-white/68">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
