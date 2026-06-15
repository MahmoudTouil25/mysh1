import { Injectable, NotFoundException } from '@nestjs/common';
import { ExcelService, CategoryRow } from '../excel/excel.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly excelService: ExcelService) {}

  findAll(): CategoryRow[] {
    return this.excelService.getCategories();
  }

  findOne(id: number): CategoryRow {
    const category = this.excelService.getCategories().find((c) => c.id === id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  findChildren(parentId: number): CategoryRow[] {
    return this.excelService.getCategories().filter((c) => c.parentId === parentId);
  }
}
