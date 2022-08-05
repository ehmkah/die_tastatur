import { Test, TestingModule } from '@nestjs/testing';
import { KeysetsService } from './keysets.service';

describe('KeysetService', () => {
  let service: KeysetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeysetsService],
    }).compile();

    service = module.get<KeysetsService>(KeysetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
