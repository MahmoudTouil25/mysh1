import type { Metadata } from 'next';
import type { SeoFields } from '@/types/content';

export const siteConfig = {
  name: 'MYSH Heavy Equipment Rental & Machinery Trading',
  shortName: 'MYSH',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mysh-equipment.com',
  description:
    'Heavy equipment rental and machinery trading solutions for construction, infrastructure, marine and industrial projects across Dubai and the UAE.',
};

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

type MetadataInput = SeoFields & {
  path: string;
};

export function buildMetadata({
  title,
  metaTitle,
  metaDescription,
  image,
  path,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: {
      absolute: metaTitle || title,
    },
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: metaTitle || title,
      description: metaDescription,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle || title,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}
