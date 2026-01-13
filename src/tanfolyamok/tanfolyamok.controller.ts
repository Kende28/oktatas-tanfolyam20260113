import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TanfolyamokService } from './tanfolyamok.service';
import { CreateTanfolyamokDto } from './dto/create-tanfolyamok.dto';
import { UpdateTanfolyamokDto } from './dto/update-tanfolyamok.dto';

@Controller('tanfolyamok')
export class TanfolyamokController {
  constructor(private readonly tanfolyamokService: TanfolyamokService) {}

  @Post()
  create(@Body() createTanfolyamokDto: CreateTanfolyamokDto) {
    return this.tanfolyamokService.create(createTanfolyamokDto);
  }

  @Get()
  findAll() {
    return this.tanfolyamokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tanfolyamokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTanfolyamokDto: UpdateTanfolyamokDto) {
    return this.tanfolyamokService.update(+id, updateTanfolyamokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tanfolyamokService.remove(+id);
  }
}
