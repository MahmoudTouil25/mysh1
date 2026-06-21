import { Controller, Post, UseGuards } from '@nestjs/common';
import { ExcelService } from './excel/excel.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly excelService: ExcelService) {}

  @UseGuards(JwtAuthGuard)
  @Post('reload')
  reload() {
    this.excelService.reload();
    return { message: 'Data reloaded from Excel files successfully' };
  }
}
