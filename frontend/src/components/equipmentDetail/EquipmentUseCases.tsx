import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';

type EquipmentUseCasesProps = {
  lang: Lang;
  categoryName?: string;
  equipmentName: string;
};

export default function EquipmentUseCases({
  lang,
  categoryName,
  equipmentName,
}: EquipmentUseCasesProps) {
  const t = equipmentDetailContent[lang];

  const useCases =
    categoryName && t.useCases.byCategory[categoryName]
      ? t.useCases.byCategory[categoryName]
      : t.useCases.defaultItems;

  return (
    <section className="mt-16 rounded-[2rem] border border-[#C2C7C9]/70 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#855300]">
        {t.useCases.eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1B263B] md:text-4xl">
        {t.useCases.title}
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-7 text-[#5C677D]">
        {t.useCases.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {useCases.map((useCase) => (
          <article
            key={useCase}
            className="rounded-2xl border border-[#C2C7C9]/70 bg-[#F8F9FA] p-5"
          >
            <h3 className="text-base font-black text-[#1B263B]">
              {useCase}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-[#5C677D]">
              {lang === 'en'
                ? `${equipmentName} can support this use case depending on project requirements, site conditions and rental availability.`
                : `يمكن استخدام ${equipmentName} لهذا النوع من الأعمال حسب متطلبات المشروع وظروف الموقع وتوفر المعدة.`}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}