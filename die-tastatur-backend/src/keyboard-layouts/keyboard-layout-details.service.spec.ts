import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardLayoutDetailsService } from './keyboard-layout-details.service';

describe('KeyboardLayoutDetailsService', () => {
  let service: KeyboardLayoutDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardLayoutDetailsService],
    }).compile();

    service = module.get<KeyboardLayoutDetailsService>(KeyboardLayoutDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
