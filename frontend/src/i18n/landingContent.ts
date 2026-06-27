import type { Lang } from './sharedContent';

export const landingContent = {
  en: {
    hero: {
      eyebrow: 'Heavy Equipment Rental & Machinery Trading — Dubai, UAE',
      title: 'Industrial Power, On Demand.',
      description:
        'Premium heavy machinery, plant equipment and specialized logistics for construction, infrastructure and industrial projects across the UAE.',
      primaryCta: 'Request Quote',
      secondaryCta: 'View Equipment',
    },
    services: {
      eyebrow: 'Our Fleet',
      title: 'Specialized Services',
      items: [
        {
          title: 'Earthmoving Equipment',
          description:
            'High-capacity excavators, loaders and site preparation equipment for demanding construction projects.',
        },
        {
          title: 'Lifting Solutions',
          description:
            'Mobile cranes, lifting equipment and handling solutions for urban and open-site operations.',
        },
        {
          title: 'Power Generation',
          description:
            'Generators and mobile power solutions for off-grid operations, temporary sites and backup needs.',
        },
      ],
      action: 'Explore Fleet',
    },
    reach: {
      eyebrow: 'Operational Reach',
      title: 'Built for fast-moving project sites across the UAE.',
      description:
        'From Dubai-based operations to construction sites, industrial zones and infrastructure projects, MYSH supports reliable equipment access and rental coordination.',
      stats: [
        { value: 'Dubai', label: 'Operational base' },
        { value: 'UAE', label: 'Rental coverage' },
        { value: 'B2B', label: 'Contractor focused' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions',
      items: [
        {
          question: 'How fast can equipment reach the site?',
          answer:
            'Equipment availability and delivery timing depend on location, machine type and scheduling. For urgent requests, our team works to coordinate the fastest possible dispatch.',
        },
        {
          question: 'Do you provide operators?',
          answer:
            'Operator availability can be arranged depending on the equipment type, project location and rental conditions.',
        },
        {
          question: 'What about emergency repairs?',
          answer:
            'We can help coordinate emergency support and repair response for eligible equipment issues to reduce downtime.',
        },
      ],
    },
  },

  ar: {
    hero: {
      eyebrow: 'تأجير المعدات الثقيلة وتجارة الآلات — دبي، الإمارات',
      title: 'قوة صناعية جاهزة عند الطلب.',
      description:
        'معدات ثقيلة وآلات وحلول لوجستية متخصصة لمشاريع البناء والبنية التحتية والمشاريع الصناعية في الإمارات.',
      primaryCta: 'طلب عرض سعر',
      secondaryCta: 'عرض المعدات',
    },
    services: {
      eyebrow: 'أسطولنا',
      title: 'خدمات متخصصة',
      items: [
        {
          title: 'معدات الحفر وتجهيز المواقع',
          description:
            'حفارات ولوادر ومعدات عالية القدرة لأعمال تجهيز المواقع والمشاريع الإنشائية الكبيرة.',
        },
        {
          title: 'حلول الرفع',
          description:
            'رافعات ومعدات رفع وحلول مناولة للمواقع الحضرية والمشاريع المفتوحة.',
        },
        {
          title: 'توليد الطاقة',
          description:
            'مولدات وحلول طاقة متنقلة للمواقع المؤقتة والتشغيل خارج الشبكة واحتياجات الطوارئ.',
        },
      ],
      action: 'استكشف الأسطول',
    },
    reach: {
      eyebrow: 'نطاق التشغيل',
      title: 'حلول مهيأة لمواقع المشاريع السريعة في الإمارات.',
      description:
        'من عملياتنا في دبي إلى مواقع البناء والمناطق الصناعية ومشاريع البنية التحتية، تدعم MYSH الوصول السريع والمنظم للمعدات.',
      stats: [
        { value: 'دبي', label: 'قاعدة التشغيل' },
        { value: 'الإمارات', label: 'نطاق التأجير' },
        { value: 'B2B', label: 'موجه للمقاولين' },
      ],
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة شائعة',
      items: [
        {
          question: 'ما هي سرعة وصول المعدات إلى الموقع؟',
          answer:
            'يعتمد وقت توفر المعدات ووصولها على الموقع ونوع المعدة وجدولة الطلب، ونعمل على تنسيق أسرع إرسال ممكن للطلبات العاجلة.',
        },
        {
          question: 'هل توفرون مشغلين للمعدات؟',
          answer:
            'يمكن توفير المشغلين حسب نوع المعدة وموقع المشروع وشروط التأجير.',
        },
        {
          question: 'ماذا عن الأعطال الطارئة؟',
          answer:
            'يمكننا المساعدة في تنسيق الدعم الطارئ والاستجابة للإصلاحات لتقليل توقف المعدات.',
        },
      ],
    },
  },
} satisfies Record<Lang, unknown>;