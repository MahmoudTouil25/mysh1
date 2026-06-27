import type { ContentBlock, SeoFields } from './content';

export type Service = SeoFields & {
  excerpt: string;
  badge: string;
  cta: string;
  content: ContentBlock[];
  relatedEquipment: string[];
};
