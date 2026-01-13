import { Test, TestingModule } from '@nestjs/testing';
import { TanfolyamokService } from './tanfolyamok.service';

describe('TanfolyamokService', () => {
  let service: TanfolyamokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TanfolyamokService],
    }).compile();

    service = module.get<TanfolyamokService>(TanfolyamokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
