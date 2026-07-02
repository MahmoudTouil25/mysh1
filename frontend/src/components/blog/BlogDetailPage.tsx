'use client';

import {
  blogLabels,
  localizeBlogPost,
} from '@/i18n/contentPages';
import { useLanguage } from '@/i18n/LanguageContext';
import type { BlogPost } from '@/types/content';
import BlogContent from './BlogContent';

type BlogDetailPageProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export default function BlogDetailPage({
  post,
  relatedPosts,
}: BlogDetailPageProps) {
  const { lang } = useLanguage('en');
  const labels = blogLabels[lang];

  return (
    <BlogContent
      post={localizeBlogPost(post, lang)}
      relatedPosts={relatedPosts.map((item) => localizeBlogPost(item, lang))}
      labels={labels}
    />
  );
}
