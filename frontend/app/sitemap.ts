import type { MetadataRoute } from 'next';
import { blogPosts } from '@/content/blog';
import { equipmentCatalog } from '@/content/equipment';
import { events } from '@/content/events';
import { projects } from '@/content/projects';
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

  const dynamicRoutes = [
    ...services.map((item) => `/services/${item.slug}`),
    ...equipmentCatalog.map((item) => `/equipment/${item.slug}`),
    ...blogPosts.map((item) => `/blog/${item.slug}`),
    ...events.map((item) => `/events/${item.slug}`),
    ...projects.map((item) => `/projects/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
