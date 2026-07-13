import type { Lang } from './sharedContent';

export type ServiceCardContent = {
  title: string;
  description: string;
  image: string;
  badge: string;
  cta: string;
};

export type ServicesProcessStep = {
  title: string;
  description: string;
};

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export type ServicesStrengthItem = {
  title: string;
  description: string;
};

export type ServicesContent = {
  hero: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  specializations: {
    eyebrow: string;
    title: string;
    description: string;
    services: ServiceCardContent[];
  };
  resilience: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    statValue: string;
    statLabel: string;
    strengths: ServicesStrengthItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServicesProcessStep[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServicesFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

export const servicesContent: Record<Lang, ServicesContent> = {
  en: {
    hero: {
      eyebrow: 'Equipment Rental for Critical Project Sectors',
      title: 'Heavy Equipment Rental for',
      highlightedTitle: 'Industrial & Infrastructure Projects',
      description:
        'Our fleet serves the sectors where downtime is not an option, marine works, airport projects, road maintenance, excavation and infrastructure operations. Every machine arrives certified, inspected and ready to work, with support that stays on call for the life of the rental.',
      primaryCta: 'Request a Quote',
      secondaryCta: 'View Equipment',
      primaryHref: '/contact?quote=favorites',
      secondaryHref: '/equipment',
    },

    specializations: {
      eyebrow: 'Rental Applications',
      title: 'Sectors We Support',
      description:
        'We rent heavy machinery and project-ready equipment for demanding field operations across construction, infrastructure, transport, marine and industrial environments.',
      services: [
        {
          title: 'Marine & Port Projects',
          description:
            'Heavy equipment rental for port development, quay works, coastal construction, marine infrastructure and waterfront project operations.',
          image: '/images/services/marine-projects.png',
          badge: 'Marine',
          cta: 'Request Equipment',
        },
        {
          title: 'Airport & Aviation Infrastructure',
          description:
            'Machinery rental support for airport expansion, runway works, terminal infrastructure, ground preparation and aviation-related construction projects.',
          image: '/images/services/airport-infrastructure.png',
          badge: 'Airports',
          cta: 'Request Equipment',
        },
        {
          title: 'Rail, Bridge & Road Infrastructure',
          description:
            'Equipment rental for infrastructure maintenance and civil works including rails, bridges, roads, access routes and transport networks.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'Infrastructure',
          cta: 'Request Equipment',
        },
        {
          title: 'Excavation Works',
          description:
            'Excavators, loaders and supporting machinery for trenching, foundation works, digging, site preparation and deep excavation operations.',
          image: '/images/services/excavation.png',
          badge: 'Excavation',
          cta: 'Request Equipment',
        },
        {
          title: 'Earthmoving Operations',
          description:
            'Rental equipment for land clearing, grading, backfilling, soil movement, site leveling and large-scale earthworks.',
          image: '/images/services/earthmoving.png',
          badge: 'Earthmoving',
          cta: 'Request Equipment',
        },
        {
          title: 'Road Maintenance',
          description:
            'Machinery support for road repair, asphalt works, compaction, resurfacing, shoulder maintenance and route rehabilitation.',
          image: '/images/services/road-maintenance.png',
          badge: 'Roads',
          cta: 'Request Equipment',
        },
        
      ],
    },

    resilience: {
      eyebrow: 'Built for Field Operations',
      title: 'Equipment rental support for demanding environments.',
      description:
        'From marine sites and airport zones to road networks and excavation projects, MYSH helps contractors access the right equipment for complex operational conditions.',
      image: '/images/services/resilience.png',
      statValue: 'UAE',
      statLabel: 'Project sector coverage',
      strengths: [
        {
          title: 'Sector-Focused Equipment Matching',
          description:
            'Equipment recommendations are aligned with the project sector, site constraints and operational requirements.',
        },
        {
          title: 'Rental Support for Critical Works',
          description:
            'We support time-sensitive operations such as road maintenance, infrastructure repair, excavation and marine-side activities.',
        },
        {
          title: 'Project-Ready Coordination',
          description:
            'Rental requests are coordinated around equipment availability, location, duration and mobilization needs.',
        },
      ],
    },

    process: {
      eyebrow: 'Rental Workflow',
      title: 'From project requirement to equipment mobilization.',
      description:
        'Our process is designed to help project teams quickly identify the equipment needed for their sector and operation type.',
      steps: [
        {
          title: 'Project Sector Review',
          description:
            'We identify the project type: marine, airport, road, bridge, rail, excavation, earthmoving or maintenance operation.',
        },
        {
          title: 'Equipment Requirement Matching',
          description:
            'We match the operation with suitable equipment based on task, location, capacity and rental duration.',
        },
        {
          title: 'Availability & Quote Confirmation',
          description:
            'The team confirms availability, rental options, pricing and conditions for the required machinery.',
        },
        {
          title: 'Mobilization Coordination',
          description:
            'Equipment delivery or mobilization is coordinated according to the site schedule and access requirements.',
        },
        {
          title: 'Rental Support & Follow-up',
          description:
            'We remain available for rental coordination, operational support and follow-up during the project.',
        },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      description:
        'Answers about renting equipment for marine, airport, infrastructure, excavation, earthmoving and road maintenance projects.',
      items: [
        {
          question: 'Do you rent equipment for marine and port projects?',
          answer:
            'Yes. MYSH can support marine, port and coastal project requirements depending on equipment availability, site access and rental conditions.',
        },
        {
          question: 'Can you support airport infrastructure projects?',
          answer:
            'Yes. Equipment rental can be coordinated for airport construction, expansion, ground works and infrastructure-related operations.',
        },
        {
          question: 'Do you provide machinery for road, rail and bridge maintenance?',
          answer:
            'Yes. We support infrastructure maintenance needs including road repair, bridge works, rail-side operations and route rehabilitation.',
        },
        {
          question: 'What equipment can be used for excavation and earthmoving?',
          answer:
            'Typical equipment includes excavators, loaders, bulldozers, graders, compactors and supporting machinery depending on the project scope.',
        },
        {
          question: 'Can I request equipment for urgent maintenance work?',
          answer:
            'Yes. Urgent rental requests can be reviewed to confirm equipment availability and possible mobilization timing.',
        },
      ],
    },

    cta: {
      title: 'Need equipment for a specific project sector?',
      description:
        'Tell us whether your project is marine, airport, infrastructure, excavation, earthmoving or road maintenance, and our team will help match the right equipment.',
      primaryCta: 'Request Quote',
      secondaryCta: 'Browse Equipment',
      primaryHref: '/contact?quote=favorites',
      secondaryHref: '/equipment',
    },
  },

  ar: {
    hero: {
      eyebrow: 'تأجير المعدات لمختلف القطاعات ',
      title: 'تأجير المعدات الثقيلة لـ',
      highlightedTitle: 'المشاريع الصناعية والبنية التحتية',
      description:
        'يخدم أسطولنا القطاعات التي لا تحتمل التوقف الأعمال البحرية ومشاريع المطارات وصيانة الطرق وأعمال الحفر وعمليات البنية التحتية. كل آلة تصل إلى موقعك معتمدة ومفحوصة وجاهزة للعمل، مع دعم يبقى في خدمتك طوال مدة التأجير.',
      primaryCta: 'طلب عرض سعر',
      secondaryCta: 'عرض المعدات',
      primaryHref: '/contact?quote=favorites',
      secondaryHref: '/equipment',
    },

    specializations: {
      eyebrow: 'مجالات التأجير',
      title: 'القطاعات التي ندعمها',
      description:
        'نقوم بتأجير المعدات الثقيلة والآلات الجاهزة للمشاريع في بيئات البناء والبنية التحتية والنقل والأعمال البحرية والعمليات الصناعية.',
      services: [
        {
          title: 'المشاريع البحرية والموانئ',
          description:
            'نوفر معدات ثقيلة مجهزة لتطوير الموانئ وأعمال الأرصفة والإنشاءات الساحلية، بكفاءة عالية في البيئات البحرية وظروف التشغيل الصعبة.',
          image: '/images/services/marine-projects.png',
          badge: 'أعمال بحرية',
          cta: 'طلب المعدات',
        },
        {
          title: 'المطارات والبنية التحتية الجوية',
          description:
            'ندعم مشاريع توسعة المطارات وأعمال المدارج وتجهيز المحطات بمعداتٍ مفحوصة ، حيث لا مجال للخطأ في التوقيت أو السلامة.',
          image: '/images/services/airport-infrastructure.png',
          badge: 'مطارات',
          cta: 'طلب المعدات',
        },
        {
          title: 'البنية التحتية للسكك والجسور والطرق',
          description:
            'تأجير معدات لصيانة البنية التحتية والأعمال المدنية بما يشمل السكك والجسور والطرق وشبكات النقل.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'بنية تحتية',
          cta: 'طلب المعدات',
        },
        {
          title: 'أعمال الحفر',
          description:
            'حفارات ومعدات لحفر الخنادق والأساسات وتجهيز المواقع وأعمال الحفر العميق.',
          image: '/images/services/excavation.png',
          badge: 'حفر',
          cta: 'طلب المعدات',
        },
        {
          title: 'عمليات تحريك التربة',
          description:
            'معدات تأجير لأعمال تنظيف الأراضي والتسوية والردم وتحريك التربة وتجهيز المواقع والأعمال الترابية واسعة النطاق.',
          image: '/images/services/earthmoving.png',
          badge: 'تحريك التربة',
          cta: 'طلب المعدات',
        },
        {
          title: 'صيانة الطرق',
          description:
            'معدات لأعمال إصلاح الطرق والأسفلت والدمك وإعادة التأهيل وصيانة المسارات والكتف الجانبي للطريق.',
          image: '/images/services/road-maintenance.png',
          badge: 'طرق',
          cta: 'طلب المعدات',
        },
        
      ],
    },

    resilience: {
      eyebrow: 'مصمم للعمليات الميدانية',
      title: ' تأجير المعدات الثقيلة للبيئات التشغيلية الصعبة.',
      description:
        'من المواقع البحرية ومناطق المطارات إلى شبكات الطرق ومشاريع الحفر، تساعد MYSH المقاولين في الوصول إلى المعدات المناسبة للظروف التشغيلية المعقدة.',
      image: '/images/services/resilience.png',
      statValue: 'الإمارات',
      statLabel: 'تغطية مختلف القطاعات ',
      strengths: [
        {
          title: 'اختيار المعدات حسب القطاع',
          description:
            'يتم اختيار المعدات وفقاً لنوع المشروع وقيود الموقع ومتطلبات التشغيل.',
        },
        {
          title: 'توفير المعدات اللازمة للأعمال الحيوية',
          description:
            'ندعم العمليات الحساسة زمنياً مثل صيانة الطرق وإصلاح البنية التحتية والحفر والأعمال البحرية.',
        },
        {
          title: 'تنسيق متكامل لتلبية متطلبات المشروع',
          description:
            'تتم مراجعة طلبات التأجير حسب توفر المعدات والموقع ومدة الإيجار واحتياجات التجهيز.',
        },
      ],
    },

    process: {
      eyebrow: 'سير عمل التأجير',
      title: 'من متطلبات المشروع إلى تجهيز المعدات.',
      description:
        'تم تصميم آلية العمل لمساعدتكم على تحديد المعدات المناسبة بسرعة حسب القطاع ونوع العملية.',
      steps: [
        {
          title: 'مراجعة قطاع المشروع',
          description:
            'نحدد نوع المشروع: بحري، مطار، طريق، جسر، سكك، حفر، تحريك تربة أو أعمال صيانة.',
        },
        {
          title: 'اختيار المعدات ',
          description:
            'نربط العملية بالمعدات المناسبة حسب المهمة والموقع والقدرة ومدة الإيجار.',
        },
        {
          title: 'تأكيد التوفر وعرض السعر',
          description:
            'يقوم الفريق بتأكيد التوفر وخيارات التأجير والأسعار والشروط للمعدات المطلوبة.',
        },
        {
          title: 'تنسيق التجهيز والنقل',
          description:
            'يتم تنسيق تجهيز المعدات أو نقلها حسب جدول الموقع ومتطلبات الوصول.',
        },
        {
          title: 'الدعم والمتابعة أثناء التأجير',
          description:
            'نبقى متاحين للتنسيق والدعم التشغيلي والمتابعة خلال مدة المشروع.',
        },
      ],
    },

    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة متكررة',
      description:
        'إجابات حول تأجير المعدات لمشاريع الأعمال البحرية والمطارات والبنية التحتية والحفر وتحريك التربة وصيانة الطرق.',
      items: [
        {
          question: 'هل تؤجرون معدات للمشاريع البحرية والموانئ؟',
          answer:
            'نعم. يمكن لـ MYSH دعم متطلبات المشاريع البحرية والموانئ والمناطق الساحلية حسب توفر المعدات وإمكانية الوصول للموقع وشروط التأجير.',
        },
        {
          question: 'هل تدعمون مشاريع البنية التحتية للمطارات؟',
          answer:
            'نعم. يمكن تنسيق تأجير المعدات لمشاريع إنشاء وتوسعة المطارات وأعمال التجهيز والبنية التحتية المرتبطة بها.',
        },
        {
          question: 'هل توفرون معدات لصيانة الطرق والسكك والجسور؟',
          answer:
            'نعم. ندعم احتياجات صيانة البنية التحتية بما في ذلك إصلاح الطرق وأعمال الجسور والعمليات المرتبطة بالسكك وإعادة تأهيل المسارات.',
        },
        {
          question: 'ما المعدات المناسبة للحفر وتحريك التربة؟',
          answer:
            'تشمل المعدات الشائعة الحفارات واللوادر والجرافات والممهدات والمداحل والمعدات المساندة حسب نطاق المشروع.',
        },
        {
          question: 'هل يمكن طلب معدات لأعمال صيانة عاجلة؟',
          answer:
            'نعم. يمكن مراجعة طلبات التأجير العاجلة لتأكيد توفر المعدات وإمكانية تجهيزها في الوقت المناسب.',
        },
      ],
    },

    cta: {
      title: 'هل تحتاج معدات لقطاع محدد؟',
      description:
        'أخبرنا ما إذا كان مشروعك بحرياً أو متعلقاً بالمطارات أو البنية التحتية أو الحفر أو تحريك التربة أو صيانة الطرق، وسيساعدك فريقنا في اختيار المعدات المناسبة.',
      primaryCta: 'طلب عرض سعر',
      secondaryCta: 'تصفح المعدات',
      primaryHref: '/contact?quote=favorites',
      secondaryHref: '/equipment',
    },
  },
};
