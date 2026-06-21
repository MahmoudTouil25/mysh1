import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as XLSX from 'xlsx';
import { ExcelService } from './excel.service';

describe('ExcelService', () => {
  let dataDirectory: string;
  let cwdSpy: jest.SpyInstance<string, []>;

  beforeEach(() => {
    const rootDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'mysh-excel-'));
    dataDirectory = path.join(rootDirectory, 'data');
    fs.mkdirSync(dataDirectory);
    cwdSpy = jest.spyOn(process, 'cwd').mockReturnValue(rootDirectory);
  });

  afterEach(() => {
    cwdSpy.mockRestore();
    fs.rmSync(path.dirname(dataDirectory), { recursive: true, force: true });
  });

  it('loads categories and equipment from separate workbooks', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeEquipmentWorkbook([
      {
        id: 1,
        name: 'KOMATSU HM400-3R',
        categoryId: 31,
        brand: 'KOMATSU',
        model: 'HM400-3R',
        year: 2016,
      },
    ]);

    const service = new ExcelService();
    service.onModuleInit();

    expect(service.getCategories()).toHaveLength(1);
    expect(service.getEquipment()).toEqual([
      expect.objectContaining({
        id: 1,
        name: 'KOMATSU HM400-3R',
        categoryId: 31,
      }),
    ]);
  });

  it('throws when equipments.xlsx is missing', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);

    expect(() => new ExcelService().onModuleInit()).toThrow(
      /Data file not found.*equipments\.xlsx/,
    );
  });

  it('throws when the Equipment sheet is missing', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeWorkbook('equipments.xlsx', 'Summary', [{ count: 0 }]);

    expect(() => new ExcelService().onModuleInit()).toThrow(
      /Sheet "Equipment" not found/,
    );
  });

  it('throws when a required equipment column is missing', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeEquipmentWorkbook([{ id: 1, name: 'A machine' }]);

    expect(() => new ExcelService().onModuleInit()).toThrow(
      /missing required columns: categoryId/,
    );
  });

  it('throws when equipment ids are duplicated', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeEquipmentWorkbook([
      { id: 1, name: 'Machine A', categoryId: 31 },
      { id: 1, name: 'Machine B', categoryId: 31 },
    ]);

    expect(() => new ExcelService().onModuleInit()).toThrow(
      /Duplicate equipment id 1/,
    );
  });

  it('throws when an equipment id is invalid', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeEquipmentWorkbook([
      { id: 'not-a-number', name: 'Machine A', categoryId: 31 },
    ]);

    expect(() => new ExcelService().onModuleInit()).toThrow(
      /Invalid equipment id/,
    );
  });

  it('keeps the previous cache when reload validation fails', () => {
    writeCategoriesWorkbook([{ id: 31, name: 'Haulers', slug: 'haulers' }]);
    writeEquipmentWorkbook([{ id: 1, name: 'Machine A', categoryId: 31 }]);

    const service = new ExcelService();
    service.onModuleInit();
    writeEquipmentWorkbook([
      { id: 2, name: 'Machine B', categoryId: 31 },
      { id: 2, name: 'Machine C', categoryId: 31 },
    ]);

    expect(() => service.reload()).toThrow(/Duplicate equipment id 2/);
    expect(service.getEquipment()).toEqual([
      expect.objectContaining({ id: 1, name: 'Machine A' }),
    ]);
  });

  function writeCategoriesWorkbook(rows: Record<string, unknown>[]): void {
    writeWorkbook('mysh.xlsx', 'Categories', rows);
  }

  function writeEquipmentWorkbook(rows: Record<string, unknown>[]): void {
    writeWorkbook('equipments.xlsx', 'Equipment', rows);
  }

  function writeWorkbook(
    fileName: string,
    sheetName: string,
    rows: Record<string, unknown>[],
  ): void {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(workbook, sheet, sheetName);
    XLSX.writeFile(workbook, path.join(dataDirectory, fileName));
  }
});
