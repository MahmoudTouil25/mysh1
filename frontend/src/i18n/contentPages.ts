import type { BlogPost, ProjectItem } from '@/types/content';
import type { Lang } from './sharedContent';

export type BlogLabels = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  readArticle: string;
  home: string;
  blog: string;
  planTitle: string;
  planDescription: string;
  viewEquipment: string;
  requestEquipment: string;
  keyTakeaway: string;
  relatedArticles: string;
  ctaTitle: string;
  ctaDescription: string;
  discussProject: string;
  dateLocale: string;
};

export type ProjectLabels = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  viewProject: string;
  home: string;
  projects: string;
  location: string;
  clientType: string;
  projectDate: string;
  equipmentUsed: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  relatedProjects: string;
  ctaTitle: string;
  ctaDescription: string;
  discussProject: string;
  requestEquipment: string;
  fallbackClientType: string;
  dateLocale: string;
};

type BlogTranslation = Partial<
  Pick<
    BlogPost,
    | 'title'
    | 'description'
    | 'excerpt'
    | 'category'
    | 'imageAlt'
    | 'readingTime'
    | 'author'
  >
> & {
  content?: BlogPost['content'];
};

type ProjectTranslation = Partial<
  Pick<
    ProjectItem,
    | 'title'
    | 'description'
    | 'excerpt'
    | 'category'
    | 'location'
    | 'clientType'
    | 'imageAlt'
    | 'equipmentUsed'
  >
> & {
  content?: ProjectItem['content'];
};

export const blogLabels = {
  en: {
    heroEyebrow: 'Blog',
    heroTitle: 'Heavy equipment rental insights for Dubai and the UAE.',
    heroDescription:
      'Good rental practice is good business  for you and for the UAE. Fewer idle machines, safer sites and honest partnerships are how we measure our impact.',
    readArticle: 'Read Article',
    home: 'Home',
    blog: 'Blog',
    planTitle: 'Plan your next rental',
    planDescription:
      'Compare available equipment, review service support or speak with MYSH about a project requirement.',
    viewEquipment: 'View Equipment',
    requestEquipment: 'Request Equipment',
    keyTakeaway: 'Key takeaway',
    relatedArticles: 'Related articles',
    ctaTitle: 'Need equipment for a UAE project?',
    ctaDescription:
      'MYSH supports construction, infrastructure, mining and industrial teams with heavy machinery rental and fleet planning across Dubai and the UAE.',
    discussProject: 'Discuss Your Project',
    dateLocale: 'en-AE',
  },
  ar: {
    heroEyebrow: 'المدونة',
    heroTitle: 'رؤى حول تأجير المعدات الثقيلة في دبي والإمارات.',
    heroDescription:
      'الممارسة السليمة في التأجير مصلحة مشتركة لك وللإمارات. معدات أقل توقفاً، ومواقع أكثر أماناً، وشراكات صادقة هكذا نقيس أثرنا.',
    readArticle: 'قراءة المقال',
    home: 'الرئيسية',
    blog: 'المدونة',
    planTitle: 'خطط لتأجيرك القادم',
    planDescription:
      'قارن المعدات المتاحة، وراجع خدمات الدعم، أو تحدث مع MYSH حول متطلبات مشروعك.',
    viewEquipment: 'عرض المعدات',
    requestEquipment: 'طلب المعدات',
    keyTakeaway: 'الخلاصة',
    relatedArticles: 'مقالات ذات صلة',
    ctaTitle: 'هل تحتاج إلى معدات لمشروع في الإمارات؟',
    ctaDescription:
      'تدعم MYSH فرق البناء والبنية التحتية والتعدين والصناعة بتأجير المعدات الثقيلة وتخطيط الأسطول في دبي والإمارات.',
    discussProject: 'ناقش مشروعك',
    dateLocale: 'ar-AE',
  },
} satisfies Record<Lang, BlogLabels>;

export const projectLabels = {
  en: {
    heroEyebrow: 'Projects',
    heroTitle: 'Equipment rental project support across the UAE.',
    heroDescription:
      'See how contractors across the UAE plan, mobilize and deliver with MYSH behind them from infrastructure and industrial scopes to large-scale earthmoving.',
    viewProject: 'View Project',
    home: 'Home',
    projects: 'Projects',
    location: 'Location',
    clientType: 'Client type',
    projectDate: 'Project date',
    equipmentUsed: 'Equipment used',
    overview: 'Overview',
    challenge: 'Challenge',
    solution: 'Solution',
    result: 'Result',
    relatedProjects: 'Related projects',
    ctaTitle: 'Planning a similar scope?',
    ctaDescription:
      'Share your equipment requirements, location and work window with MYSH so the rental team can help match machinery to the jobsite.',
    discussProject: 'Discuss Your Project',
    requestEquipment: 'Request Equipment',
    fallbackClientType: 'Project contractor',
    dateLocale: 'en-AE',
  },
  ar: {
    heroEyebrow: 'المشاريع',
    heroTitle: 'دعم مشاريع تأجير المعدات في الإمارات.',
    heroDescription:
      'اطّلع على تجارب المقاولين في مختلف أنحاء الإمارات في التخطيط والتجهيز والتنفيذ تمشي إلى جانبهم من نطاقات البنية التحتية والمشاريع الصناعية إلى أعمال تحريك التربة الكبرى.',
    viewProject: 'عرض المشروع',
    home: 'الرئيسية',
    projects: 'المشاريع',
    location: 'الموقع',
    clientType: 'نوع العميل',
    projectDate: 'تاريخ المشروع',
    equipmentUsed: 'المعدات المستخدمة',
    overview: 'نظرة عامة',
    challenge: 'التحدي',
    solution: 'الحل',
    result: 'النتيجة',
    relatedProjects: 'مشاريع ذات صلة',
    ctaTitle: 'هل تخطط لنطاق مشابه؟',
    ctaDescription:
      'شارك متطلبات المعدات والموقع ونافذة العمل مع MYSH لمساعدة فريق التأجير على مطابقة الآلات مع احتياجات الموقع.',
    discussProject: 'ناقش مشروعك',
    requestEquipment: 'طلب المعدات',
    fallbackClientType: 'مقاول مشروع',
    dateLocale: 'ar-AE',
  },
} satisfies Record<Lang, ProjectLabels>;

const blogTranslations: Record<string, BlogTranslation> = {
  'heavy-equipment-rental-dubai': {
    title: 'تأجير المعدات الثقيلة في دبي: ما الذي يجب أن يعرفه المقاولون',
    description:
      'خبرات ميدانية من فريق يتعامل مع المعدات في مختلف أنحاء الإمارات يومياً مكتوبة لنوفّرعليك المال ووقت التوقف والتردد في قرارات التأجير القادمة.',
    excerpt:
      'نقاط تخطيط أساسية للمقاولين عند مقارنة خيارات التأجير وتوقيت النقل ودعم الأسطول في دبي.',
    category: 'تخطيط التأجير',
    imageAlt: 'أسطول MYSH لتأجير المعدات الثقيلة في مشاريع دبي',
    readingTime: '5 دقائق قراءة',
    author: 'فريق تأجير MYSH',
    content: {
      intro:
        'تتحرك مشاريع البناء والبنية التحتية في دبي بسرعة، وقد يحدد توفر المعدات إنتاجية الموقع من اليوم الأول. يحتاج المقاولون إلى شريك تأجير يفهم ملاءمة الآلة وتوقيت النقل والوصول إلى الموقع قبل وصول الأسطول.',
      sections: [
        {
          heading: 'ابدأ بنطاق المشروع',
          body: 'تبدأ خطة التأجير الصحيحة من حزمة العمل وليس من قائمة المعدات فقط. يجب أن توجه عمق الحفر وارتفاع التحميل ومسافة النقل وظروف الأرض وقيود الوصول اختيار الأسطول.',
        },
        {
          heading: 'خطط للنقل قبل ضغط الموقع',
          body: 'قد تؤثر نوافذ النقل والتصاريح والوصول إلى الطرق وجاهزية الموقع في توقيت التسليم داخل دبي. يساعد التنسيق المبكر على تجنب توقف الفرق أو استبدالات متسرعة.',
        },
        {
          heading: 'انظر إلى ما بعد سعر اليوم الواحد',
          body: 'السعر المنخفض لا يكفي إذا لم تكن الآلة مناسبة ومتاحة ومدعومة. يجب مقارنة الإنتاجية والاعتمادية ودعم الاستبدال إلى جانب التكلفة.',
        },
      ],
      conclusion:
        'ينجح تأجير المعدات الثقيلة في دبي عندما يتم التعامل مع اختيار الأسطول والتسليم والدعم كقرار تشغيلي واحد.',
    },
  },
  'how-to-choose-excavator-rental-uae': {
    title: 'كيف تختار الحفارة المناسبة لمواقع البناء في الإمارات',
    description:
      'إطار عملي لمطابقة تأجير الحفارات مع متطلبات مواقع البناء وأهداف الإنتاج في الإمارات.',
    excerpt:
      'قارن حجم الحفارة والذراع والوصول والملحقات وظروف الأرض قبل إرسال المعدات إلى الموقع.',
    category: 'الحفارات',
    imageAlt: 'حفارة CAT متاحة للتأجير لمشاريع البناء والبنية التحتية في الإمارات',
    readingTime: '6 دقائق قراءة',
    author: 'فريق تأجير MYSH',
    content: {
      intro:
        'الحفارات عنصر أساسي في كثير من مواقع البناء في الإمارات، لكن الاختيار الأفضل يعتمد على بيئة العمل. فالآلة المناسبة للأعمال المفتوحة قد لا تكون مثالية لمشاريع المرافق أو الطرق أو المواقع الحضرية الضيقة.',
      sections: [
        {
          heading: 'طابق حجم الحفارة مع واجهة العمل',
          body: 'يجب مراجعة عمق الحفر وسعة الجرافة ومدى الوصول ونصف قطر الدوران وضغط الأرض مقابل تخطيط الموقع. الحجم الزائد قد يسبب صعوبات في الوصول والنقل.',
        },
        {
          heading: 'راجع الملحقات والتطبيقات',
          body: 'قد تحتاج أعمال الحفر والكسر والتحميل والتسوية إلى جرافات أو ملحقات هيدروليكية مختلفة. تأكيد الملحقات مبكرا يقلل فجوات الجدول.',
        },
        {
          heading: 'تحقق من النقل وقيود الموقع',
          body: 'وزن الآلة والوصول إلى الطرق وتوقيت التسليم ومساحة الحركة كلها عوامل تؤثر في خطة التأجير.',
        },
      ],
      conclusion:
        'الحفارة المناسبة هي التي تلائم هدف الإنتاج وظروف الوصول وخطة الدعم الخاصة بالموقع.',
    },
  },
  'reliable-fleet-support-infrastructure-projects': {
    title: 'لماذا يهم دعم الأسطول الموثوق في مشاريع البنية التحتية',
    description:
      'نظرة على دور دعم تأجير المعدات في حماية الجداول الزمنية وإنتاجية المقاولين في مشاريع البنية التحتية.',
    excerpt:
      'تعتمد مشاريع البنية التحتية على توفر منسق للمعدات وخطط دعم واستبدال عملية.',
    category: 'البنية التحتية',
    imageAlt: 'دعم تأجير معدات ثقيلة لأعمال البنية التحتية في الإمارات',
    readingTime: '4 دقائق قراءة',
    author: 'فريق تأجير MYSH',
    content: {
      intro:
        'غالبا ما تشمل أعمال البنية التحتية وصولا مرحليا ونوافذ تسليم ضيقة ومقاولين متعددين يعملون بالتتابع. في هذه البيئة، تصبح موثوقية الأسطول جزءا من ضبط المشروع.',
      sections: [
        {
          heading: 'التوقف يؤثر في أكثر من آلة',
          body: 'عندما ترتبط أعمال الحفر والنقل والتسوية، يمكن لغياب آلة واحدة أن يبطئ عدة واجهات عمل. يقلل التخطيط الموثوق من انتشار التأخير.',
        },
        {
          heading: 'يجب أن يواكب الدعم مراحل المشروع',
          body: 'قد تحتاج أعمال الطرق والمرافق والصيانة إلى معدات في مراحل مختلفة. يستفيد المقاولون من مواءمة التوفر مع نوافذ العمل.',
        },
        {
          heading: 'الاتصال الواضح مهم أثناء العمل',
          body: 'تساعد التحديثات الواضحة حول التوفر والنقل وخيارات الدعم فرق المشروع على اتخاذ قرارات سريعة عند تغير ظروف الموقع.',
        },
      ],
      conclusion:
        'يجب قياس دعم التأجير بقدرته على إبقاء المشروع متقدما، وليس فقط بعدد الآلات الموردة.',
    },
  },
  'equipment-rental-vs-buying-uae-contractors': {
    title: 'تأجير المعدات أم شراؤها: ما الأنسب للمقاولين في الإمارات',
    description:
      'دليل للمقاولين حول متى يكون تأجير المعدات الثقيلة أكثر مرونة من الشراء لمتطلبات المشاريع.',
    excerpt:
      'مقارنة عملية بين التأجير والامتلاك من حيث الاستخدام والسيولة والمرونة التشغيلية.',
    category: 'استراتيجية التأجير',
    imageAlt: 'شاحنة نقل مفصلية تستخدم في مشاريع التأجير وتحريك التربة في الإمارات',
    readingTime: '5 دقائق قراءة',
    author: 'فريق تأجير MYSH',
    content: {
      intro:
        'قد يكون شراء المعدات مناسبا عندما يكون الاستخدام طويلا ومتوقعا. لكن كثيرا من المقاولين في الإمارات يتعاملون مع مشاريع ومواقع وجداول متغيرة، ما يجعل التأجير خيارا مرنا للوصول إلى الآلة المناسبة دون تجميد رأس المال.',
      sections: [
        {
          heading: 'راجع معدل الاستخدام قبل التملك',
          body: 'يكون امتلاك المعدات أكثر فعالية عندما تستخدم الآلات باستمرار عبر عدة مشاريع. أما الطلب الموسمي أو المحدد بنطاق عمل فقد يناسبه التأجير.',
        },
        {
          heading: 'التأجير يعزز مرونة الأسطول',
          body: 'قد تنتقل متطلبات المشروع من الحفر إلى النقل أو التسوية أو صيانة الطرق. يمنح التأجير المقاولين وصولا إلى فئات مختلفة حسب تغير العمل.',
        },
        {
          heading: 'الصيانة والدعم يؤثران في التكلفة الكلية',
          body: 'يجلب الامتلاك مسؤوليات الصيانة والقطع والتخزين والاستبدال. يمكن للتأجير تبسيط هذه الجوانب عند الحاجة إلى المعدات لفترات محددة.',
        },
      ],
      conclusion:
        'يعتمد القرار الأفضل على معدل الاستخدام وخط المشاريع واستراتيجية رأس المال. وغالبا يبقى التأجير وسيلة عملية للحفاظ على المرونة.',
    },
  },
};

const projectTranslations: Record<string, ProjectTranslation> = {
  'dubai-infrastructure-equipment-support': {
    title: 'تجهيز معدات لمشروع بنية تحتية في دبي',
    description:
      'دعم تأجير معدات لمقاول بنية تحتية في دبي لإدارة أعمال حفر ونقل مواد على مراحل.',
    excerpt:
      'تنسيق معدات تأجير للحفر والتحميل ودعم الموقع ضمن أعمال بنية تحتية مرحلية في دبي.',
    category: 'البنية التحتية',
    location: 'دبي، الإمارات',
    clientType: 'مقاول بنية تحتية',
    imageAlt: 'معدات ثقيلة مجهزة لدعم مشروع بنية تحتية في دبي',
    equipmentUsed: ['حفارات هيدروليكية', 'لوادر بعجلات', 'شاحنات نقل مفصلية'],
    content: {
      overview:
        'دعمت MYSH مقاولا في دبي بتخطيط معدات تأجير لأعمال الحفر والتحميل ونقل المواد ضمن منطقة عمل نشطة.',
      challenge:
        'احتاج المقاول إلى توفر معدات متوافق مع نوافذ وصول متغيرة وواجهات عمل متعددة ومساحة محدودة للمعدات الخاملة.',
      solution:
        'راجعت MYSH تسلسل العمل ونسقت خيارات حفارات ولوادر وشاحنات نقل مناسبة حسب توقيت التسليم والوصول والإنتاج المتوقع.',
      result:
        'حصل المقاول على خطة أسطول عملية تدعم التعبئة دون التزام طويل الأجل بمعدات مملوكة لحزمة عمل قصيرة وحساسة للجدول.',
    },
  },
  'earthmoving-fleet-support-large-scale-construction': {
    title: 'دعم أسطول تحريك التربة لمشروع بناء كبير',
    description:
      'دراسة حالة لدعم تأجير معدات تحريك التربة في موقع بناء واسع داخل الإمارات.',
    excerpt:
      'مزيج أسطول تأجير عملي لدعم الحفر الكمي والتسوية ونقل المواد في نطاق بناء كبير.',
    category: 'تحريك التربة',
    location: 'الإمارات',
    clientType: 'مقاول رئيسي',
    imageAlt: 'أسطول معدات تحريك التربة يدعم مشروع بناء كبير في الإمارات',
    equipmentUsed: ['حفارات', 'جرافات', 'شاحنات تفريغ مفصلية'],
    content: {
      overview:
        'احتاج مقاول رئيسي إلى دعم أسطول تأجير لعمليات تحريك التربة في موقع بناء كبير بعدة مناطق نشطة.',
      challenge:
        'تطلب المشروع معدات تدعم أهداف الإنتاج مع القدرة على التكيف مع واجهات عمل ومسارات نقل متغيرة.',
      solution:
        'اقترحت MYSH مزيجا من الحفارات والجرافات وشاحنات النقل حسب ظروف الموقع ومسافة النقل ومدة التأجير.',
      result:
        'تمكن المقاول من توسيع أو تقليل المعدات حسب برنامج العمل وتقليل ضغط البحث عن آلات منفصلة في كل مرحلة.',
    },
  },
  'industrial-site-preparation-heavy-machinery-rental': {
    title: 'تأجير معدات ثقيلة لتجهيز موقع صناعي',
    description:
      'دراسة حالة حول دعم تأجير معدات ثقيلة لأعمال تجهيز قطعة صناعية والأعمال المبكرة.',
    excerpt:
      'دعم معدات تأجير لأعمال التنظيف والتسوية وتجهيز موقع تطوير صناعي.',
    category: 'الصناعة',
    location: 'الشارقة، الإمارات',
    clientType: 'مطور صناعي',
    imageAlt: 'جرافة تأجير تجهز موقع بناء صناعي',
    equipmentUsed: ['جرافات', 'حفارات', 'لوادر بعجلات'],
    content: {
      overview:
        'دعمت MYSH تجهيز موقع صناعي بمعدات تأجير مناسبة للتنظيف والتسوية الأولية وفتح واجهات العمل.',
      challenge:
        'احتاج العميل إلى معدات قادرة دون تحمل تكلفة امتلاك آلات مطلوبة فقط خلال الأعمال المبكرة.',
      solution:
        'راجعت MYSH نطاق التجهيز وطابقت خيارات الجرافات والحفارات واللوادر مع ظروف الأرض والوصول.',
      result:
        'ساعد نهج التأجير على استمرار مرحلة التجهيز مع تجنب التزامات أسطول طويلة لمتطلب مؤقت.',
    },
  },
  'roadworks-utilities-equipment-supply-uae': {
    title: 'توريد معدات موثوق لأعمال الطرق والمرافق',
    description:
      'دعم تأجير معدات للمقاولين العاملين في الطرق وممرات المرافق وأعمال الصيانة المدنية.',
    excerpt:
      'تنسيق تأجير معدات لفرق مدنية تعمل حول الوصول إلى الطرق وممرات المرافق ونوافذ الصيانة.',
    category: 'أعمال الطرق',
    location: 'دبي والإمارات الشمالية',
    clientType: 'مقاول أعمال مدنية',
    imageAlt: 'دعم تأجير معدات صيانة طرق وأعمال مرافق في الإمارات',
    equipmentUsed: ['حفارات', 'لوادر', 'معدات دعم للدمك'],
    content: {
      overview:
        'احتاج مقاول أعمال مدنية إلى دعم تأجير معدات لأعمال طرق ومرافق ضمن نوافذ صيانة مخططة.',
      challenge:
        'تطلبت قيود الوصول ومناطق العمل المرحلية توفر المعدات في الوقت المناسب دون ازدحام المواقع المحدودة.',
      solution:
        'نسقت MYSH خيارات معدات عملية حول جدول المقاول وتسلسل العمل واحتياجات الإصلاح المدني.',
      result:
        'حسن المقاول جاهزيته لنوافذ العمل المخططة وحافظ على وصوله إلى معدات مناسبة للطرق والمرافق.',
    },
  },
};

export function localizeBlogPost(post: BlogPost, lang: Lang): BlogPost {
  if (lang === 'en') {
    return post;
  }

  const translation = blogTranslations[post.slug];
  return translation ? { ...post, ...translation } : post;
}

export function localizeProject(project: ProjectItem, lang: Lang): ProjectItem {
  if (lang === 'en') {
    return project;
  }

  const translation = projectTranslations[project.slug];
  return translation ? { ...project, ...translation } : project;
}
