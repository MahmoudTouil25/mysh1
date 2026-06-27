import type { Category, Equipment } from '@/types/equipment';
import type { SeoFields } from '@/types/content';

export type EquipmentCatalogItem = Equipment &
  SeoFields & {
    categorySlug: string;
    applications: string[];
    content: {
      heading: string;
      body: string;
    }[];
  };

export const equipmentCategories: Category[] = [
  { id: 1, name: 'Excavators', slug: 'excavators' },
  { id: 2, name: 'Articulated Haulers', slug: 'articulated-haulers' },
  { id: 3, name: 'Bulldozers', slug: 'bulldozers' },
];

export const equipmentCatalog: EquipmentCatalogItem[] = [
  {
    id: 1,
    slug: 'cat-336gc-excavator',
    title: 'CAT 336GC Excavator',
    metaTitle: 'CAT 336GC Excavator Rental Dubai and UAE',
    metaDescription:
      'Rent a CAT 336GC excavator for excavation, trenching, loading and civil infrastructure works across Dubai and the UAE.',
    image: '/images/equipment/CAT-336GC.png',
    name: 'CAT 336GC Excavator',
    brand: 'CAT',
    model: '336GC',
    year: 2021,
    categoryId: 1,
    categorySlug: 'excavators',
    operatingWeight: 36,
    enginePower: 225,
    condition: 'excellent',
    availability: 'available',
    dailyRate: 1800,
    weeklyRate: 10500,
    monthlyRate: 38000,
    minimumRentalDays: 3,
    location: 'Dubai',
    images: '/images/equipment/CAT-336GC.png',
    description:
      'High-production excavator for civil works, site preparation and utility excavation.',
    applications: ['Excavation', 'Trenching', 'Loading', 'Site preparation'],
    content: [
      {
        heading: 'Excavation performance for UAE job sites',
        body: 'The CAT 336GC is suited for foundation excavation, trenching, loading and general civil construction where reliability and fuel-conscious operation matter.',
      },
      {
        heading: 'Rental fit',
        body: 'MYSH can coordinate the machine for short and medium-term requirements depending on site location, availability and operating conditions.',
      },
    ],
  },
  {
    id: 2,
    slug: 'cat-349dl-excavator',
    title: 'CAT 349DL Excavator',
    metaTitle: 'CAT 349DL Excavator Rental UAE',
    metaDescription:
      'Heavy excavator rental for bulk excavation, infrastructure, quarry support and earthmoving operations in Dubai and the UAE.',
    image: '/images/equipment/CAT-349DL.png',
    name: 'CAT 349DL Excavator',
    brand: 'CAT',
    model: '349DL',
    year: 2019,
    categoryId: 1,
    categorySlug: 'excavators',
    operatingWeight: 49,
    enginePower: 283,
    condition: 'good',
    availability: 'available',
    dailyRate: 2400,
    weeklyRate: 14500,
    monthlyRate: 52000,
    minimumRentalDays: 5,
    location: 'Abu Dhabi',
    images: '/images/equipment/CAT-349DL.png',
    description:
      'Heavy excavator for demanding excavation and earthmoving production cycles.',
    applications: ['Bulk excavation', 'Rock handling', 'Infrastructure works'],
    content: [
      {
        heading: 'Heavy-duty excavation capacity',
        body: 'The CAT 349DL supports demanding excavation scopes where reach, digging force and loading productivity are priorities.',
      },
      {
        heading: 'Infrastructure applications',
        body: 'Common rental use cases include road corridors, utility corridors, industrial platforms and major civil packages.',
      },
    ],
  },
  {
    id: 3,
    slug: 'komatsu-hm400-3r-articulated-hauler',
    title: 'KOMATSU HM400-3R Articulated Hauler',
    metaTitle: 'KOMATSU HM400-3R Articulated Hauler Rental Dubai',
    metaDescription:
      'Articulated hauler rental for earthmoving, material transport and infrastructure projects across Dubai and the UAE.',
    image: '/images/equipment/KOMATSU-HM400-3R.png',
    name: 'KOMATSU HM400-3R Articulated Hauler',
    brand: 'KOMATSU',
    model: 'HM400-3R',
    year: 2020,
    categoryId: 2,
    categorySlug: 'articulated-haulers',
    operatingWeight: 35,
    enginePower: 353,
    condition: 'excellent',
    availability: 'available',
    dailyRate: 2200,
    weeklyRate: 13200,
    monthlyRate: 48000,
    minimumRentalDays: 5,
    location: 'Dubai',
    images: '/images/equipment/KOMATSU-HM400-3R.png',
    description:
      'Articulated hauler for off-road material movement and production earthworks.',
    applications: ['Earthmoving', 'Material hauling', 'Road construction'],
    content: [
      {
        heading: 'Efficient material movement',
        body: 'The HM400-3R is suited for moving aggregate, spoil and fill across uneven job sites where rigid trucks may be less practical.',
      },
      {
        heading: 'Matched with excavators and loaders',
        body: 'The hauler can be coordinated with excavation equipment to improve production cycles on larger earthmoving projects.',
      },
    ],
  },
  {
    id: 4,
    slug: 'komatsu-d115a-bulldozer',
    title: 'KOMATSU D115A Bulldozer',
    metaTitle: 'KOMATSU D115A Bulldozer Rental UAE',
    metaDescription:
      'Bulldozer rental for grading, pushing, clearing, backfilling and site preparation work across the UAE.',
    image: '/images/equipment/KOMATSU-D115A.png',
    name: 'KOMATSU D115A Bulldozer',
    brand: 'KOMATSU',
    model: 'D115A',
    year: 2018,
    categoryId: 3,
    categorySlug: 'bulldozers',
    operatingWeight: 25,
    enginePower: 179,
    condition: 'good',
    availability: 'limited',
    dailyRate: 1700,
    weeklyRate: 9800,
    monthlyRate: 35000,
    minimumRentalDays: 4,
    location: 'Sharjah',
    images: '/images/equipment/KOMATSU-D115A.png',
    description:
      'Bulldozer for clearing, grading, backfilling and rough site preparation.',
    applications: ['Grading', 'Clearing', 'Backfilling', 'Road support'],
    content: [
      {
        heading: 'Reliable pushing and grading support',
        body: 'The D115A is a practical rental choice for land clearing, stockpile work, backfilling and rough grading before finishing operations.',
      },
      {
        heading: 'Project sectors',
        body: 'Typical projects include road maintenance, industrial plots, earthworks packages and construction site preparation.',
      },
    ],
  },
];
