import type { Category, Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import EquipmentCard from './EquipmentCard';

type EquipmentGridProps = {
  lang: Lang;
  equipment: Equipment[];
  categoriesById: Map<number, Category>;
  formatCurrency: (value: number) => string;
};

export default function EquipmentGrid({
  lang,
  equipment,
  categoriesById,
  formatCurrency,
}: EquipmentGridProps) {
  const t = equipmentContent[lang];

  const getCategoryLabel = (categoryId: number): string => {
    const category = categoriesById.get(categoryId);

    if (!category) {
      return '';
    }

    return t.categories[category.name] ?? category.name;
  };

  const getAvailabilityLabel = (value: string): string => {
    return t.availability[value] ?? value;
  };

  const getConditionLabel = (value: string): string => {
    return t.condition[value] ?? value;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {equipment.map((item) => (
        <EquipmentCard
          key={item.id}
          lang={lang}
          item={item}
          categoryLabel={getCategoryLabel(item.categoryId)}
          availabilityLabel={getAvailabilityLabel(item.availability)}
          conditionLabel={getConditionLabel(item.condition)}
          formatCurrency={formatCurrency}
        />
      ))}
    </div>
  );
}