export const routes = {
  home: '/',
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  equipment: '/equipment',
  services: '/services',
  contact: '/contact',
} as const;
