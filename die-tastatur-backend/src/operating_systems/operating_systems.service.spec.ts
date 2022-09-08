import { Test, TestingModule } from '@nestjs/testing';
import { OperatingSystemsService } from './operating_systems.service';

describe('OperatingSystemsService', () => {
  let service: OperatingSystemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperatingSystemsService],
    }).compile();

    service = module.get<OperatingSystemsService>(OperatingSystemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
