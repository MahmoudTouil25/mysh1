export type SeoFields = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
};

export type ContentBlock = {
  heading: string;
  body: string;
};

export type BlogPost = SeoFields & {
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: ContentBlock[];
};

export type EventItem = SeoFields & {
  excerpt: string;
  date: string;
  location: string;
  eventType: string;
  content: ContentBlock[];
};

export type ProjectItem = SeoFields & {
  excerpt: string;
  location: string;
  sector: string;
  completion: string;
  content: ContentBlock[];
};

export type CsrContent = SeoFields & {
  eyebrow: string;
  excerpt: string;
  pillars: ContentBlock[];
};
