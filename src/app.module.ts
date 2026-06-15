import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExcelModule } from './excel/excel.module';
import { CategoriesModule } from './categories/categories.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [ExcelModule, CategoriesModule, EquipmentModule],
  controllers: [AppController],
})
export class AppModule {}
