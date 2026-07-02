import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { equipmentCatalog } from '@/content/equipment';
import { events } from '@/content/events';
import { projects } from '@/data/projects';
import { services } from '@/content/services';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '/',
    '/services',
    '/equipment',
    '/csr',
    '/contact',
    '/blog',
    '/events',
    '/projects',
  ];

  const baseRoutes = staticRoutes.map((route) => ({
    route,
    lastModified: now,
  }));

  const dynamicRoutes = [
    ...services.map((item) => ({
      route: `/services/${item.slug}`,
      lastModified: now,
    })),
    ...equipmentCatalog.map((item) => ({
      route: `/equipment/${item.slug}`,
      lastModified: now,
    })),
    ...blogPosts.map((item) => ({
      route: `/blog/${item.slug}`,
      lastModified: new Date(item.updatedAt ?? item.publishedAt),
    })),
    ...events.map((item) => ({
      route: `/events/${item.slug}`,
      lastModified: new Date(item.date),
    })),
    ...projects.map((item) => ({
      route: `/projects/${item.slug}`,
      lastModified: new Date(item.date),
    })),
  ];

  return [...baseRoutes, ...dynamicRoutes].map(({ route, lastModified }) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
