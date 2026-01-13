import { Test, TestingModule } from '@nestjs/testing';
import { TanfolyamokController } from './tanfolyamok.controller';
import { TanfolyamokService } from './tanfolyamok.service';

describe('TanfolyamokController', () => {
  let controller: TanfolyamokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TanfolyamokController],
      providers: [TanfolyamokService],
    }).compile();

    controller = module.get<TanfolyamokController>(TanfolyamokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
