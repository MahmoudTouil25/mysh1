import Link from 'next/link';
import type { ServiceCardContent } from '../../i18n/servicesContent';
import type { Lang } from '../../i18n/sharedContent';

type ServiceCardProps = {
  lang: Lang;
  service: ServiceCardContent;
  href?: string;
};

export default function ServiceCard({ lang, service, href }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#C2C7C9]/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,38,59,0.12)]">
      <div className="relative h-48 overflow-hidden bg-[#DEE3E5]">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <span className="absolute end-4 top-4 rounded-full bg-[#DCEEEF] px-3 py-1 text-xs font-black uppercase text-[#1B263B] shadow-sm">
          {service.badge}
        </span>
      </div>

      <div className="p-5">
        

        <h3 className="text-xl font-black leading-tight text-[#1B263B]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm font-medium leading-6 text-[#5C677D]">
          {service.description}
        </p>

        <Link
          href={href ?? '/contact'}
          className="mt-5 inline-flex items-center text-sm font-extrabold text-[#855300] transition hover:text-[#1B263B]"
        >
          {service.cta}
          <span aria-hidden="true" className="ms-2">
            {lang === 'ar' ? '←' : '→'}
          </span>
        </Link>
      </div>
    </article>
  );
}
