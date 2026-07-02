import Image from 'next/image';
import Link from 'next/link';
import type { BlogLabels } from '@/i18n/contentPages';
import type { BlogPost } from '@/types/content';

type BlogContentProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
  labels: BlogLabels;
};

export default function BlogContent({
  post,
  relatedPosts,
  labels,
}: BlogContentProps) {
  return (
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            {labels.home}
          </Link>{' '}
          /{' '}
          <Link href="/blog" className="hover:text-[#1B263B]">
            {labels.blog}
          </Link>
        </nav>

        <header>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5C677D]">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-[#5C677D]">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, labels.dateLocale)}
            </time>
            {post.readingTime && <span>{post.readingTime}</span>}
            {post.author && <span>{post.author}</span>}
          </div>
        </header>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-[#DEE3E5] shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <div className="space-y-8">
            <p className="text-lg leading-8 text-[#3D4757]">{post.content.intro}</p>
            {post.content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black">{section.heading}</h2>
                <p className="mt-3 text-base leading-8 text-[#5C677D]">
                  {section.body}
                </p>
              </section>
            ))}
            {post.content.conclusion && (
              <section className="rounded-lg border-l-4 border-[#F4D03F] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black">{labels.keyTakeaway}</h2>
                <p className="mt-3 text-base leading-8 text-[#5C677D]">
                  {post.content.conclusion}
                </p>
              </section>
            )}
          </div>

          <aside className="rounded-lg border border-[#C2C7C9]/70 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">{labels.planTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[#5C677D]">
              {labels.planDescription}
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/equipment"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1B263B] px-4 text-sm font-extrabold text-white transition hover:bg-[#062D31]"
              >
                {labels.viewEquipment}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F4D03F] px-4 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
              >
                {labels.requestEquipment}
              </Link>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-14 border-t border-[#C2C7C9] pt-8">
            <h2 className="text-2xl font-black">{labels.relatedArticles}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-lg bg-white p-4 text-sm font-extrabold leading-6 text-[#1B263B] shadow-sm transition hover:bg-[#F4D03F]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-xl bg-[#062D31] p-6 text-white md:p-8">
          <h2 className="text-2xl font-black">{labels.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/75">
            {labels.ctaDescription}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
          >
            {labels.discussProject}
          </Link>
        </section>
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
