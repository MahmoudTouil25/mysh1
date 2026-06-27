import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: '',
  title: 'MYSH Heavy Equipment Rental & Machinery Trading',
  metaTitle: 'Heavy Equipment Rental Dubai and UAE | MYSH',
  metaDescription:
    'MYSH provides heavy equipment rental and machinery trading support for construction, infrastructure, marine and industrial projects across Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/',
});

export default function Page() {
  return <HomePage lang="en" />;
}
