import Image from 'next/image';
import Link from 'next/link';
import type { ProjectItem } from '@/types/content';

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,38,59,0.12)]">
      <div className="relative h-52 bg-[#DEE3E5]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#855300]">
          {project.sector}
        </p>
        <h2 className="mt-3 text-xl font-black leading-tight text-[#1B263B]">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5C677D]">
          {project.excerpt}
        </p>
        <p className="mt-5 text-sm font-extrabold text-[#1B263B]">
          {project.location} · {project.completion}
        </p>
      </div>
    </article>
  );
}
