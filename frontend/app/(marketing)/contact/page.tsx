import type { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'contact',
  title: 'Contact MYSH',
  metaTitle: 'Contact MYSH Heavy Equipment Rental Dubai',
  metaDescription:
    'Contact MYSH to request heavy equipment rental quotes for construction, infrastructure, marine and industrial projects in Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
