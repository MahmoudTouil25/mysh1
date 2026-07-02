import Image from 'next/image';
import Link from 'next/link';
import type { BlogLabels } from '@/i18n/contentPages';
import type { BlogPost } from '@/types/content';

type BlogCardProps = {
  post: BlogPost;
  labels: BlogLabels;
};

export default function BlogCard({ post, labels }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#C2C7C9]/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,38,59,0.12)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 bg-[#DEE3E5]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em]">
          <span className="text-[#855300]">{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#C2C7C9]" />
          <time dateTime={post.publishedAt} className="text-[#5C677D]">
            {formatDate(post.publishedAt, labels.dateLocale)}
          </time>
        </div>
        <h2 className="mt-4 text-xl font-black leading-tight text-[#1B263B]">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#855300]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5C677D]">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1B263B] px-5 text-sm font-extrabold text-white transition hover:bg-[#062D31]"
        >
          {labels.readArticle}
        </Link>
      </div>
    </article>
  );
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}
