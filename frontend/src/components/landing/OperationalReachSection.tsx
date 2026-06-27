import type { Lang } from '../../i18n/sharedContent';
import { landingContent } from '../../i18n/landingContent';

type OperationalReachSectionProps = {
  lang: Lang;
};

export default function OperationalReachSection({
  lang,
}: OperationalReachSectionProps) {
  const t = landingContent[lang];

  return (
    <section id="about" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
            {t.reach.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#1B263B] md:text-5xl">
            {t.reach.title}
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#5C677D]">
            {t.reach.description}
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#C2C7C9]/70 bg-[#F8F9FA] p-5 shadow-[0_20px_50px_rgba(27,38,59,0.08)] md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {t.reach.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-black text-[#1B263B]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5C677D]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl bg-[#1B263B] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4D03F]">
              MYSH Operations
            </p>
            <p className="mt-3 text-base leading-7 text-white/80">
              {lang === 'en'
                ? 'Equipment rental support for contractors, project managers and industrial operators needing reliable machinery access.'
                : 'دعم تأجير المعدات للمقاولين ومديري المشاريع والمشغلين الصناعيين الذين يحتاجون إلى وصول موثوق للمعدات.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}