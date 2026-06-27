import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';

type EquipmentSearchBarProps = {
  lang: Lang;
  value: string;
  onChange: (value: string) => void;
};

export default function EquipmentSearchBar({
  lang,
  value,
  onChange,
}: EquipmentSearchBarProps) {
  const t = equipmentContent[lang];

  return (
    <label className="relative block flex-1">
      <span className="sr-only">{t.search.label}</span>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.search.placeholder}
        className="
          h-12 w-full rounded-2xl border border-[#C2C7C9]
          bg-[#F8F9FA] px-4 text-sm font-semibold text-[#1B263B]
          outline-none transition placeholder:text-[#5C677D]/70
          focus:border-[#1B263B] focus:bg-white
        "
      />
    </label>
  );
}