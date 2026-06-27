import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/content/JsonLd';
import { blogPosts } from '@/content/blog';
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
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/blog" className="hover:text-[#1B263B]">
            Blog
          </Link>
        </nav>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          {post.category}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5C677D]">{post.excerpt}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-[#DEE3E5]">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>
        <div className="mt-10 space-y-8">
          {post.content.map((block) => (
            <section key={block.heading}>
              <h2 className="text-2xl font-black">{block.heading}</h2>
              <p className="mt-3 text-base leading-8 text-[#5C677D]">
                {block.body}
              </p>
            </section>
          ))}
        </div>
        <section className="mt-12 border-t border-[#C2C7C9] pt-8">
          <h2 className="text-2xl font-black">Related articles</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#1B263B] shadow-sm transition hover:bg-[#F4D03F]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
