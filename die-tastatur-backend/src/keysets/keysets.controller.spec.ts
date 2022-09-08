import { Test, TestingModule } from '@nestjs/testing';
import { KeysetsController } from './keysets.controller';
import {KeysetsService} from "./keysets.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeysetController', () => {
  let controller: KeysetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeysetsController],
      providers: [KeysetsService, OperatingSystemsService, ToolsService]
    }).compile();

    controller = module.get<KeysetsController>(KeysetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
