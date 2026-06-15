import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ExcelModule } from './excel/excel.module';
import { CategoriesModule } from './categories/categories.module';
import { EquipmentModule } from './equipment/equipment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ExcelModule,
    CategoriesModule,
    EquipmentModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
