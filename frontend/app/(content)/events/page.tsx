import type { Metadata } from 'next';
import ContentHero from '@/components/content/ContentHero';
import EventCard from '@/components/content/EventCard';
import { events } from '@/content/events';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'events',
  title: 'MYSH Events',
  metaTitle: 'MYSH Heavy Equipment Rental Events UAE',
  metaDescription:
    'Upcoming MYSH briefings, workshops and equipment planning events for contractors in Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/events',
});

export default function Page() {
  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow="Events"
        title="Equipment rental briefings and contractor workshops."
        description="Follow upcoming MYSH events for machinery rental planning, infrastructure support and project sector readiness."
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
