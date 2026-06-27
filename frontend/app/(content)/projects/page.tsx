import type { Metadata } from 'next';
import ContentHero from '@/components/content/ContentHero';
import ProjectCard from '@/components/content/ProjectCard';
import { projects } from '@/content/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'projects',
  title: 'MYSH Project Support',
  metaTitle: 'Heavy Equipment Rental Project Support UAE | MYSH',
  metaDescription:
    'Explore sample MYSH project support for earthworks, road rehabilitation and industrial site preparation across Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/projects',
});

export default function Page() {
  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow="Projects"
        title="Project examples for equipment rental support."
        description="Examples of how MYSH supports UAE contractors with machinery rental planning for infrastructure, industrial and earthmoving scopes."
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
