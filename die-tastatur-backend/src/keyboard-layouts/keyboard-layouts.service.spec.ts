import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardLayoutsService } from './keyboard-layouts.service';

describe('KeyboardLayoutsService', () => {
  let service: KeyboardLayoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardLayoutsService],
    }).compile();

    service = module.get<KeyboardLayoutsService>(KeyboardLayoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
