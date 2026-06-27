import type { Metadata } from 'next';
import EquipmentListPage from '@/views/EquipmentListPage';
import { equipmentCatalog, equipmentCategories } from '@/content/equipment';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'equipment',
  title: 'Heavy Equipment Rental Fleet',
  metaTitle: 'Heavy Equipment Rental Fleet Dubai and UAE | MYSH',
  metaDescription:
    'Browse excavators, bulldozers, articulated haulers and heavy equipment available for rental across Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/equipment',
});

export default function Page() {
  return (
    <EquipmentListPage
      lang="en"
      initialEquipment={equipmentCatalog}
      initialCategories={equipmentCategories}
    />
  );
}
