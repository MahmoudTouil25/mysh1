import type { Metadata } from 'next';
import BlogIndexPage from '@/components/blog/BlogIndexPage';
import { blogPosts } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'blog',
  title: 'Blog',
  metaTitle: 'Blog | MYSH Heavy Equipment Rental Dubai',
  metaDescription:
    'Insights about heavy equipment rental, machinery trading, construction equipment, fleet support, and project operations in Dubai and the UAE.',
  image: '/images/mysh-fleet-rental-blog.png',
  path: '/blog',
});

export default function Page() {
  return <BlogIndexPage posts={blogPosts} />;
}
