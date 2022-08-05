import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardsService } from './keyboards.service';

describe('KeyboardsService', () => {
  let service: KeyboardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardsService],
    }).compile();

    service = module.get<KeyboardsService>(KeyboardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
