import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';
import { getFirstEquipmentImage } from '../../utils/equipmentFilters';

type EquipmentMediaViewerProps = {
  lang: Lang;
  equipment: Equipment;
};

export default function EquipmentMediaViewer({
  lang,
  equipment,
}: EquipmentMediaViewerProps) {
  const t = equipmentDetailContent[lang];
  const image = getFirstEquipmentImage(equipment.images);

  return (
    <section
      aria-label={t.media.viewerLabel}
      className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#1B263B] shadow-[0_24px_70px_rgba(27,38,59,0.18)]"
    >
      <div className="relative aspect-[4/3] bg-[#DEE3E5]">
        {image ? (
          <img
            src={image}
            alt={`${t.media.imageAltPrefix} ${equipment.name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-bold text-[#5C677D]">
            {t.media.noImage}
          </div>
        )}

        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#1B263B]/55 p-4 text-white shadow-lg backdrop-blur-xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#F4D03F]">
            {t.media.viewerPlaceholder}
          </p>

          <p className="mt-1 text-sm font-medium text-white/75">
            {lang === 'en'
              ? 'This area is ready to host a 3D viewer later.'
              : 'هذه المساحة جاهزة لإضافة عارض ثلاثي الأبعاد لاحقاً.'}
          </p>
        </div>
      </div>
    </section>
  );
}