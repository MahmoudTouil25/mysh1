export type Lang = 'en' | 'ar';

type SharedContent = {
  nav: {
    home: string;
    equipment: string;
    services: string;
    projects: string;
    blog: string;
    csr: string;
    about: string;
    contact: string;
    quote: string;
    cart: string;
    openMenu: string;
    closeMenu: string;
    changeLanguage: string;
  };
  footer: {
    description: string;
    company: string;
    legal: string;
    about: string;
    services: string;
    equipment: string;
    privacy: string;
    terms: string;
    rights: string;
    contact: {
      title: string;
      address: string;
      addressValue: string;
      phone: string;
      phoneValue: string;
      email: string;
      emailValue: string;
    };
  };
  whatsapp: {
    label: string;
  };
};

export const sharedContent = {
  en: {
    nav: {
      home: 'Home',
      equipment: 'Equipment',
      services: 'Services',
      projects: 'Projects',
      blog: 'Blog',
      csr: 'CSR',
      about: 'About',
      contact: 'Contact',
      quote: 'Request Quote',
      cart: 'Favorites cart',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      changeLanguage: 'Change language',
    },
    footer: {
      description:
        'Heavy equipment rental and machinery trading solutions for construction, industrial and infrastructure projects across the UAE.',
      company: 'Company',
      legal: 'Legal',
      about: 'About Us',
      services: 'Services',
      equipment: 'Equipment',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
      contact: {
        title: 'Contact',
        address: 'Address',
        addressValue: 'Acico Business Park, Office 205-19, Deira, Dubai',
        phone: 'Phone / WhatsApp',
        phoneValue: '+971...',
        email: 'Email',
        emailValue: 'info@mysh-ae.com',
      },
    },
    whatsapp: {
      label: 'Contact us on WhatsApp',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      equipment: 'المعدات',
      services: 'الخدمات',
      projects: 'المشاريع',
      blog: 'المدونة',
      csr: 'المسؤولية المجتمعية',
      about: 'من نحن',
      contact: 'اتصل بنا',
      quote: 'طلب عرض سعر',
      cart: 'سلة المفضلة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      changeLanguage: 'تغيير اللغة',
    },
    footer: {
      description:
        ' تأجير المعدات الثقيلة لمشاريع البناء والصناعة والبنية التحتية في جميع أنحاء دولة الإمارات.',
      company: 'الشركة',
      legal: 'روابط',
      about: 'من نحن',
      services: 'الخدمات',
      equipment: 'المعدات',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      rights: 'جميع الحقوق محفوظة.',
      contact: {
        title: 'التواصل',
        address: 'العنوان',
        addressValue: 'أسيكو بيزنس بارك، مكتب 205-19، ديرة، دبي',
        phone: 'الهاتف / واتساب',
        phoneValue: '+971...',
        email: 'البريد الإلكتروني',
        emailValue: 'info@mysh-ae.com',
      },
    },
    whatsapp: {
      label: 'تواصل معنا عبر واتساب',
    },
  },
} satisfies Record<Lang, SharedContent>;
