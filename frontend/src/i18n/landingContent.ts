import type { Lang } from './sharedContent';

export const landingContent = {
  en: {
    hero: {
      eyebrow: 'Heavy Equipment Rental & Machinery Trading - Dubai, UAE',
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
          image: '/images/services/earthmoving.png',
          badge: 'Earthmoving',
          cta: 'Request Equipment',
        },
        {
          title: 'Lifting Solutions',
          description:
            'Mobile cranes, lifting equipment and handling solutions for urban and open-site operations.',
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
      statValue: '47+',
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
        'Contact our experts today for a customized quote or technical consultation. We are available 24/7 to support your operational needs.',
      whatsappCta: 'Message on WhatsApp',
      emailCta: 'Send an Email',
      whatsappHref: '#contact',
      emailHref: 'mailto:info@mysh.com',
    },
  },

  ar: {
    hero: {
      eyebrow: 'تأجير المعدات الثقيلة وتجارة الآلات - دبي، الإمارات',
      title: 'قوة صناعية عند الطلب.',
      description:
        'معدات ثقيلة وآلات وحلول لوجستية متخصصة لمشاريع البناء والبنية التحتية والمشاريع الصناعية في دولة الإمارات.',
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
          image: '/images/services/earthmoving.png',
          badge: 'تحريك التربة',
          cta: 'طلب المعدات',
        },
        {
          title: 'حلول الرفع',
          description:
            'رافعات ومعدات رفع وحلول مناولة للمواقع الحضرية والمشاريع المفتوحة.',
          image: '/images/services/infrastructure-maintenance.png',
          badge: 'رفع',
          cta: 'طلب المعدات',
        },
        {
          title: 'توليد الطاقة',
          description:
            'مولدات وحلول طاقة متنقلة للمواقع المؤقتة والتشغيل خارج الشبكة واحتياجات الطوارئ.',
          image: '/images/services/resilience.png',
          badge: 'طاقة',
          cta: 'طلب المعدات',
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
      operationsTitle: 'عمليات MYSH',
      operationsDescription:
        'دعم تأجير المعدات للمقاولين ومديري المشاريع والمشغلين الصناعيين الذين يحتاجون إلى وصول موثوق للمعدات.',
    },
    story: {
      eyebrow: 'قصتنا',
      title: 'إرث من القوة والموثوقية',
      description:
        'تأسست MYSH عام 1977 بجذور راسخة في الأردن، وانطلقت برؤية لتطوير مشهد المعدات الصناعية. تقوم رحلتنا على الالتزام الدائم بجودة المعدات والثقة التشغيلية.',
      image: '/images/story.png',
      statValue: '47+',
      statLabel: 'عاماً من الخبرة',
      primaryCta: 'اقرأ تاريخنا الكامل',
      items: [
        {
          title: 'بدايات 1977',
          description:
            'تأسست في الأردن، لتضع أساساً قوياً للتخصص في المعدات الصناعية الثقيلة.',
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
        'نركز نطاق التوصيل الحالي على دبي في هذه المرحلة لمساعدة الفريق على تنسيق حركة المعدات والوصول إلى المواقع ومواعيد الإرسال بوضوح أكبر.',
      mapLabel: 'حدود التوصيل في دبي',
      status: 'التغطية الحالية',
      location: 'دبي، الإمارات',
      note: 'يمكن مراجعة التوصيل إلى إمارات أخرى حسب الطلب.',
      markers: ['مركز دبي', 'جبل علي', 'القصيص'],
      updateNote:
        'يتم تحديث نطاق التوصيل تدريجياً حسب توفر الأسطول وجدولة المشاريع.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'الأسئلة الأكثر تكراراً',
      description:
        'كل ما تحتاج إلى معرفته عن عملية التأجير والخدمات اللوجستية.',
      items: [
        {
          question: 'كيف أطلب عرض سعر؟',
          answer:
            'يمكنك طلب عرض سعر مباشرة من الموقع عبر زر طلب عرض سعر أو التواصل مع فريقنا عبر واتساب. يرجى تزويدنا بموقع المشروع ونوع المعدات المطلوبة.',
        },
        {
          question: 'ما هي مناطق التوصيل؟',
          answer:
            'يركز تنسيق التوصيل حالياً على دبي، ويمكن مراجعة المواقع الأخرى داخل الإمارات حسب توفر المعدات وإمكانية الوصول إلى الموقع والجدول الزمني.',
        },
        {
          question: 'هل توفرون مشغلي معدات؟',
          answer:
            'يمكن ترتيب دعم المشغلين لبعض أنواع المعدات حسب نوع الآلة وموقع المشروع والتوفر وشروط التأجير.',
        },
      ],
    },
    cta: {
      title: 'هل أنت جاهز لدعم مشروعك القادم؟',
      description:
        'تواصل مع خبرائنا اليوم للحصول على عرض مخصص أو استشارة فنية. نحن متاحون لدعم احتياجاتك التشغيلية.',
      whatsappCta: 'راسلنا عبر واتساب',
      emailCta: 'أرسل بريداً إلكترونياً',
      whatsappHref: '#contact',
      emailHref: 'mailto:info@mysh.com',
    },
  },
} satisfies Record<Lang, unknown>;
