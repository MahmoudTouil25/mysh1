import type { ProjectLabels } from '@/i18n/contentPages';
import type { ProjectItem } from '@/types/content';
import ProjectCard from './ProjectCard';

type ProjectGridProps = {
  projects: ProjectItem[];
  labels: ProjectLabels;
};

export default function ProjectGrid({ projects, labels }: ProjectGridProps) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} labels={labels} />
        ))}
      </div>
    </section>
  );
}
