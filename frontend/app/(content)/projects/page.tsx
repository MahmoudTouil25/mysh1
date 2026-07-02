import type { Metadata } from 'next';
import ProjectIndexPage from '@/components/projects/ProjectIndexPage';
import { projects } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'projects',
  title: 'Projects',
  metaTitle: 'Projects | MYSH Heavy Equipment Rental Dubai',
  metaDescription:
    'Explore MYSH equipment rental projects supporting construction, infrastructure, mining, and industrial operations in Dubai and across the UAE.',
  image: '/project-hero-section.png',
  path: '/projects',
});

export default function Page() {
  return <ProjectIndexPage projects={projects} />;
}
