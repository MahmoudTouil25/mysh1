'use client';

import ContentHero from '@/components/content/ContentHero';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Lang } from '@/i18n/sharedContent';

type CsrPageCopy = {
  eyebrow: string;
  title: string;
  excerpt: string;
  pillars: Array<{
    heading: string;
    body: string;
  }>;
};

const csrPageContent: Record<Lang, CsrPageCopy> = {
  en: {
    eyebrow: 'Responsible Rental Operations',
    title: 'Corporate Social Responsibility',
    excerpt:
      'MYSH supports responsible equipment rental practices that prioritize safer coordination, efficient machinery use and long-term trust with UAE contractors.',
    pillars: [
      {
        heading: 'Safety-minded coordination',
        body: 'We encourage clear rental communication, suitable machine matching and responsible site coordination so equipment is used in the right context.',
      },
      {
        heading: 'Efficient fleet utilization',
        body: 'Rental helps contractors access the right equipment for the right duration, reducing unnecessary ownership pressure and idle machinery.',
      },
      {
        heading: 'Community and contractor trust',
        body: 'MYSH aims to build long-term relationships with contractors, suppliers and project teams through transparent rental support and reliable follow-up.',
      },
      {
        heading: 'Environmental awareness',
        body: 'We support practical choices that improve productivity, reduce avoidable machine movement and help project teams plan equipment more efficiently.',
      },
    ],
  },
  ar: {
    eyebrow: 'عمليات تأجير مسؤولة',
    title: 'المسؤولية الاجتماعية للشركة',
    excerpt:
      'تدعم MYSH ممارسات تأجير معدات مسؤولة تركز على التنسيق الأكثر أماناً، والاستخدام الفعال للمعدات، وبناء الثقة طويلة الأمد مع مقاولي الإمارات.',
    pillars: [
      {
        heading: 'تنسيق يركز على السلامة',
        body: 'نشجع التواصل الواضح في طلبات التأجير، واختيار المعدات المناسبة، والتنسيق المسؤول في مواقع العمل لضمان استخدام المعدات في السياق الصحيح.',
      },
      {
        heading: 'استفادة فعالة من الأسطول',
        body: 'يساعد التأجير المقاولين على الوصول إلى المعدات المناسبة للمدة المناسبة، مما يقلل ضغط التملك غير الضروري وفترات توقف المعدات.',
      },
      {
        heading: 'الثقة مع المجتمع والمقاولين',
        body: 'تسعى MYSH إلى بناء علاقات طويلة الأمد مع المقاولين والموردين وفرق المشاريع من خلال دعم تأجير شفاف ومتابعة موثوقة.',
      },
      {
        heading: 'وعي بيئي عملي',
        body: 'ندعم الخيارات العملية التي تحسن الإنتاجية وتقلل حركة المعدات غير الضرورية وتساعد فرق المشاريع على التخطيط لاستخدام المعدات بكفاءة أكبر.',
      },
    ],
  },
};

export default function CsrPage() {
  const { lang } = useLanguage('en');
  const t = csrPageContent[lang];
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.excerpt}
        imageSrc="/csr-hero-section.png"
        imageAlt="MYSH responsible heavy equipment rental operations"
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {t.pillars.map((pillar) => (
            <article
              key={pillar.heading}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-black text-[#1B263B]">
                {pillar.heading}
              </h2>
              <p className="mt-3 leading-7 text-[#5C677D]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
