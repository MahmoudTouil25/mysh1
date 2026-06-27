'use client';

import { useId, useState } from 'react';
import type { Lang } from '../../i18n/sharedContent';
import { servicesContent } from '../../i18n/servicesContent';

type ServicesFaqProps = {
  lang: Lang;
};

export default function ServicesFaq({ lang }: ServicesFaqProps) {
  const t = servicesContent[lang];
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#EEF4F6] px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.faq.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1B263B] md:text-5xl">
            {t.faq.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5C677D]">
            {t.faq.description}
          </p>
        </header>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-services-faq-button-${index}`;
            const panelId = `${baseId}-services-faq-panel-${index}`;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-sm"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex((currentIndex) =>
                      currentIndex === index ? null : index,
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B263B] focus-visible:ring-inset"
                >
                  <span className="text-base font-black text-[#1B263B]">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F8F9FA] text-lg font-black text-[#1B263B] transition',
                      isOpen ? 'rotate-45' : '',
                    ].join(' ')}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm leading-6 text-[#5C677D]">
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
