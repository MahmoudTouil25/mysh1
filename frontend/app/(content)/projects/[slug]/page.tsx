import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/content/JsonLd';
import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { projects } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, projectSchema } from '@/lib/schema';
import { findBySlug } from '@/lib/slugs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findBySlug(projects, slug);

  if (!project) {
    return {};
  }

  return buildMetadata({ ...project, path: `/projects/${project.slug}` });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = findBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((candidate) => candidate.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: project.title, url: `/projects/${project.slug}` },
        ])}
      />
      <ProjectDetailPage project={project} relatedProjects={related} />
    </>
  );
}
