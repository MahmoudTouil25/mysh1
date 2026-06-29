import type { Metadata } from 'next';
import ServicesPage from '@/views/ServicesPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'services',
  title: 'Heavy Equipment Rental Services',
  metaTitle: 'Heavy Equipment Rental Services Dubai and UAE',
  metaDescription:
    'Explore MYSH equipment rental services for marine projects, airport infrastructure, earthmoving, excavation and road maintenance across the UAE.',
  image: '/images/mysh-fleet-rental-service.png',
  path: '/services',
});

export default function Page() {
  return <ServicesPage lang="en" />;
}
