'use client';

import {
  localizeProject,
  projectLabels,
} from '@/i18n/contentPages';
import { useLanguage } from '@/i18n/LanguageContext';
import type { ProjectItem } from '@/types/content';
import ProjectContent from './ProjectContent';

type ProjectDetailPageProps = {
  project: ProjectItem;
  relatedProjects: ProjectItem[];
};

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  const { lang } = useLanguage('en');
  const labels = projectLabels[lang];

  return (
    <ProjectContent
      project={localizeProject(project, lang)}
      relatedProjects={relatedProjects.map((item) =>
        localizeProject(item, lang),
      )}
      labels={labels}
    />
  );
}
