import type { BlogPost, EventItem, ProjectItem, SeoFields } from '@/types/content';
import type { Service } from '@/types/service';
import { absoluteUrl, siteConfig } from './seo';

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl('/images/hero-equipment.jpg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates'],
    makesOffer: {
      '@type': 'OfferCatalog',
      name: 'Heavy equipment rental and machinery trading',
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
    areaServed: 'United Arab Emirates',
    image: absoluteUrl(service.image),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author ?? siteConfig.shortName,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  };
}

export function eventSchema(event: EventItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.metaDescription,
    image: absoluteUrl(event.image),
    startDate: event.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AE',
      },
    },
  };
}

export function projectSchema(project: ProjectItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.metaDescription,
    image: absoluteUrl(project.image),
    dateCreated: project.date,
    locationCreated: project.location,
    about: project.category,
    provider: {
      '@type': 'Organization',
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  };
}

export function productSchema(item: SeoFields & { brand?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.title,
    description: item.metaDescription,
    image: absoluteUrl(item.image),
    brand: item.brand
      ? {
          '@type': 'Brand',
          name: item.brand,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AED',
      url: absoluteUrl(`/equipment/${item.slug}`),
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}
