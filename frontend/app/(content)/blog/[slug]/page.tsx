import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailPage from '@/components/blog/BlogDetailPage';
import JsonLd from '@/components/content/JsonLd';
import { blogPosts } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { findBySlug } from '@/lib/slugs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);

  if (!post) {
    return {};
  }

  return buildMetadata({ ...post, path: `/blog/${post.slug}` });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <BlogDetailPage post={post} relatedPosts={related} />
    </>
  );
}
