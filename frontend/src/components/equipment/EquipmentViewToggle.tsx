import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import type { ViewMode } from '../../types/equipment';

type EquipmentViewToggleProps = {
  lang: Lang;
  viewMode: ViewMode;
  onChange: (viewMode: ViewMode) => void;
};

export default function EquipmentViewToggle({
  lang,
  viewMode,
  onChange,
}: EquipmentViewToggleProps) {
  const t = equipmentContent[lang];

  return (
    <div className="inline-flex rounded-2xl border border-[#C2C7C9] bg-[#F8F9FA] p-1">
      <button
        type="button"
        aria-pressed={viewMode === 'grid'}
        onClick={() => onChange('grid')}
        className={[
          'h-9 rounded-xl px-4 text-sm font-extrabold transition',
          viewMode === 'grid'
            ? 'bg-[#1B263B] text-white'
            : 'text-[#5C677D] hover:text-[#1B263B]',
        ].join(' ')}
      >
        {t.view.grid}
      </button>

      <button
        type="button"
        aria-pressed={viewMode === 'list'}
        onClick={() => onChange('list')}
        className={[
          'h-9 rounded-xl px-4 text-sm font-extrabold transition',
          viewMode === 'list'
            ? 'bg-[#1B263B] text-white'
            : 'text-[#5C677D] hover:text-[#1B263B]',
        ].join(' ')}
      >
        {t.view.list}
      </button>
    </div>
  );
}