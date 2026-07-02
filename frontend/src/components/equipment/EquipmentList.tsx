import type { Category, Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentContent } from '../../i18n/equipmentContent';
import EquipmentListItem from './EquipmentListItem';

type EquipmentListProps = {
  lang: Lang;
  equipment: Equipment[];
  categoriesById: Map<number, Category>;
  formatCurrency: (value: number) => string;
};

export default function EquipmentList({
  lang,
  equipment,
  categoriesById,
  formatCurrency,
}: EquipmentListProps) {
  const t = equipmentContent[lang];

  const getCategoryLabel = (categoryId: number): string => {
    const category = categoriesById.get(categoryId);

    if (!category) {
      return '';
    }

    return t.categories[category.name] ?? category.name;
  };

  const getAvailabilityLabel = (value?: string): string => {
    return value ? t.availability[value] ?? value : '';
  };

  const getConditionLabel = (value?: string): string => {
    return value ? t.condition[value] ?? value : '';
  };

  return (
    <div className="space-y-4">
      {equipment.map((item) => (
        <EquipmentListItem
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
