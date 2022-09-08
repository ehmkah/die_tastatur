import { Test, TestingModule } from '@nestjs/testing';
import { KeysetsService } from './keysets.service';
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeysetService', () => {
  let service: KeysetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeysetsService, OperatingSystemsService, ToolsService],
    }).compile();

    service = module.get<KeysetsService>(KeysetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
