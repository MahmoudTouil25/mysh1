import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/content/JsonLd';
import { equipmentCatalog } from '@/content/equipment';
import { services } from '@/content/services';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { findBySlug } from '@/lib/slugs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findBySlug(services, slug);

  if (!service) {
    return {};
  }

  return buildMetadata({ ...service, path: `/services/${service.slug}` });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = findBySlug(services, slug);

  if (!service) {
    notFound();
  }

  const relatedEquipment = equipmentCatalog.filter((item) =>
    service.relatedEquipment.includes(item.name),
  );

  return (
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.slug}` },
        ])}
      />
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/services" className="hover:text-[#1B263B]">
            Services
          </Link>
        </nav>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          {service.badge}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          {service.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5C677D]">
          {service.excerpt}
        </p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-[#DEE3E5]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {service.content.map((block) => (
            <section key={block.heading} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#1B263B]">
                {block.heading}
              </h2>
              <p className="mt-3 leading-7 text-[#5C677D]">{block.body}</p>
            </section>
          ))}
        </div>
        {relatedEquipment.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-black text-[#1B263B]">
              Related equipment
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedEquipment.map((item) => (
                <Link
                  key={item.slug}
                  href={`/equipment/${item.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#1B263B] shadow-sm transition hover:bg-[#F4D03F]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
