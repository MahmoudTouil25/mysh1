export type SeoFields = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt?: string;
};

export type ContentBlock = {
  heading: string;
  body: string;
};

export type BlogPost = SeoFields & {
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  author?: string;
  category: string;
  imageAlt: string;
  content: {
    intro: string;
    sections: ContentBlock[];
    conclusion?: string;
  };
};

export type EventItem = SeoFields & {
  excerpt: string;
  date: string;
  location: string;
  eventType: string;
  content: ContentBlock[];
};

export type ProjectItem = SeoFields & {
  description: string;
  excerpt: string;
  category: string;
  location: string;
  clientType?: string;
  imageAlt: string;
  date: string;
  equipmentUsed: string[];
  content: {
    overview: string;
    challenge: string;
    solution: string;
    result: string;
  };
};

export type CsrContent = SeoFields & {
  eyebrow: string;
  excerpt: string;
  pillars: ContentBlock[];
};
