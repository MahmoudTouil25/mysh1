import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/content/JsonLd';
import { equipmentCatalog } from '@/content/equipment';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, productSchema } from '@/lib/schema';
import { findBySlug } from '@/lib/slugs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return equipmentCatalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(equipmentCatalog, slug);

  if (!item) {
    return {};
  }

  return buildMetadata({ ...item, path: `/equipment/${item.slug}` });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = findBySlug(equipmentCatalog, slug);

  if (!item) {
    notFound();
  }

  const related = equipmentCatalog
    .filter(
      (candidate) =>
        candidate.categoryId === item.categoryId && candidate.slug !== item.slug,
    )
    .slice(0, 3);

  return (
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <JsonLd data={productSchema(item)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Equipment', url: '/equipment' },
          { name: item.title, url: `/equipment/${item.slug}` },
        ])}
      />
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/equipment" className="hover:text-[#1B263B]">
            Equipment
          </Link>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
              {item.brand} {item.model}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5C677D]">
              {item.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Spec label="Location" value={item.location} />
              <Spec label="Operating weight" value={`${item.operatingWeight} t`} />
              <Spec label="Engine power" value={`${item.enginePower} kW`} />
              <Spec label="Minimum rental" value={`${item.minimumRentalDays} days`} />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#DEE3E5] shadow-sm">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {item.content.map((block) => (
            <section key={block.heading} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">{block.heading}</h2>
              <p className="mt-3 leading-7 text-[#5C677D]">{block.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-black">Applications</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {item.applications.map((application) => (
              <span
                key={application}
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#1B263B] shadow-sm"
              >
                {application}
              </span>
            ))}
          </div>
        </section>
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-black">Related equipment</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((candidate) => (
                <Link
                  key={candidate.slug}
                  href={`/equipment/${candidate.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#1B263B] shadow-sm transition hover:bg-[#F4D03F]"
                >
                  {candidate.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#C2C7C9]/70 bg-white p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-[#1B263B]">{value}</p>
    </div>
  );
}
