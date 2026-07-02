import type { BlogLabels } from '@/i18n/contentPages';
import type { BlogPost } from '@/types/content';
import BlogCard from './BlogCard';

type BlogGridProps = {
  posts: BlogPost[];
  labels: BlogLabels;
};

export default function BlogGrid({ posts, labels }: BlogGridProps) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} labels={labels} />
        ))}
      </div>
    </section>
  );
}
