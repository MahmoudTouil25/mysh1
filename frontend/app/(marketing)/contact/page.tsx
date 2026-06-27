import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  slug: 'contact',
  title: 'Contact MYSH',
  metaTitle: 'Contact MYSH Heavy Equipment Rental Dubai',
  metaDescription:
    'Contact MYSH to request heavy equipment rental quotes for construction, infrastructure, marine and industrial projects in Dubai and the UAE.',
  image: '/images/hero-equipment.jpg',
  path: '/contact',
});

export default function Page() {
  return (
    <section className="bg-[#F8F9FA] px-4 pb-20 pt-32 text-[#1B263B]">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Request equipment rental support.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5C677D]">
          Share your project sector, required equipment, rental duration, site
          location and preferred mobilization date. The MYSH team can then
          review availability and quote options.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#F8F9FA] p-5">
            <h2 className="text-lg font-black">Rental requests</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C677D]">
              Equipment type, model preference, duration and UAE site location.
            </p>
          </div>
          <div className="rounded-2xl bg-[#F8F9FA] p-5">
            <h2 className="text-lg font-black">Project sectors</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C677D]">
              Marine, airport, infrastructure, excavation, earthmoving and road
              maintenance support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
