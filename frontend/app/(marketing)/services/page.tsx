import type { Metadata } from 'next';
import ContentHero from '@/components/content/ContentHero';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'services',
  title: 'Heavy Equipment Rental Services',
  metaTitle: 'Heavy Equipment Rental Services Dubai and UAE',
  metaDescription:
    'Explore MYSH equipment rental services for marine projects, airport infrastructure, earthmoving, excavation and road maintenance across the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/services',
});

export default function Page() {
  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow="Services"
        title="Heavy equipment rental services for demanding UAE projects."
        description="Browse rental sectors supported by MYSH, from ports and airport infrastructure to excavation, earthmoving and road maintenance."
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              lang="en"
              href={`/services/${service.slug}`}
              service={{
                title: service.title,
                description: service.excerpt,
                image: service.image,
                badge: service.badge,
                cta: service.cta,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
