import { Module } from '@nestjs/common';
import { TanfolyamokService } from './tanfolyamok.service';
import { TanfolyamokController } from './tanfolyamok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TanfolyamokController],
  providers: [TanfolyamokService, PrismaService],
})
export class TanfolyamokModule {}
