import type { Metadata } from 'next';
import ContentHero from '@/components/content/ContentHero';
import { csrContent } from '@/content/csr';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  ...csrContent,
  path: '/csr',
});

export default function Page() {
  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow={csrContent.eyebrow}
        title={csrContent.title}
        description={csrContent.excerpt}
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {csrContent.pillars.map((pillar) => (
            <article key={pillar.heading} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#1B263B]">
                {pillar.heading}
              </h2>
              <p className="mt-3 leading-7 text-[#5C677D]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
