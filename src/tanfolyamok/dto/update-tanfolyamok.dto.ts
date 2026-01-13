import { PartialType } from '@nestjs/mapped-types';
import { CreateTanfolyamokDto } from './create-tanfolyamok.dto';

export class UpdateTanfolyamokDto extends PartialType(CreateTanfolyamokDto) {}
