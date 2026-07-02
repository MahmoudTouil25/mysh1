'use client';

import ContentHero from '@/components/content/ContentHero';
import {
  localizeProject,
  projectLabels,
} from '@/i18n/contentPages';
import { useLanguage } from '@/i18n/LanguageContext';
import type { ProjectItem } from '@/types/content';
import ProjectGrid from './ProjectGrid';

type ProjectIndexPageProps = {
  projects: ProjectItem[];
};

export default function ProjectIndexPage({ projects }: ProjectIndexPageProps) {
  const { lang } = useLanguage('en');
  const labels = projectLabels[lang];
  const localizedProjects = projects.map((project) =>
    localizeProject(project, lang),
  );

  return (
    <div className="bg-[#F8F9FA]">
      <ContentHero
        eyebrow={labels.heroEyebrow}
        title={labels.heroTitle}
        description={labels.heroDescription}
        imageSrc="/project-hero-section.png"
        imageAlt="Heavy equipment working on a MYSH project site"
      />
      <ProjectGrid projects={localizedProjects} labels={labels} />
    </div>
  );
}
