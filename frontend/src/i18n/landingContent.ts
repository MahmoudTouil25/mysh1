import type { Lang } from './sharedContent';

type LandingContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    subdescription?: string;
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
      eyebrow: 'Heavy Equipment Rental in Dubai, UAE',
      title: 'Reliable Heavy Equipment Rental for Projects Across the UAE',
      description:
        'Project-ready heavy equipment for construction, infrastructure, earthmoving and industrial operations, supported by responsive rental coordination and equipment mobilization.',
      subdescription: '',
      primaryCta: 'Request a Quote',
      secondaryCta: 'View Our Fleet',
    },

    services: {
      eyebrow: 'Industries We Support',
      title: 'Heavy Equipment Solutions for Major Project Sectors',
      action: 'Explore Our Services',
      items: [
        {
          title: 'Marine and Port Projects',
          description:
            'Heavy equipment rental for port development, quay works, coastal construction, marine infrastructure and waterfront project operations.',
          image: '/images/services/earthmoving.png',
          badge: 'Marine',
          cta: 'Request Equipment',
        },
        {
          title: 'Airport and Aviation Infrastructure',
          description:
            'Equipment rental support for airport expansion, runway works, terminal infrastructure, ground preparation and aviation-related construction.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'Aviation',
          cta: 'Request Equipment',
        },
        {
          title: 'Road, Bridge and Rail Infrastructure',
          description:
            'Heavy equipment for roadworks, bridge construction, rail projects, access routes, site preparation and transport infrastructure.',
          image: '/images/services/resilience.png',
          badge: 'Infrastructure',
          cta: 'Request Equipment',
        },
      ],
    },

    trust: {
      clients: {
        eyebrow: 'Trusted by Project Teams',
        title: 'Supporting contractors and project teams with dependable equipment rental.',
        description:
          'MYSH works with construction companies, infrastructure contractors, industrial operators and project teams that require responsive coordination and reliable equipment availability.',
        items: [
          'Construction companies',
          'Infrastructure contractors',
          'Industrial operators',
          'Marine and logistics projects',
        ],
      },

      brands: {
        eyebrow: 'Trusted Equipment Brands',
        title: 'Proven machinery from globally recognized manufacturers.',
        description:
          'Our fleet includes established heavy equipment brands selected for excavation, earthmoving, hauling, site preparation and demanding project operations.',
        items: ['CAT', 'KOMATSU', 'VOLVO', 'SANY', 'HITACHI'],
      },
    },

    strength: {
      eyebrow: 'Operational Capability',
      title: 'A project-ready fleet backed by responsive coordination.',
      description:
        'MYSH provides reliable heavy equipment rental for contractors, infrastructure companies and industrial operators, with machinery prepared to meet demanding site requirements in Dubai and across the UAE.',
      note:
        'Flexible rental support, efficient equipment coordination and practical solutions for B2B project requirements.',
      stats: [
        {
          value: '49+',
          label: 'Years of industry experience',
          description:
            'Decades of experience in heavy equipment, industrial operations and project support.',
        },
        {
          value: '30+',
          label: 'Machines and support units',
          description:
            'A growing rental fleet supporting excavation, earthmoving, hauling and site operations.',
        },
        {
          value: '4+',
          label: 'Equipment categories',
          description:
            'Equipment options for excavation, earthmoving, transport and specialized site requirements.',
        },
        {
          value: '24/7',
          label: 'Rental coordination support',
          description:
            'Responsive coordination for urgent requirements, dispatch planning and project support.',
        },
      ],
    },

    reach: {
      eyebrow: 'Operational Reach',
      title: 'Equipment rental support for projects in Dubai and across the UAE.',
      description:
        'From construction sites and industrial zones to infrastructure and marine projects, MYSH coordinates the equipment required to keep operations moving.',
      stats: [
        { value: 'Dubai', label: 'Operational base' },
        { value: 'UAE', label: 'Project coverage' },
        { value: 'B2B', label: 'Contractor focused' },
      ],
      operationsTitle: 'MYSH Rental Operations',
      operationsDescription:
        'Heavy equipment rental support for contractors, project managers, construction companies and industrial operators.',
    },

    story: {
      eyebrow: 'Our Story',
      title: 'Decades of Experience in Heavy Equipment and Industrial Operations',
      description:
        'Founded in Jordan in 1977, MYSH has built decades of experience in heavy equipment and industrial operations. Today, we bring this expertise to the UAE, supporting projects with reliable machinery, practical coordination and a strong commitment to operational quality.',
      image: '/images/story.png',
      statValue: '49+',
      statLabel: 'Years of Experience',
      primaryCta: 'Discover Our Story',
      items: [
        {
          title: 'Founded in 1977',
          description:
            'Established in Jordan with a strong foundation in heavy equipment and industrial operations.',
        },
        {
          title: 'Expansion into the UAE',
          description:
            'Bringing decades of equipment experience to construction, infrastructure and industrial projects in the UAE.',
        },
      ],
    },

    deliveryMap: {
      eyebrow: 'Equipment Delivery Coverage',
      title: 'Equipment dispatch coverage across the UAE.',
      description:
        'Our dispatch operations cover major project locations across the UAE, allowing us to coordinate equipment transport, site access and delivery schedules efficiently.',
      mapLabel: 'Current UAE dispatch coverage',
      status: 'Current service area',
      location: 'UAE',
      note:
        'Equipment delivery to other emirates can be arranged subject to fleet availability and project requirements.',
      markers: [
        'Dubai Operations Hub',
        'Jebel Ali',
        'Al Qusais',
        'Abu Dhabi',
        'Fujairah',
        'Sharjah',
        'Ras Al Khaimah',
      ],
      updateNote:
        'Final delivery availability is confirmed according to equipment type, project location and rental schedule.',
    },

    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Heavy Equipment Rental FAQs',
      description:
        'Answers to common questions about equipment availability, quotations, operators and delivery.',
      items: [
        {
          question: 'How can I request an equipment rental quote?',
          answer:
            'Click Request a Quote or contact our team through WhatsApp. Please include the required equipment type, project location, expected rental period and preferred start date so we can prepare an accurate quotation.',
        },
        {
          question: 'Where do you deliver heavy equipment?',
          answer:
            'Our current standard dispatch coverage focuses on Dubai. Delivery to other locations across the UAE may be arranged depending on equipment availability, site access, transport requirements and project schedule.',
        },
        {
          question: 'Can you provide equipment with an operator?',
          answer:
            'Operators can be arranged for selected equipment, subject to machine type, project location, operator availability and agreed rental conditions.',
        },
        {
          question: 'Do you offer short-term and long-term equipment rental?',
          answer:
            'Yes. Rental periods can be arranged according to project requirements, including short-term, monthly and longer-term rental agreements, subject to equipment availability.',
        },
      ],
    },

    cta: {
      title: 'Need Heavy Equipment for Your Next Project?',
      description:
        'Send us your equipment requirements, project location and rental period to receive a quotation tailored to your operational needs.',
      whatsappCta: 'Request via WhatsApp',
      emailCta: 'Request by Email',
      whatsappHref: '/contact?quote=favorites',
      emailHref: 'mailto:sales@mysh.ae',
    },
  },

  ar: {
    hero: {
      eyebrow: ' mysh لتأجير المعدات الثقيلة في دبي والإمارات ',
      title: 'شـريكـك فـي كـل مشــروع',
      description:
        'أسطول من المعدات الثقيلة الحديثة، نوفر لكم حلول خاصة بمشاريع البناء وأعمال البنية التحتية والعمليات الصناعية .',
      subdescription: 'بتغطيةٍ تشمل جميع أنحاء دولة الإمارات',
      primaryCta: 'اطلب عرض سعر',
      secondaryCta: 'عرض المعدات',
    },

    services: {
      eyebrow: 'القطاعات التي نخدمها',
      title: 'معـدات ثقيـلة لمختلف القطاعـات',
      action: 'استعرض خدماتنا',
      items: [
        {
          title: 'مشاريع الموانئ والأعمال البحرية',
          description:
            'من تطوير الموانئ والأرصفة إلى الإنشاءات الساحلية ومشاريع الواجهات المائية — آليات ثقيلة مجهّزة لبيئة العمل البحرية، حيث تلتقي دقة التشغيل بقسوة الظروف',
          image: '/images/services/earthmoving.png',
          badge: 'الأعمال البحرية',
          cta: 'عرض المعدات',
        },
        {
          title: 'مشاريع المطارات والبنية التحتية للطيران',
          description:
            'دعم مشاريع توسعة المطارات وأعمال المدارج ومرافق المحطات وتجهيز المواقع والمشاريع الإنشائية المرتبطة بقطاع الطيران.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'المطارات',
          cta: 'عرض المعدات',
        },
        {
          title: 'مشاريع الطرق والجسور ',
          description:
            'معدات ثقيلة لأعمال الطرق وإنشاء الجسور ومشاريع السكك الحديدية وتجهيز المواقع ومسارات الوصول وشبكات النقل.',
          image: '/images/services/resilience.png',
          badge: 'أعمال البنية التحتية',
          cta: 'اطلب المعدات',
        },
      ],
    },

    trust: {
      clients: {
        eyebrow: 'مـوثـوقـون لـدى فـرق المـشـاريـع',
        title: 'ندعـم شـركات المقـاولات بخدمات تأجيـر موثوقـة.',
        description:
          'تتعاون MYSH مع شركات الإنشاءات ومقاولي أعمال البنية التحتية والمشغلين الصناعيين وفرق المشاريع التي تحتاج إلى سرعة التنسيق وتوفر المعدات.',
        items: [
          'شركات الإنشاءات',
          'مقاولو أعمال البنية التحتية',
          'المشغلون الصناعيون',
          'مشاريع الأعمال البحرية والخدمات اللوجستية',
        ],
      },

      brands: {
        eyebrow: 'عـلامـات تجـاريـة مـوثـوقــة',
        title: 'معــدات مــن شـركات عـالميـة مشهـود بـكـفـاءتـهـا فـي مـواقــع العـمل.',
        description:
          'يضم أسطولنا معـدات ثقيلة من علامات تجارية موثوقة، مناسبة لأعمال الحفر وتحريك التربة والنقل وتجهيز المواقع ومتطلبات المشاريع الكبرى.',
        items: ['CAT', 'KOMATSU', 'VOLVO', 'SANY', 'HITACHI'],
      },
    },

    strength: {
      eyebrow: 'قدراتنا التشغيلية',
      title: 'أسطول جاهز للمشاريع مدعوم بتنسيق سريع وفعال.',
      description:
        'توفر MYSH خدمات موثوقة لتأجير المعدات الثقيلة لشركات المقاولات وشركات أعمال البنية التحتية والمشغلين الصناعيين، مع آليات جاهزة لتلبية متطلبات مواقع العمل في دبي ومختلف أنحاء دولة الإمارات.',
      note:
        'حلول تأجير مرنة، وتنسيق فعال للمعدات، ودعم عملي لمتطلبات المشاريع بين الشركات.',
      stats: [
        {
          value: '+49',
          label: 'عامًا من الخبرة في القطاع',
          description:
            'خبرة تمتد لعقود في المعدات الثقيلة والعمليات الصناعية ودعم المشاريع.',
        },
        {
          value: '+30',
          label: 'آلية ووحدة دعم',
          description:
            'أسطول متنامٍ يخدم أعمال الحفر وتحريك التربة والنقل وتشغيل المواقع.',
        },
        {
          value: '+4',
          label: 'فئات من المعدات',
          description:
            'خيارات متعددة لأعمال الحفر وتحريك التربة والنقل ومتطلبات المواقع المتخصصة.',
        },
        {
          value: '24/7',
          label: 'دعم تنسيق خدمات التأجير',
          description:
            'تنسيق سريع للطلبات العاجلة وخطط نقل المعدات ودعم احتياجات المشاريع.',
        },
      ],
    },

    reach: {
      eyebrow: 'نطاق عملياتنا',
      title: 'نوفر معـدات للمشـاريع في دبـي ومختلف أنحاء الإمــــارات.',
      description:
        'من مواقع الإنشاءات والمناطق الصناعية إلى مشاريع أعمال البنية التحتية والأعمال البحرية، تنسق MYSH توفير المعدات اللازمة لاستمرار المشاريع بكفاءة.',
      stats: [
        { value: 'دبي', label: 'قاعدة العمليات' },
        { value: 'الإمارات', label: 'نطاق الخدمات الموجهة للمشاريع' },
        { value: 'B2B', label: 'خدمات موجهة للشركات' },
      ],
      operationsTitle: 'عمليات التأجير لدى MYSH',
      operationsDescription:
        'دعم متكامل لتأجير المعدات الثقيلة لشركات المقاولات ومديري المشاريع وشركات الإنشاءات والمشغلين الصناعيين.',
    },

    story: {
      eyebrow: 'قصتنا',
      title: 'عقود من الخبرة في المعدات الثقيلة والعمليات الصناعية',
      description:
        'تأسست  MYSH في الأردن عام 1977، وراكمت خبرة طويلة في قطاع المعدات الثقيلة والعمليات الصناعية. واليوم، نضع هذه الخبرة في خدمة المشاريع داخل دولة الإمارات من خلال معدات موثوقة، وتنسيق عملي، والتزام مستمر بجودة الخدمات.',
      image: '/images/story.png',
      statValue: '+49',
      statLabel: 'عامًا من الخبرة',
      primaryCta: 'تعرّف على قصتنا',
      items: [
        {
          title: 'التأسيس عام 1977',
          description:
            'انطلقت الشركة من الأردن على أساس متين من الخبرة في المعدات الثقيلة والعمليات الصناعية.',
        },
        {
          title: 'التوسع في دولة الإمارات',
          description:
            'نقل خبرة تمتد لعقود لدعم مشاريع الإنشاءات وأعمال البنية التحتية والمشاريع الصناعية في دولة الإمارات.',
        },
      ],
    },

    deliveryMap: {
      eyebrow: 'نطاق توصيل المعدات',
      title: 'نطاق توصيل المعدات في مختلف أنحاء دولة الإمارات.',
      description:
        'تشمل خدماتنا توصيل المعدات إلى مواقع المشاريع في مختلف أنحاء دولة الإمارات، مع تنسيق فعّال للنقل والوصول إلى الموقع والالتزام بمواعيد التسليم.',
      mapLabel: 'نطاق الإرسال الحالي داخل دولة الإمارات',
      status: 'نطاق الخدمة الحالي',
      location: 'الإمارات',
      note:
        'يمكن ترتيب توصيل المعدات إلى إمارات أخرى وفقًا لتوفر الأسطول ومتطلبات المشروع.',
      markers: [
        ' دبي',
        'جبل علي',
        'القصيص',
        'أبوظبي',
        'الفجيرة',
        'الشارقة',
        'رأس الخيمة',
      ],
      updateNote:
        'يتم تأكيد إمكانية التوصيل النهائية بناءً على نوع المعدات وموقع المشروع ومدة التأجير والجدول التشغيلي.',
    },

    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة شائعة حول تأجير المعدات الثقيلة',
      description:
        'إجابات عن أكثر الأسئلة شيوعًا حول توفر المعدات وعروض الأسعار والمشغلين وخدمات التوصيل.',
      items: [
        {
          question: 'كيف يمكنني طلب عرض سعر لتأجير المعدات؟',
          answer:
            'اضغط على زر «اطلب عرض سعر» أو تواصل مع فريقنا عبر واتساب. يرجى تزويدنا بنوع المعدات المطلوبة وموقع المشروع ومدة التأجير المتوقعة وتاريخ بدء العمل، حتى نتمكن من إعداد عرض سعر دقيق.',
        },
        {
          question: 'إلى أي مناطق يمكنكم توصيل المعدات؟',
          answer:
            'يركز نطاق الإرسال الاعتيادي حاليًا على دبي. ويمكن ترتيب التوصيل إلى مواقع أخرى داخل دولة الإمارات وفقًا لتوفر المعدات وإمكانية الوصول إلى الموقع ومتطلبات النقل والجدول التشغيلي للمشروع.',
        },
        {
          question: 'هل يمكن توفير المعدات مع مشغل؟',
          answer:
            'يمكن توفير مشغلين لبعض أنواع المعدات وفقًا لنوع الآلية وموقع المشروع وتوفر المشغلين وشروط عقد التأجير المتفق عليها.',
        },
        {
          question: 'هل توفرون تأجيرًا قصير الأجل وطويل الأجل؟',
          answer:
            'نعم، يمكن تحديد مدة التأجير وفقًا لمتطلبات المشروع، بما يشمل التأجير قصير الأجل والتأجير الشهري والعقود طويلة الأجل، وذلك حسب توفر المعدات.',
        },
      ],
    },

    cta: {
      title: 'هل تحتاج إلى معدات ثقيلة لمشروعك القادم؟',
      description:
        'أرسل إلينا نوع المعدات المطلوبة وموقع المشروع ومدة التأجير للحصول على عرض سعر يناسب احتياجاتكم التشغيلية.',
      whatsappCta: 'اطلب عبر واتساب',
      emailCta: 'اطلب عبر البريد الإلكتروني',
      whatsappHref: '/contact?quote=favorites',
      emailHref: 'mailto:sales@mysh.ae',
    },
  },
} satisfies Record<Lang, LandingContent>;
