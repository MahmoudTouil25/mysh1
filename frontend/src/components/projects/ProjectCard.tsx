import Image from 'next/image';
import Link from 'next/link';
import type { ProjectLabels } from '@/i18n/contentPages';
import type { ProjectItem } from '@/types/content';

type ProjectCardProps = {
  project: ProjectItem;
  labels: ProjectLabels;
};

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#C2C7C9]/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,38,59,0.12)]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-56 bg-[#DEE3E5]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#855300]">
          {project.category}
        </p>
        <h2 className="mt-4 text-xl font-black leading-tight text-[#1B263B]">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-[#855300]"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5C677D]">
          {project.excerpt}
        </p>
        <p className="mt-5 text-sm font-extrabold text-[#1B263B]">
          {project.location} / {formatDate(project.date, labels.dateLocale)}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1B263B] px-5 text-sm font-extrabold text-white transition hover:bg-[#062D31]"
        >
          {labels.viewProject}
        </Link>
      </div>
    </article>
  );
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
  }).format(new Date(value));
}
