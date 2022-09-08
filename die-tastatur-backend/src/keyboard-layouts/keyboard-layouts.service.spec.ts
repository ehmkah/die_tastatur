import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardLayoutsService } from './keyboard-layouts.service';
import {KeyboardsService} from "../keyboards/keyboards.service";
import {ExecutionsService} from "../executions/executions.service";
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeyboardLayoutsService', () => {
  let service: KeyboardLayoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardLayoutsService, KeyboardsService, ExecutionsService, KeysetsService, CommandsService, OperatingSystemsService, ToolsService],
    }).compile();

    service = module.get<KeyboardLayoutsService>(KeyboardLayoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
