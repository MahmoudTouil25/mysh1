import type { Lang } from './sharedContent';

type EquipmentContent = {
  page: {
    eyebrow: string;
    title: string;
    description: string;
    loading: string;
    error: string;
    resultsFound: string;
    resultFound: string;
    noResults: string;
  };
  search: {
    placeholder: string;
    label: string;
  };
  filters: {
    title: string;
    mobileTitle: string;
    category: string;
    allCategories: string;
    brand: string;
    allBrands: string;
    model: string;
    allModels: string;
    operatingWeight: string;
    allOperatingWeights: string;
    clearAll: string;
    activeFilters: string;
    openFilters: string;
  };
  view: {
    grid: string;
    list: string;
  };
  availability: Record<string, string>;
  condition: Record<string, string>;
  card: {
    daily: string;
    weekly: string;
    monthly: string;
    requestQuote: string;
    viewDetails: string;
    addFavorite: string;
    removeFavorite: string;
    location: string;
    weight: string;
    power: string;
    condition: string;
    noImage: string;
  };
  favoritesCart: {
    title: string;
    empty: string;
    itemCount: string;
    itemCountSingular: string;
    remove: string;
    clear: string;
    requestSelected: string;
  };
  tags: {
    search: string;
    category: string;
    brand: string;
    model: string;
    operatingWeight: string;
  };
  categories: Record<string, string>;
};

export const equipmentContent: Record<Lang, EquipmentContent>  = {
  en: {
    page: {
      eyebrow: 'Equipment Fleet',
      title: 'Browse Heavy Equipment',
      description:
        'Find the machine your site is waiting for certified excavators, loaders, cranes and plant equipment, ready to mobilize anywhere in the UAE.',
      loading: 'Loading equipment...',
      error: 'Unable to load equipment. Please try again.',
      resultsFound: 'results found',
      resultFound: 'result found',
      noResults: 'No equipment found',
    },
    search: {
      label: 'Search equipment',
      placeholder: 'Search by name, brand, model or location...',
    },
    filters: {
      title: 'Filters',
      mobileTitle: 'Filter Equipment',
      category: 'Category',
      allCategories: 'All categories',
      brand: 'Brand',
      allBrands: 'All brands',
      model: 'Model',
      allModels: 'All models',
      operatingWeight: 'Operating weight',
      allOperatingWeights: 'All weights',
      clearAll: 'Clear all',
      activeFilters: 'Active filters',
      openFilters: 'Filters',
    },
    view: {
      grid: 'Grid',
      list: 'List',
    },
    availability: {
      available: 'Available',
      on_rent: 'On rent',
      maintenance: 'Maintenance',
      unavailable: 'Unavailable',
    },
    condition: {
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
    },
    card: {
      daily: 'day',
      weekly: 'week',
      monthly: 'month',
      requestQuote: 'Request Quote',
      viewDetails: 'View Details',
      addFavorite: 'Add to favorites',
      removeFavorite: 'Remove from favorites',
      location: 'Location',
      weight: 'Weight',
      power: 'Power',
      condition: 'Condition',
      noImage: 'No image',
    },
    favoritesCart: {
      title: 'Favorites Cart',
      empty: 'Select equipment with the heart icon to add it here.',
      itemCount: 'items selected',
      itemCountSingular: 'item selected',
      remove: 'Remove',
      clear: 'Clear cart',
      requestSelected: 'Request selected',
    },
    tags: {
      search: 'Search',
      category: 'Category',
      brand: 'Brand',
      model: 'Model',
      operatingWeight: 'Operating weight',
    },
    categories: {
      Earthmoving: 'Earthmoving',
      Excavators: 'Excavators',
      Bulldozers: 'Bulldozers',
      'Motor Graders': 'Motor Graders',
      'Backhoe Loaders': 'Backhoe Loaders',
      Scrapers: 'Scrapers',
      Lifting: 'Lifting',
      'Tower Cranes': 'Tower Cranes',
      'Mobile Cranes': 'Mobile Cranes',
      Telehandlers: 'Telehandlers',
      'Aerial Work Platforms': 'Aerial Work Platforms',
      Compaction: 'Compaction',
      'Vibratory Rollers': 'Vibratory Rollers',
      'Plate Compactors': 'Plate Compactors',
      'Pneumatic Rollers': 'Pneumatic Rollers',
      Concrete: 'Concrete',
      'Batching Plants': 'Batching Plants',
      'Concrete Mixers': 'Concrete Mixers',
      'Concrete Pumps': 'Concrete Pumps',
      Vibrators: 'Vibrators',
      'Road Construction': 'Road Construction',
      'Asphalt Pavers': 'Asphalt Pavers',
      'Cold Planers': 'Cold Planers',
      'Road Rollers': 'Road Rollers',
      'Drilling & Foundation': 'Drilling & Foundation',
      'Piling Rigs': 'Piling Rigs',
      'Drilling Rigs': 'Drilling Rigs',
      'Material Handling': 'Material Handling',
      'Dump Trucks': 'Dump Trucks',
      'Articulated Haulers': 'Articulated Haulers',
      'Conveyor Systems': 'Conveyor Systems',
      Plants: 'Plants',
      'Asphalt Plants': 'Asphalt Plants',
      'Crushing & Screening Plants': 'Crushing & Screening Plants',
      Generators: 'Generators',
    },
  },

  ar: {
    page: {
      eyebrow: 'أسطول المعدات',
      title: 'تصفح المعدات الثقيلة',
      description:
        'اعثر على الآلة التي ينتظرها موقعك حفّارات ولوادر ورافعات وآليات إنشائية معتمدة، جاهزة للانطلاق إلى أي مكان في الإمارات.',
      loading: 'جاري تحميل المعدات...',
      error: 'تعذر تحميل المعدات. يرجى المحاولة مرة أخرى.',
      resultsFound: 'نتيجة',
      resultFound: 'نتيجة واحدة',
      noResults: 'لم يتم العثور على معدات',
    },
    search: {
      label: 'البحث في المعدات',
      placeholder: 'ابحث بالاسم أو العلامة أو الموديل أو الموقع...',
    },
    filters: {
      title: 'الفلاتر',
      mobileTitle: 'تصفية المعدات',
      category: 'الفئة',
      allCategories: 'كل الفئات',
      brand: 'العلامة',
      allBrands: 'كل العلامات',
      model: 'الموديل',
      allModels: 'كل الموديلات',
      operatingWeight: 'وزن التشغيل',
      allOperatingWeights: 'كل الأوزان',
      clearAll: 'مسح الكل',
      activeFilters: 'الفلاتر النشطة',
      openFilters: 'الفلاتر',
    },
    view: {
      grid: 'شبكة',
      list: 'قائمة',
    },
    availability: {
      available: 'متاح',
      on_rent: 'مؤجر',
      maintenance: 'في الصيانة',
      unavailable: 'غير متاح',
    },
    condition: {
      excellent: 'ممتازة',
      good: 'جيدة',
      fair: 'مقبولة',
    },
    card: {
      daily: 'اليوم',
      weekly: 'الأسبوع',
      monthly: 'الشهر',
      requestQuote: 'طلب عرض سعر',
      viewDetails: 'عرض التفاصيل',
      addFavorite: 'إضافة إلى المفضلة',
      removeFavorite: 'إزالة من المفضلة',
      location: 'الموقع',
      weight: 'الوزن',
      power: 'القوة',
      condition: 'الحالة',
      noImage: 'لا توجد صورة',
    },
    favoritesCart: {
      title: 'سلة المفضلة',
      empty: 'اختر المعدات باستخدام أيقونة القلب لإضافتها هنا.',
      itemCount: 'معدات محددة',
      itemCountSingular: 'معدة محددة',
      remove: 'إزالة',
      clear: 'تفريغ السلة',
      requestSelected: 'طلب المحدد',
    },
    tags: {
      search: 'بحث',
      category: 'الفئة',
      brand: 'العلامة',
      model: 'الموديل',
      operatingWeight: 'وزن التشغيل',
    },
    categories: {
      Earthmoving: 'معدات الحفر وتجهيز المواقع',
      Excavators: 'حفارات',
      Bulldozers: 'جرافات',
      'Motor Graders': 'ممهدات الطرق',
      'Backhoe Loaders': 'لودرات خلفية',
      Scrapers: 'كاشطات',
      Lifting: 'معدات الرفع',
      'Tower Cranes': 'رافعات برجية',
      'Mobile Cranes': 'رافعات متنقلة',
      Telehandlers: 'مناولات تلسكوبية',
      'Aerial Work Platforms': 'منصات العمل المرتفعة',
      Compaction: 'معدات الدمك',
      'Vibratory Rollers': 'مداحل اهتزازية',
      'Plate Compactors': 'ضواغط صفائحية',
      'Pneumatic Rollers': 'مداحل هوائية',
      Concrete: 'معدات الخرسانة',
      'Batching Plants': 'محطات خلط الخرسانة',
      'Concrete Mixers': 'خلاطات خرسانة',
      'Concrete Pumps': 'مضخات خرسانة',
      Vibrators: 'هزازات خرسانة',
      'Road Construction': 'معدات إنشاء الطرق',
      'Asphalt Pavers': 'فرادات أسفلت',
      'Cold Planers': 'قاشطات أسفلت باردة',
      'Road Rollers': 'مداحل طرق',
      'Drilling & Foundation': 'الحفر والأساسات',
      'Piling Rigs': 'معدات الخوازيق',
      'Drilling Rigs': 'معدات الحفر',
      'Material Handling': 'مناولة المواد',
      'Dump Trucks': 'شاحنات قلابة',
      'Articulated Haulers': 'شاحنات مفصلية',
      'Conveyor Systems': 'أنظمة ناقلة',
      Plants: 'المحطات',
      'Asphalt Plants': 'محطات أسفلت',
      'Crushing & Screening Plants': 'محطات تكسير وغربلة',
      Generators: 'مولدات',
    },
  },
};
