import type { Lang } from './sharedContent';

export type EquipmentDetailContent = {
  page: {
    loading: string;
    error: string;
    notFoundTitle: string;
    notFoundDescription: string;
    backToEquipment: string;
  };
  hero: {
    eyebrow: string;
    descriptionTitle: string;
    category: string;
    availability: string;
  };
  media: {
    imageAltPrefix: string;
    noImage: string;
    viewerLabel: string;
    viewerPlaceholder: string;
  };
  specs: {
    title: string;
    brand: string;
    model: string;
    year: string;
    operatingWeight: string;
    enginePower: string;
    condition: string;
    availability: string;
    location: string;
    dailyRate: string;
    weeklyRate: string;
    monthlyRate: string;
    minimumRentalDays: string;
    days: string;
    operatingWeightKg: string;
    enginePowerKw: string;
    enginePowerHp: string;
    payloadLoad: string;
    bodyBucketBladeCapacity: string;
    maxSpeed: string;
    empty: string;
  };
  quote: {
    title: string;
    description: string;
    fullName: string;
    phone: string;
    email: string;
    projectLocation: string;
    rentalDuration: string;
    rentalDates: string;
    rentalPeriod: string;
    startDate: string;
    endDate: string;
    months: string;
    weeks: string;
    days: string;
    message: string;
    messagePlaceholder: string;
    sendWhatsApp: string;
    sendEmail: string;
    helperText: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    description: string;
    defaultItems: string[];
    byCategory: Record<string, string[]>;
  };
  related: {
    eyebrow: string;
    title: string;
    description: string;
    empty: string;
  };
};

export const equipmentDetailContent: Record<Lang, EquipmentDetailContent> = {
  en: {
    page: {
      loading: 'Loading equipment details...',
      error: 'Unable to load equipment details. Please try again.',
      notFoundTitle: 'Equipment not found',
      notFoundDescription:
        'The equipment you are looking for does not exist or is no longer available.',
      backToEquipment: 'Back to equipment',
    },
    hero: {
      eyebrow: 'Equipment Detail',
      descriptionTitle: 'Description',
      category: 'Category',
      availability: 'Availability',
    },
    media: {
      imageAltPrefix: 'Image of',
      noImage: 'No image available',
      viewerLabel: 'Equipment media',
      viewerPlaceholder: '3D viewer space reserved',
    },
    specs: {
      title: 'Technical Specifications',
      brand: 'Brand',
      model: 'Model',
      year: 'Year',
      operatingWeight: 'Operating Weight',
      enginePower: 'Engine Power',
      condition: 'Condition',
      availability: 'Availability',
      location: 'Location',
      dailyRate: 'Daily Rate',
      weeklyRate: 'Weekly Rate',
      monthlyRate: 'Monthly Rate',
      minimumRentalDays: 'Minimum Rental',
      days: 'days',
      operatingWeightKg: 'Operating Weight',
      enginePowerKw: 'Engine Power',
      enginePowerHp: 'Engine Power',
      payloadLoad: 'Payload / Load',
      bodyBucketBladeCapacity: 'Body / Bucket / Blade Capacity',
      maxSpeed: 'Max Speed',
      empty: 'No technical details are available for this equipment.',
    },
    quote: {
      title: 'Request a Quote',
      description:
        'Send a pre-filled request by WhatsApp or email. Our team will confirm availability, rental terms and pricing.',
      fullName: 'Full name',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      projectLocation: 'Project location',
      rentalDuration: 'Rental duration',
      rentalDates: 'Start / End dates',
      rentalPeriod: 'Rental period',
      startDate: 'Start date',
      endDate: 'End date',
      months: 'Months',
      weeks: 'Weeks',
      days: 'Days',
      message: 'Additional message',
      messagePlaceholder:
        'Example: I need this equipment for a construction project in Dubai for 2 weeks.',
      sendWhatsApp: 'Send via WhatsApp',
      sendEmail: 'Send via Email',
      helperText:
        'The message will be pre-filled with the equipment details and your request information.',
    },
    useCases: {
      eyebrow: 'Use Cases',
      title: 'Recommended Use Cases',
      description:
        'This section helps project teams understand where this equipment is most suitable across construction, infrastructure and industrial operations.',
      defaultItems: [
        'Construction site operations',
        'Infrastructure and industrial projects',
        'Short-term and long-term equipment rental',
        'Heavy-duty project support across the UAE',
      ],
      byCategory: {
        Earthmoving: [
          'Excavation and site preparation',
          'Land clearing and grading',
          'Foundation preparation',
          'Road and infrastructure earthworks',
        ],
        Excavators: [
          'Trenching and excavation',
          'Foundation digging',
          'Material handling on construction sites',
          'Demolition and site preparation',
        ],
        Bulldozers: [
          'Land clearing',
          'Heavy grading',
          'Site leveling',
          'Road construction preparation',
        ],
        Lifting: [
          'Heavy lifting operations',
          'Material placement at height',
          'Industrial installation work',
          'Construction site logistics',
        ],
        'Mobile Cranes': [
          'Lifting heavy construction materials',
          'Equipment positioning',
          'Steel structure installation',
          'Short-term lifting operations',
        ],
        Generators: [
          'Temporary site power',
          'Backup power supply',
          'Industrial operations support',
          'Off-grid construction projects',
        ],
        Compaction: [
          'Soil compaction',
          'Road base preparation',
          'Asphalt compaction',
          'Infrastructure finishing works',
        ],
        Concrete: [
          'Concrete placement',
          'Foundation works',
          'High-volume concrete operations',
          'Site concrete handling',
        ],
        'Road Construction': [
          'Asphalt paving',
          'Road surface preparation',
          'Infrastructure maintenance',
          'Urban and highway construction',
        ],
        'Material Handling': [
          'Material transport on site',
          'Loading and unloading operations',
          'Industrial logistics',
          'Construction supply movement',
        ],
      },
    },
    related: {
      eyebrow: 'Related Equipment',
      title: 'Similar Equipment',
      description:
        'Explore equipment from the same category or similar rental options for your project.',
      empty: 'No related equipment available at the moment.',
    },
  },

  ar: {
    page: {
      loading: 'جاري تحميل تفاصيل المعدة...',
      error: 'تعذر تحميل تفاصيل المعدة. يرجى المحاولة مرة أخرى.',
      notFoundTitle: 'المعدة غير موجودة',
      notFoundDescription:
        'المعدة التي تبحث عنها غير موجودة أو لم تعد متاحة حالياً.',
      backToEquipment: 'العودة إلى المعدات',
    },
    hero: {
      eyebrow: 'تفاصيل المعدة',
      descriptionTitle: 'الوصف',
      category: 'الفئة',
      availability: 'التوفر',
    },
    media: {
      imageAltPrefix: 'صورة لـ',
      noImage: 'لا توجد صورة متاحة',
      viewerLabel: 'وسائط المعدة',
      viewerPlaceholder: 'مساحة مخصصة لعارض ثلاثي الأبعاد',
    },
    specs: {
      title: 'المواصفات التقنية',
      brand: 'العلامة',
      model: 'الموديل',
      year: 'السنة',
      operatingWeight: 'وزن التشغيل',
      enginePower: 'قوة المحرك',
      condition: 'الحالة',
      availability: 'التوفر',
      location: 'الموقع',
      dailyRate: 'السعر اليومي',
      weeklyRate: 'السعر الأسبوعي',
      monthlyRate: 'السعر الشهري',
      minimumRentalDays: 'الحد الأدنى للإيجار',
      days: 'أيام',
      operatingWeightKg: 'وزن التشغيل',
      enginePowerKw: 'قوة المحرك',
      enginePowerHp: 'قوة المحرك',
      payloadLoad: 'الحمولة',
      bodyBucketBladeCapacity: 'سعة الصندوق / الدلو / الشفرة',
      maxSpeed: 'السرعة القصوى',
      empty: 'لا توجد تفاصيل تقنية متاحة لهذه المعدة.',
    },
    quote: {
      title: 'طلب عرض سعر',
      description:
        'أرسل طلباً جاهزاً عبر واتساب أو البريد الإلكتروني، وسيقوم فريقنا بتأكيد التوفر وشروط الإيجار والأسعار.',
      fullName: 'الاسم الكامل',
      phone: 'الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      projectLocation: 'موقع المشروع',
      rentalDuration: 'مدة الإيجار',
      rentalDates: 'تاريخ البداية والنهاية',
      rentalPeriod: 'فترة الإيجار',
      startDate: 'تاريخ البداية',
      endDate: 'تاريخ النهاية',
      months: 'الأشهر',
      weeks: 'الأسابيع',
      days: 'الأيام',
      message: 'رسالة إضافية',
      messagePlaceholder:
        'مثال: أحتاج هذه المعدة لمشروع إنشاءات في دبي لمدة أسبوعين.',
      sendWhatsApp: 'الإرسال عبر واتساب',
      sendEmail: 'الإرسال عبر البريد',
      helperText:
        'سيتم تجهيز الرسالة تلقائياً بتفاصيل المعدة ومعلومات الطلب.',
    },
    useCases: {
      eyebrow: 'الاستخدامات',
      title: 'الاستخدامات المناسبة',
      description:
        'يساعد هذا القسم فرق المشاريع على فهم المجالات الأنسب لاستخدام هذه المعدة في أعمال البناء والبنية التحتية والعمليات الصناعية.',
      defaultItems: [
        'أعمال مواقع البناء',
        'مشاريع البنية التحتية والمشاريع الصناعية',
        'تأجير قصير أو طويل المدى للمعدات',
        'دعم المشاريع الثقيلة داخل الإمارات',
      ],
      byCategory: {
        Earthmoving: [
          'أعمال الحفر وتجهيز المواقع',
          'تنظيف وتسوية الأراضي',
          'تحضير الأساسات',
          'أعمال الطرق والبنية التحتية',
        ],
        Excavators: [
          'حفر الخنادق والحفريات',
          'حفر الأساسات',
          'مناولة المواد داخل مواقع البناء',
          'الهدم وتجهيز المواقع',
        ],
        Bulldozers: [
          'تنظيف الأراضي',
          'أعمال التسوية الثقيلة',
          'تجهيز المواقع',
          'تحضير مواقع إنشاء الطرق',
        ],
        Lifting: [
          'عمليات الرفع الثقيلة',
          'نقل المواد إلى الارتفاعات',
          'أعمال التركيب الصناعية',
          'الخدمات اللوجستية داخل مواقع البناء',
        ],
        'Mobile Cranes': [
          'رفع مواد البناء الثقيلة',
          'تموضع المعدات',
          'تركيب الهياكل المعدنية',
          'عمليات الرفع قصيرة المدى',
        ],
        Generators: [
          'توفير طاقة مؤقتة للمواقع',
          'دعم الطاقة الاحتياطية',
          'تشغيل العمليات الصناعية',
          'مشاريع البناء خارج الشبكة',
        ],
        Compaction: [
          'دمك التربة',
          'تحضير طبقات الطرق',
          'دمك الأسفلت',
          'أعمال إنهاء البنية التحتية',
        ],
        Concrete: [
          'أعمال صب الخرسانة',
          'أعمال الأساسات',
          'عمليات الخرسانة الكبيرة',
          'مناولة الخرسانة في الموقع',
        ],
        'Road Construction': [
          'فرش الأسفلت',
          'تحضير سطح الطريق',
          'صيانة البنية التحتية',
          'إنشاء الطرق الحضرية والسريعة',
        ],
        'Material Handling': [
          'نقل المواد داخل الموقع',
          'عمليات التحميل والتفريغ',
          'الخدمات اللوجستية الصناعية',
          'حركة مواد البناء',
        ],
      },
    },
    related: {
      eyebrow: 'معدات مشابهة',
      title: 'معدات ذات صلة',
      description:
        'استكشف معدات من نفس الفئة أو خيارات تأجير مشابهة لمشروعك.',
      empty: 'لا توجد معدات مشابهة متاحة حالياً.',
    },
  },
};
