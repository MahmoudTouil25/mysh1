import { Controller, Post } from '@nestjs/common';
import { ExcelService } from './excel/excel.service';

@Controller()
export class AppController {
  constructor(private readonly excelService: ExcelService) {}

  @Post('reload')
  reload() {
    this.excelService.reload();
    return { message: 'Data reloaded from Excel successfully' };
  }
}
