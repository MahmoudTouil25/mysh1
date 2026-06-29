import type { Metadata } from 'next';
import BlogCard from '@/components/content/BlogCard';
import ContentHero from '@/components/content/ContentHero';
import { blogPosts } from '@/content/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'blog',
  title: 'Heavy Equipment Rental Blog',
  metaTitle: 'Heavy Equipment Rental Blog Dubai and UAE | MYSH',
  metaDescription:
    'Read MYSH insights about equipment rental planning, excavation, road maintenance, marine projects and UAE machinery selection.',
  image: '/images/mysh-fleet-rental-blog.png',
  path: '/blog',
});

export default function Page() {
  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow="Blog"
        title="Rental planning insights for heavy equipment projects."
        description="Guides and practical notes for contractors comparing machinery, rental timing and project-ready fleet options in the UAE."
        imageSrc="/images/mysh-fleet-rental-blog.png"
        imageAlt="MYSH fleet rental equipment for blog insights"
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
