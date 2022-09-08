import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionsController } from './executions.controller';
import {ExecutionsService} from "./executions.service";
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('ExecutionsController', () => {
  let controller: ExecutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecutionsController],
      providers: [ExecutionsService, KeysetsService, CommandsService, OperatingSystemsService, ToolsService]
    }).compile();

    controller = module.get<ExecutionsController>(ExecutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
