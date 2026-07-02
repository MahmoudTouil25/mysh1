import Image from 'next/image';
import Link from 'next/link';
import type { ProjectLabels } from '@/i18n/contentPages';
import type { ProjectItem } from '@/types/content';

type ProjectContentProps = {
  project: ProjectItem;
  relatedProjects: ProjectItem[];
  labels: ProjectLabels;
};

export default function ProjectContent({
  project,
  relatedProjects,
  labels,
}: ProjectContentProps) {
  return (
    <article className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 text-sm font-bold text-[#5C677D]">
          <Link href="/" className="hover:text-[#1B263B]">
            {labels.home}
          </Link>{' '}
          /{' '}
          <Link href="/projects" className="hover:text-[#1B263B]">
            {labels.projects}
          </Link>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <header>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
              {project.category}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5C677D]">
              {project.description}
            </p>
          </header>

          <aside className="rounded-lg border border-[#C2C7C9]/70 bg-white p-5 shadow-sm">
            <Info label={labels.location} value={project.location} />
            <Info
              label={labels.clientType}
              value={project.clientType ?? labels.fallbackClientType}
            />
            <Info
              label={labels.projectDate}
              value={formatDate(project.date, labels.dateLocale)}
            />
          </aside>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-[#DEE3E5] shadow-sm">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 1180px) 1180px, 100vw"
            className="object-cover"
          />
        </div>

        <section className="mt-10 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">{labels.equipmentUsed}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.equipmentUsed.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-[#F8F9FA] px-4 py-2 text-sm font-extrabold text-[#1B263B]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ContentBlock heading={labels.overview} body={project.content.overview} />
          <ContentBlock heading={labels.challenge} body={project.content.challenge} />
          <ContentBlock heading={labels.solution} body={project.content.solution} />
          <ContentBlock heading={labels.result} body={project.content.result} />
        </div>

        {relatedProjects.length > 0 && (
          <section className="mt-14 border-t border-[#C2C7C9] pt-8">
            <h2 className="text-2xl font-black">{labels.relatedProjects}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="rounded-lg bg-white p-4 text-sm font-extrabold leading-6 text-[#1B263B] shadow-sm transition hover:bg-[#F4D03F]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-xl bg-[#062D31] p-6 text-white md:p-8">
          <h2 className="text-2xl font-black">{labels.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/75">
            {labels.ctaDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F4D03F] px-5 text-sm font-extrabold text-[#1B263B] transition hover:brightness-95"
            >
              {labels.discussProject}
            </Link>
            <Link
              href="/equipment"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 px-5 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              {labels.requestEquipment}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#C2C7C9]/70 py-4 first:pt-0 last:border-b-0 last:pb-0">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#5C677D]">
        {label}
      </p>
      <p className="mt-2 font-black text-[#1B263B]">{value}</p>
    </div>
  );
}

function ContentBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black">{heading}</h2>
      <p className="mt-3 leading-8 text-[#5C677D]">{body}</p>
    </section>
  );
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}
