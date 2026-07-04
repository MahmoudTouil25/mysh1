import type { Lang } from './sharedContent';

type LandingContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    action: string;
    items: {
      title: string;
      description: string;
      image: string;
      badge: string;
      cta: string;
    }[];
  };
  trust: {
    clients: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    brands: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
  };
  strength: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    stats: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  reach: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    operationsTitle: string;
    operationsDescription: string;
  };
  story: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    statValue: string;
    statLabel: string;
    primaryCta: string;
    items: { title: string; description: string }[];
  };
  deliveryMap: {
    eyebrow: string;
    title: string;
    description: string;
    mapLabel: string;
    status: string;
    location: string;
    note: string;
    markers: string[];
    updateNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    whatsappCta: string;
    emailCta: string;
    whatsappHref: string;
    emailHref: string;
  };
};

export const landingContent = {
  en: {
    hero: {
      eyebrow: 'Heavy Equipment Rental - Dubai, UAE',
      title: 'Your Partner on Every Site.',
      description:
        'Premium heavy machinery, plant equipment and specialized logistics for construction, infrastructure and industrial projects across the UAE.',
      primaryCta: 'Request Quote',
      secondaryCta: 'View Equipment',
    },
    services: {
      eyebrow: 'Our Fleet',
      title: 'Specialized Services',
      action: 'Explore Fleet',
      items: [
        {
          title: 'Earthmoving Equipment',
          description:
            'High-capacity excavators, loaders and site preparation equipment for demanding construction projects.',
          image: '/images/services/earthmoving.png',
          badge: 'Earthmoving',
          cta: 'Request Equipment',
        },
        {
          title: 'Lifting Solutions',
          description:
            'Mobile cranes, lifting equipment and handling adapted solutions for urban and open-site operations.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'Lifting',
          cta: 'Request Equipment',
        },
        {
          title: 'Power Generation',
          description:
            'Generators and mobile power solutions for off-grid operations, temporary sites and backup needs.',
          image: '/images/services/resilience.png',
          badge: 'Power',
          cta: 'Request Equipment',
        },
      ],
    },
    trust: {
      clients: {
        eyebrow: 'Trusted Clients',
        title: 'Chosen by project teams that need dependable site support.',
        description:
          'MYSH supports contractors, industrial operators and infrastructure teams with practical rental coordination and fleet access.',
        items: [
          'Infrastructure contractors',
          'Industrial operators',
          'Road maintenance teams',
          'Marine and logistics projects',
        ],
      },
      brands: {
        eyebrow: 'Equipment Brands',
        title: 'Fleet brands ready for demanding construction work.',
        description:
          'Our equipment selection includes proven heavy machinery brands used across earthmoving, hauling, excavation and site preparation.',
        items: ['CAT', 'KOMATSU', 'VOLVO', 'SANY', 'HITACHI'],
      },
    },
    strength: {
      eyebrow: 'Operational Scale',
      title: 'Built to support demanding project sites.',
      description:
        'MYSH supports contractors, industrial operators and infrastructure teams with reliable heavy equipment rental, fleet coordination and field-ready machinery across Dubai and the UAE.',
      note: 'Fleet scale, responsive coordination and practical site support for B2B project teams.',
      stats: [
        {
          value: '49+',
          label: 'Years of industry legacy',
          description:
            'Established experience supporting heavy equipment operations.',
        },
        {
          value: '30+',
          label: 'Machines and support units',
          description:
            'A rental fleet covering earthmoving, lifting, hauling and site support.',
        },
        {
          value: '4+',
          label: 'Equipment categories',
          description:
            'From excavators and loaders to cranes, trucks, tankers and generators.',
        },
        {
          value: '24/7',
          label: 'Rental coordination support',
          description:
            'Responsive assistance for urgent project needs and mobilization planning.',
        },
      ],
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
      operationsTitle: 'MYSH Operations',
      operationsDescription:
        'Equipment rental support for contractors, project managers and industrial operators needing reliable machinery access.',
    },
    story: {
      eyebrow: 'Our Story',
      title: 'A Legacy of Strength and Reliability',
      description:
        'Founded in 1977 with deep roots in Jordan, MYSH began as a vision to revolutionize the industrial landscape. Our journey is defined by unwavering commitment to equipment excellence and operational trust.',
      image: '/images/story.png',
      statValue: '49+',
      statLabel: 'Years of Heritage',
      primaryCta: 'Read Our Full History',
      items: [
        {
          title: '1977 Origins',
          description:
            'Established in Jordan, laying the foundation for heavy industrial specialization.',
        },
        {
          title: 'UAE Expansion',
          description:
            "Bringing decades of expertise to the UAE's rapid infrastructure growth.",
        },
      ],
    },
    deliveryMap: {
      eyebrow: 'Delivery Map',
      title: 'Dubai delivery borders for current fleet dispatch.',
      description:
        'Our active delivery boundary is focused on Dubai for now, helping the team coordinate equipment movement, site access and dispatch timing with clearer coverage expectations.',
      mapLabel: 'Dubai delivery boundary',
      status: 'Current coverage',
      location: 'Dubai, UAE',
      note: 'Additional emirates can be reviewed by request.',
      markers: ['Dubai Hub', 'Jebel Ali', 'Al Qusais'],
      updateNote:
        'Delivery coverage can expand as fleet availability and project schedules are confirmed.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      description:
        'Everything you need to know about our rental process and logistics.',
      items: [
        {
          question: 'How to request a quote?',
          answer:
            'You can request a quote directly through our website by clicking the Request Quote button, or by contacting our team via WhatsApp. Please provide details about your project location and the specific machinery required.',
        },
        {
          question: 'What are your delivery areas?',
          answer:
            'Current delivery coordination is focused on Dubai, with additional UAE locations reviewed by request depending on equipment availability, site access and schedule.',
        },
        {
          question: 'Do you provide equipment operators?',
          answer:
            'Operator support can be arranged for selected equipment depending on machine type, project location, availability and rental conditions.',
        },
      ],
    },
    cta: {
      title: 'Ready to Power Your Next Project?',
      description:
        'Contact our experts today for a customized quote or technical consultation. We are available to support your operational needs.',
      whatsappCta: 'Message on WhatsApp',
      emailCta: 'Send an Email',
      whatsappHref: '#contact',
      emailHref: 'mailto:info@mysh.com',
    },
  },

  ar: {
    hero: {
      eyebrow: 'تأجير المعدات الثقيلة  - دبي، الإمارات',
      title: 'شريكك في كل موقع.',
      description:
        'معدات ثقيلة وحلول تشغيل ولوجستيات متخصصة لمشاريع البناء والبنية التحتية والصناعة في دولة الإمارات.',
      primaryCta: 'طلب عرض سعر',
      secondaryCta: 'عرض المعدات',
    },
    services: {
      eyebrow: 'أسطولنا',
      title: 'خدمات متخصصة',
      action: 'استكشف الأسطول',
      items: [
        {
          title: 'معدات تحريك التربة',
          description:
            'حفارات ولوادر ومعدات تجهيز مواقع عالية القدرة لمشاريع البناء والأعمال الثقيلة.',
          image: '/images/services/earthmoving.png',
          badge: 'تحريك التربة',
          cta: 'طلب المعدات',
        },
        {
          title: 'حلول الرفع',
          description:
            'رافعات ومعدات رفع ومناولة للمواقع الحضرية والمشاريع المفتوحة ومتطلبات التشغيل الثقيلة.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'الرفع',
          cta: 'طلب المعدات',
        },
        {
          title: 'توليد الطاقة',
          description:
            'مولدات وحلول طاقة متنقلة للمواقع المؤقتة والتشغيل خارج الشبكة واحتياجات الطوارئ.',
          image: '/images/services/resilience.png',
          badge: 'الطاقة',
          cta: 'طلب المعدات',
        },
      ],
    },
    trust: {
      clients: {
        eyebrow: 'عملاؤنا',
        title: 'اختيار فرق المشاريع التي تحتاج إلى دعم موثوق في الموقع.',
        description:
          'تدعم MYSH المقاولين والمشغلين الصناعيين وفرق البنية التحتية من خلال تنسيق عملي للتأجير وإتاحة الأسطول.',
        items: [
          'مقاولو البنية التحتية',
          'المشغلون الصناعيون',
          'فرق صيانة الطرق',
          'مشاريع النقل البحري واللوجستيات',
        ],
      },
      brands: {
        eyebrow: 'علامات المعدات',
        title: 'علامات أسطول جاهزة لأعمال البناء الثقيلة.',
        description:
          'يشمل أسطولنا علامات معدات ثقيلة موثوقة لأعمال الحفر والنقل وتحريك التربة وتجهيز المواقع.',
        items: ['CAT', 'KOMATSU', 'VOLVO', 'SANY', 'HITACHI'],
      },
    },
    strength: {
      eyebrow: 'قوة تشغيلية',
      title: 'جاهزون لدعم مواقع المشاريع الأكثر تطلبا.',
      description:
        'تدعم MYSH المقاولين والمشغلين الصناعيين وفرق البنية التحتية من خلال تأجير معدات ثقيلة موثوقة، وتنسيق الأسطول، وتوفير آليات جاهزة للعمل في دبي ودولة الإمارات.',
      note: 'حجم أسطول موثوق، تنسيق سريع، ودعم عملي لفرق المشاريع.',
      stats: [
        {
          value: '+49',
          label: 'سنة من الخبرة الصناعية',
          description: 'خبرة راسخة في دعم عمليات المعدات الثقيلة.',
        },
        {
          value: '+120',
          label: 'آلة ومعدة دعم',
          description:
            'أسطول تأجير يغطي أعمال الحفر، الرفع، النقل، ودعم المواقع.',
        },
        {
          value: '+15',
          label: 'فئة من المعدات',
          description:
            'من الحفارات واللوادر إلى الرافعات، الشاحنات، الصهاريج والمولدات.',
        },
        {
          value: '24/7',
          label: 'دعم وتنسيق التأجير',
          description:
            'استجابة مرنة لاحتياجات المشاريع العاجلة وتخطيط التعبئة.',
        },
      ],
    },
    reach: {
      eyebrow: 'نطاق التشغيل',
      title: 'جاهزون لمواقع المشاريع السريعة في الإمارات.',
      description:
        'من عمليات دبي إلى مواقع البناء والمناطق الصناعية ومشاريع البنية التحتية، تدعم MYSH وصولا منظما وموثوقا للمعدات.',
      stats: [
        { value: 'دبي', label: 'قاعدة التشغيل' },
        { value: 'الإمارات', label: 'نطاق التأجير' },
        { value: 'B2B', label: 'موجه للمقاولين' },
      ],
      operationsTitle: 'عمليات MYSH',
      operationsDescription:
        'دعم تأجير المعدات للمقاولين ومديري المشاريع والمشغلين الصناعيين الذين يحتاجون إلى وصول موثوق للآلات.',
    },
    story: {
      eyebrow: 'قصتنا',
      title: 'إرث من القوة والموثوقية',
      description:
        'تأسست MYSH عام 1977 بجذور راسخة في الأردن، وانطلقت برؤية لتطوير قطاع المعدات الصناعية. تقوم رحلتنا على الالتزام بجودة المعدات والثقة التشغيلية.',
      image: '/images/story.png',
      statValue: '47+',
      statLabel: 'عاما من الخبرة',
      primaryCta: 'اقرأ تاريخنا الكامل',
      items: [
        {
          title: 'بدايات 1977',
          description:
            'تأسست في الأردن لتضع أساسا قويا للتخصص في المعدات الصناعية الثقيلة.',
        },
        {
          title: 'التوسع في الإمارات',
          description:
            'نقل عقود من الخبرة لدعم نمو البنية التحتية السريع في دولة الإمارات.',
        },
      ],
    },
    deliveryMap: {
      eyebrow: 'خريطة التوصيل',
      title: 'حدود التوصيل الحالية داخل دبي.',
      description:
        'يركز نطاق التوصيل الحالي على دبي لمساعدة الفريق على تنسيق حركة المعدات والوصول إلى المواقع ومواعيد الإرسال بوضوح أكبر.',
      mapLabel: 'حدود التوصيل في دبي',
      status: 'التغطية الحالية',
      location: 'دبي، الإمارات',
      note: 'يمكن مراجعة التوصيل إلى إمارات أخرى عند الطلب.',
      markers: ['مركز دبي', 'جبل علي', 'القصيص'],
      updateNote:
        'يمكن توسيع نطاق التوصيل حسب توفر الأسطول وجدولة المشاريع.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'الأسئلة الأكثر تكرارا',
      description:
        'كل ما تحتاج إلى معرفته عن عملية التأجير والخدمات اللوجستية.',
      items: [
        {
          question: 'كيف أطلب عرض سعر؟',
          answer:
            'يمكنك طلب عرض سعر من خلال زر طلب عرض سعر أو التواصل مع فريقنا عبر واتساب. يرجى تزويدنا بموقع المشروع ونوع المعدات المطلوبة.',
        },
        {
          question: 'ما هي مناطق التوصيل؟',
          answer:
            'يركز تنسيق التوصيل حاليا على دبي، ويمكن مراجعة المواقع الأخرى داخل الإمارات حسب توفر المعدات وإمكانية الوصول والجدول الزمني.',
        },
        {
          question: 'هل توفرون مشغلي معدات؟',
          answer:
            'يمكن ترتيب دعم المشغلين لبعض أنواع المعدات حسب نوع الآلة وموقع المشروع والتوفر وشروط التأجير.',
        },
      ],
    },
    cta: {
      title: 'جاهز لدعم مشروعك القادم؟',
      description:
        'تواصل مع خبرائنا للحصول على عرض مخصص أو استشارة فنية تناسب احتياجاتك التشغيلية.',
      whatsappCta: 'راسلنا عبر واتساب',
      emailCta: 'أرسل بريدا إلكترونيا',
      whatsappHref: '#contact',
      emailHref: 'mailto:info@mysh.com',
    },
  },
} satisfies Record<Lang, LandingContent>;
