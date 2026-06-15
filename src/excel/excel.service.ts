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
  categoryId?: number;
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
  private readonly filePath = path.join(process.cwd(), 'data', 'mysh.xlsx');

  private categories: CategoryRow[] = [];
  private equipment: EquipmentRow[] = [];

  onModuleInit() {
    this.load();
  }

  reload(): void {
    this.load();
    this.logger.log('Excel file reloaded');
  }

  getCategories(): CategoryRow[] {
    return this.categories;
  }

  getEquipment(): EquipmentRow[] {
    return this.equipment;
  }

  private load(): void {
    if (!fs.existsSync(this.filePath)) {
      this.logger.warn(`Data file not found at ${this.filePath}. Run "npm run init" to generate it.`);
      return;
    }

    const workbook = XLSX.readFile(this.filePath);

    this.categories = XLSX.utils.sheet_to_json<CategoryRow>(workbook.Sheets['Categories']) ?? [];
    this.equipment = XLSX.utils.sheet_to_json<EquipmentRow>(workbook.Sheets['Equipment']) ?? [];

    this.logger.log(`Loaded ${this.categories.length} categories, ${this.equipment.length} equipment items`);
  }
}
