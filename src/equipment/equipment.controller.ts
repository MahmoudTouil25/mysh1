import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { EquipmentService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly service: EquipmentService) {}

  @Get()
  findAll(
    @Query('categoryId') categoryId?: string,
    @Query('availability') availability?: string,
  ) {
    return this.service.findAll({
      categoryId: categoryId ? parseInt(categoryId) : undefined,
      availability,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
