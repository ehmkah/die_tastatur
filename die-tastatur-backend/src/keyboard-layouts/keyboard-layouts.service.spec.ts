import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardLayoutsService } from './keyboard-layouts.service';
import {KeyboardsService} from "../keyboards/keyboards.service";
import {ExecutionsService} from "../executions/executions.service";
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";
import {intellijClassicLinuxExecutions} from "../executions/intellij_classic_linux";
import exp from "constants";

describe('KeyboardLayoutsService', () => {
  let sut: KeyboardLayoutsService;
  let executionService: ExecutionsService;
  let keysetService : KeysetsService;
  let keyboardService : KeyboardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyboardLayoutsService, KeyboardsService, ExecutionsService, KeysetsService, CommandsService, OperatingSystemsService, ToolsService],
    }).compile();

    sut = module.get<KeyboardLayoutsService>(KeyboardLayoutsService);
    executionService = module.get<ExecutionsService>(ExecutionsService);
    keysetService = module.get<KeysetsService>(KeysetsService);
    keyboardService = module.get<KeyboardsService>(KeyboardsService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should generate test keyboard for one executionset', () => {
    const actual = sut.generateKeyboardLayoutForExecutionSet(intellijClassicLinuxExecutions(executionService, keysetService), keyboardService.findAll()[0]);

    expect(actual.length).toEqual(2);
    expect(actual[0].id).toEqual("testkeyboardlayout0.Intellij classic Linux");
    expect(actual[0].keys.length).toEqual(8);
    expect(actual[0].keys[0].length).toEqual(16);
    expect(actual[0].keys[0][0].execution.command.name).toEqual('ide_search_and_replace_find');
    expect(actual[0].keys[7][15].execution.command.name).toEqual('ide_usage_search_find_usage_in_file');
    expect(actual[0].name).toEqual('testkeyboardlayout0.Intellij classic Linux');
    expect(actual[1].id).toEqual("testkeyboardlayout1.Intellij classic Linux");
    expect(actual[1].keys[0][0].execution.command.name).toEqual('ide_usage_search_highlight_usage_in_file');
    expect(actual[1].keys[7][15].execution.command.name).toEqual('empty');
  });

});
