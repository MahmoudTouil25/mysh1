import { Injectable, NotFoundException } from '@nestjs/common';
import { ExcelService, EquipmentRow } from '../excel/excel.service';

@Injectable()
export class EquipmentService {
  constructor(private readonly excelService: ExcelService) {}

  findAll(filters?: { categoryId?: number; availability?: string }): EquipmentRow[] {
    let equipment = this.excelService.getEquipment();

    if (filters?.categoryId) {
      equipment = equipment.filter((e) => e.categoryId === filters.categoryId);
    }

    if (filters?.availability) {
      equipment = equipment.filter((e) => e.availability === filters.availability);
    }

    return equipment;
  }

  findOne(id: number): EquipmentRow {
    const equipment = this.excelService.getEquipment().find((e) => e.id === id);
    if (!equipment) throw new NotFoundException(`Equipment #${id} not found`);
    return equipment;
  }
}
