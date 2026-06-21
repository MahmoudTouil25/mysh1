import { NotFoundException } from '@nestjs/common';
import { ExcelService, EquipmentRow } from '../excel/excel.service';
import { EquipmentService } from './equipment.service';

describe('EquipmentService', () => {
  const equipment: EquipmentRow[] = [
    {
      id: 1,
      name: 'Available hauler',
      brand: 'KOMATSU',
      model: 'HM400',
      year: 2016,
      categoryId: 31,
      availability: 'available',
    },
    {
      id: 2,
      name: 'Rented excavator',
      brand: 'CAT',
      model: '320',
      year: 2020,
      categoryId: 9,
      availability: 'on_rent',
    },
  ];

  let service: EquipmentService;

  beforeEach(() => {
    const excelService = {
      getEquipment: jest.fn().mockReturnValue(equipment),
    } as unknown as ExcelService;

    service = new EquipmentService(excelService);
  });

  it('returns all equipment without filters', () => {
    expect(service.findAll()).toEqual(equipment);
  });

  it('filters by category and availability', () => {
    expect(
      service.findAll({ categoryId: 31, availability: 'available' }),
    ).toEqual([equipment[0]]);
  });

  it('finds one equipment item by id', () => {
    expect(service.findOne(2)).toEqual(equipment[1]);
  });

  it('throws when an equipment item does not exist', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });
});
