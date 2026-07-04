import type { Equipment } from '../../types/equipment';
import type { Lang } from '../../i18n/sharedContent';
import { equipmentDetailContent } from '../../i18n/equipmentDetailContent';

type EquipmentTechnicalTableProps = {
  lang: Lang;
  equipment: Equipment;
  availabilityLabel: string;
  conditionLabel: string;
  formatCurrency: (value: number) => string;
};

type TableRow = {
  key: string;
  label: string;
  value: string;
};

const hiddenExcelKeys = new Set([
  'id',
  'name',
  'categoryId',
  'images',
  'description',
]);

const knownExcelKeys = new Set([
  'brand',
  'model',
  'year',
  'condition',
  'availability',
  'dailyRate',
  'weeklyRate',
  'monthlyRate',
  'minimumRentalDays',
  'location',
  'operatingWeight',
  'enginePower',
  'Operating weight kg',
  'Engine power kW',
  'Engine power HP',
  'Payload / Load t',
  'Body/Bucket/Blade capacity',
  'Max speed km/h',
]);

function hasDisplayValue(value: unknown): boolean {
  return value !== undefined && value !== null && String(value).trim() !== '';
}

function readEquipmentValue(equipment: Equipment, key: string): unknown {
  return (equipment as Record<string, unknown>)[key];
}

function formatNumberWithSuffix(value: unknown, suffix: string): string {
  if (!hasDisplayValue(value)) {
    return '';
  }

  return `${String(value).trim()} ${suffix}`;
}

function formatCurrencyValue(
  value: unknown,
  formatCurrency: (value: number) => string,
): string {
  const numericValue = Number(value);

  return Number.isFinite(numericValue) ? formatCurrency(numericValue) : '';
}

function humanizeExcelKey(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (character) => character.toUpperCase());
}

function parseDescriptionDetails(description?: string): TableRow[] {
  if (!description?.includes(':')) {
    return [];
  }

  return description
    .split(';')
    .map((detail) => detail.trim())
    .map((detail) => {
      const separatorIndex = detail.indexOf(':');

      if (separatorIndex <= 0) {
        return null;
      }

      const label = detail.slice(0, separatorIndex).trim();
      const value = detail.slice(separatorIndex + 1).trim();

      if (!label || !value) {
        return null;
      }

      return {
        key: `description-${label}`,
        label,
        value,
      };
    })
    .filter((row): row is TableRow => row !== null);
}

function addRow(rows: TableRow[], row: TableRow): void {
  if (!hasDisplayValue(row.value)) {
    return;
  }

  rows.push(row);
}

export default function EquipmentTechnicalTable({
  lang,
  equipment,
  availabilityLabel,
  conditionLabel,
  formatCurrency,
}: EquipmentTechnicalTableProps) {
  const t = equipmentDetailContent[lang];
  const rawOperatingWeight = readEquipmentValue(equipment, 'Operating weight kg');
  const rawEnginePowerKw = readEquipmentValue(equipment, 'Engine power kW');
  const rows: TableRow[] = [];

  addRow(rows, {
    key: 'brand',
    label: t.specs.brand,
    value: equipment.brand,
  });
  addRow(rows, {
    key: 'model',
    label: t.specs.model,
    value: equipment.model,
  });
  addRow(rows, {
    key: 'year',
    label: t.specs.year,
    value: String(equipment.year),
  });
  addRow(rows, {
    key: 'condition',
    label: t.specs.condition,
    value: conditionLabel || equipment.condition || '',
  });
  addRow(rows, {
    key: 'availability',
    label: t.specs.availability,
    value: availabilityLabel || equipment.availability || '',
  });
  addRow(rows, {
    key: 'location',
    label: t.specs.location,
    value: equipment.location || '',
  });
  addRow(rows, {
    key: 'minimumRentalDays',
    label: t.specs.minimumRentalDays,
    value: formatNumberWithSuffix(equipment.minimumRentalDays, t.specs.days),
  });

  if (!hasDisplayValue(rawOperatingWeight)) {
    addRow(rows, {
      key: 'operatingWeight',
      label: t.specs.operatingWeight,
      value: formatNumberWithSuffix(equipment.operatingWeight, 't'),
    });
  }

  if (!hasDisplayValue(rawEnginePowerKw)) {
    addRow(rows, {
      key: 'enginePower',
      label: t.specs.enginePower,
      value: formatNumberWithSuffix(equipment.enginePower, 'kW'),
    });
  }

  addRow(rows, {
    key: 'Operating weight kg',
    label: t.specs.operatingWeightKg,
    value: formatNumberWithSuffix(rawOperatingWeight, 't'),
  });
  addRow(rows, {
    key: 'Engine power kW',
    label: t.specs.enginePowerKw,
    value: formatNumberWithSuffix(rawEnginePowerKw, 'kW'),
  });
  addRow(rows, {
    key: 'Engine power HP',
    label: t.specs.enginePowerHp,
    value: formatNumberWithSuffix(readEquipmentValue(equipment, 'Engine power HP'), 'HP'),
  });
  addRow(rows, {
    key: 'Payload / Load t',
    label: t.specs.payloadLoad,
    value: formatNumberWithSuffix(readEquipmentValue(equipment, 'Payload / Load t'), 't'),
  });
  addRow(rows, {
    key: 'Body/Bucket/Blade capacity',
    label: t.specs.bodyBucketBladeCapacity,
    value: String(readEquipmentValue(equipment, 'Body/Bucket/Blade capacity') ?? ''),
  });
  addRow(rows, {
    key: 'Max speed km/h',
    label: t.specs.maxSpeed,
    value: formatNumberWithSuffix(readEquipmentValue(equipment, 'Max speed km/h'), 'km/h'),
  });

  parseDescriptionDetails(equipment.description).forEach((row) => {
    addRow(rows, row);
  });

  addRow(rows, {
    key: 'dailyRate',
    label: t.specs.dailyRate,
    value: formatCurrencyValue(equipment.dailyRate, formatCurrency),
  });
  addRow(rows, {
    key: 'weeklyRate',
    label: t.specs.weeklyRate,
    value: formatCurrencyValue(equipment.weeklyRate, formatCurrency),
  });
  addRow(rows, {
    key: 'monthlyRate',
    label: t.specs.monthlyRate,
    value: formatCurrencyValue(equipment.monthlyRate, formatCurrency),
  });

  Object.entries(equipment as Record<string, unknown>).forEach(([key, value]) => {
    if (
      hiddenExcelKeys.has(key) ||
      knownExcelKeys.has(key) ||
      !hasDisplayValue(value)
    ) {
      return;
    }

    addRow(rows, {
      key,
      label: humanizeExcelKey(key),
      value: String(value),
    });
  });

  return (
    <section className="mt-5 overflow-hidden rounded-[1.75rem] border border-[#C2C7C9]/70 bg-white shadow-sm">
      <div className="border-b border-[#C2C7C9]/70 px-5 py-4">
        <h2 className="text-lg font-black tracking-[-0.02em] text-[#1B263B]">
          {t.specs.title}
        </h2>
      </div>

      {rows.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-start text-sm">
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.key}
                  className="border-b border-[#C2C7C9]/60 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="w-[44%] px-5 py-3 text-start text-xs font-black uppercase tracking-[0.08em] text-[#5C677D]"
                  >
                    {row.label}
                  </th>
                  <td className="px-5 py-3 text-sm font-extrabold text-[#1B263B]">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="px-5 py-4 text-sm font-semibold text-[#5C677D]">
          {t.specs.empty}
        </p>
      )}
    </section>
  );
}
