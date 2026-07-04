import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

export interface CategoryRow {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
}

export interface EquipmentRow {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  categoryId: number;
  operatingWeight?: number;
  enginePower?: number;
  condition?: string;
  availability?: string;
  dailyRate?: number;
  weeklyRate?: number;
  monthlyRate?: number;
  minimumRentalDays?: number;
  location?: string;
  description?: string;
  images?: string;
}

@Injectable()
export class ExcelService implements OnModuleInit {
  private readonly logger = new Logger(ExcelService.name);

  private categories: CategoryRow[] = [];
  private equipment: EquipmentRow[] = [];

  onModuleInit() {
    this.load();
  }

  reload(): void {
    this.load();
    this.logger.log('Excel files reloaded');
  }

  getCategories(): CategoryRow[] {
    return this.categories;
  }

  getEquipment(): EquipmentRow[] {
    return this.equipment;
  }

  private load(): void {
    const categoriesPath = path.join(process.cwd(), 'data', 'mysh.xlsx');
    const equipmentPath = path.join(process.cwd(), 'data', 'equipments1.xlsx');

    // Parse and validate both workbooks before replacing the active cache.
    const categories = this.loadCategories(categoriesPath);
    const equipment = this.loadEquipment(equipmentPath);

    this.warnAboutUnknownCategories(categories, equipment);

    this.categories = categories;
    this.equipment = equipment;

    this.logger.log(
      `Loaded ${categories.length} categories from ${categoriesPath}`,
    );
    this.logger.log(
      `Loaded ${equipment.length} equipment items from ${equipmentPath}`,
    );
  }

  private loadCategories(filePath: string): CategoryRow[] {
    const workbook = this.readWorkbook(filePath);
    const sheet = this.getRequiredSheet(workbook, 'Categories', filePath);

    this.validateHeaders(sheet, ['id', 'name', 'slug'], 'Categories', filePath);

    return XLSX.utils.sheet_to_json<CategoryRow>(sheet);
  }

  private loadEquipment(filePath: string): EquipmentRow[] {
    const workbook = this.readWorkbook(filePath);
    const sheet = this.getRequiredSheet(workbook, 'Equipment', filePath);

    this.validateHeaders(
      sheet,
      ['id', 'name', 'categoryId'],
      'Equipment',
      filePath,
    );

    const equipment = XLSX.utils.sheet_to_json<EquipmentRow>(sheet);
    this.validateEquipmentRows(equipment, filePath);

    return equipment;
  }

  private readWorkbook(filePath: string): XLSX.WorkBook {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Data file not found at ${filePath}`);
    }

    return XLSX.readFile(filePath);
  }

  private getRequiredSheet(
    workbook: XLSX.WorkBook,
    sheetName: string,
    filePath: string,
  ): XLSX.WorkSheet {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found in ${filePath}`);
    }

    return sheet;
  }

  private validateHeaders(
    sheet: XLSX.WorkSheet,
    requiredHeaders: string[],
    sheetName: string,
    filePath: string,
  ): void {
    const rows = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
      blankrows: false,
    });
    const headers = (rows[0] ?? []).map((header) => String(header).trim());
    const missingHeaders = requiredHeaders.filter(
      (header) => !headers.includes(header),
    );

    if (missingHeaders.length > 0) {
      throw new Error(
        `Sheet "${sheetName}" in ${filePath} is missing required columns: ${missingHeaders.join(', ')}`,
      );
    }
  }

  private validateEquipmentRows(
    equipment: EquipmentRow[],
    filePath: string,
  ): void {
    const ids = new Set<number>();

    equipment.forEach((item, index) => {
      const rowNumber = index + 2;

      if (!Number.isFinite(item.id)) {
        throw new Error(
          `Invalid equipment id at row ${rowNumber} in ${filePath}`,
        );
      }
      if (!item.name?.trim()) {
        throw new Error(
          `Missing equipment name at row ${rowNumber} in ${filePath}`,
        );
      }
      if (!Number.isFinite(item.categoryId)) {
        throw new Error(
          `Invalid equipment categoryId at row ${rowNumber} in ${filePath}`,
        );
      }
      if (ids.has(item.id)) {
        throw new Error(`Duplicate equipment id ${item.id} in ${filePath}`);
      }

      ids.add(item.id);
    });
  }

  private warnAboutUnknownCategories(
    categories: CategoryRow[],
    equipment: EquipmentRow[],
  ): void {
    const categoryIds = new Set(categories.map((category) => category.id));

    for (const item of equipment) {
      if (item.categoryId !== undefined && !categoryIds.has(item.categoryId)) {
        this.logger.warn(
          `Equipment #${item.id} references unknown categoryId ${item.categoryId}`,
        );
      }
    }
  }
}
