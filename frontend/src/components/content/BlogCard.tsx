import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types/content';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,38,59,0.12)]">
      <div className="relative h-52 bg-[#DEE3E5]">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#855300]">
          {post.category}
        </p>
        <h2 className="mt-3 text-xl font-black leading-tight text-[#1B263B]">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5C677D]">{post.excerpt}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[#5C677D]">
          {new Date(post.date).toLocaleDateString('en-AE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  );
}
