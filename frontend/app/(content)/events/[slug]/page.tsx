import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/content/JsonLd';
import { events } from '@/content/events';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, eventSchema } from '@/lib/schema';
import { findBySlug } from '@/lib/slugs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = findBySlug(events, slug);

  if (!event) {
    return {};
  }

  return buildMetadata({ ...event, path: `/events/${event.slug}` });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const event = findBySlug(events, slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <JsonLd data={eventSchema(event)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Events', url: '/events' },
          { name: event.title, url: `/events/${event.slug}` },
        ])}
      />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/events" className="hover:text-[#1B263B]">
            Events
          </Link>
        </nav>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          {event.eventType}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          {event.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5C677D]">{event.excerpt}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Info label="Date" value={event.date} />
          <Info label="Location" value={event.location} />
        </div>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-[#DEE3E5]">
          <Image src={event.image} alt={event.title} fill priority className="object-cover" />
        </div>
        <div className="mt-10 space-y-8">
          {event.content.map((block) => (
            <section key={block.heading}>
              <h2 className="text-2xl font-black">{block.heading}</h2>
              <p className="mt-3 text-base leading-8 text-[#5C677D]">
                {block.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>
      <p className="mt-2 font-black">{value}</p>
    </div>
  );
}
