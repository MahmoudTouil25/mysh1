import type { Metadata } from 'next';
import CsrPage from '@/components/csr/CsrPage';
import { csrContent } from '@/content/csr';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  ...csrContent,
  path: '/csr',
});

export default function Page() {
  return <CsrPage />;
}
