'use client';

import ContentHero from '@/components/content/ContentHero';
import {
  blogLabels,
  localizeBlogPost,
} from '@/i18n/contentPages';
import { useLanguage } from '@/i18n/LanguageContext';
import type { BlogPost } from '@/types/content';
import BlogGrid from './BlogGrid';

type BlogIndexPageProps = {
  posts: BlogPost[];
};

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const { lang } = useLanguage('en');
  const labels = blogLabels[lang];
  const localizedPosts = posts.map((post) => localizeBlogPost(post, lang));

  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow={labels.heroEyebrow}
        title={labels.heroTitle}
        description={labels.heroDescription}
        imageSrc="/images/mysh-fleet-rental-blog.png"
        imageAlt="MYSH fleet rental equipment for blog insights"
      />
      <BlogGrid posts={localizedPosts} labels={labels} />
    </div>
  );
}
