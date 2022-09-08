import { Module } from '@nestjs/common';
import { KeyboardLayoutsController } from './keyboard-layouts.controller';
import { KeyboardLayoutsService } from './keyboard-layouts.service';
import {KeyboardsService} from "../keyboards/keyboards.service";
import {ExecutionsService} from "../executions/executions.service";
import {CommandsService} from "../commands/commands.service";
import {KeysetsService} from "../keysets/keysets.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

@Module({
  controllers: [KeyboardLayoutsController],
  providers: [KeyboardLayoutsService, KeyboardsService, ExecutionsService, CommandsService, KeysetsService,OperatingSystemsService, ToolsService]
})
export class KeyboardLayoutsModule {}
