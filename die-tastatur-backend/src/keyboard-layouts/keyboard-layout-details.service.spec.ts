import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardLayoutDetailsService } from './keyboard-layout-details.service';
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {ExecutionsService} from "../executions/executions.service";
import {KeyboardsService} from "../keyboards/keyboards.service";
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeyboardLayoutDetailsService', () => {
  let service: KeyboardLayoutDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardLayoutDetailsService, KeyboardLayoutsService, ExecutionsService, KeyboardsService, KeysetsService, CommandsService, OperatingSystemsService, ToolsService],
    }).compile();

    service = module.get<KeyboardLayoutDetailsService>(KeyboardLayoutDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
