import { Injectable } from '@nestjs/common';
import { CreateTanfolyamokDto } from './dto/create-tanfolyamok.dto';
import { UpdateTanfolyamokDto } from './dto/update-tanfolyamok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TanfolyamokService {
  constructor (private prisma: PrismaService){}
  create(createTanfolyamokDto: CreateTanfolyamokDto) {
    return this.prisma.tanfolyamok.create({data: createTanfolyamokDto});
  }

  findAll() {
    return this.prisma.tanfolyamok.findMany();
  }

  findOne(id: number) {
    return this.prisma.tanfolyamok.findUnique({where: {id}});
  }

  update(id: number, updateTanfolyamokDto: UpdateTanfolyamokDto) {
    return this.prisma.tanfolyamok.update({where: {id}, data: updateTanfolyamokDto});
  }

  remove(id: number) {
    return this.prisma.tanfolyamok.delete({where: {id}});
  }
}
