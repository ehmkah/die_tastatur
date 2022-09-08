import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandsController } from './commands/commands.controller';
import { CommandsModule } from './commands/commands.module';
import {CommandsService} from "./commands/commands.service";
import { ToolsService } from './tools/tools.service';
import { ToolsController } from './tools/tools.controller';
import { OperatingSystemsController } from './operating_systems/operating_systems.controller';
import { OperatingSystemsService } from './operating_systems/operating_systems.service';
import { KeysetsService } from './keysets/keysets.service';
import { KeysetsController } from './keysets/keysets.controller';
import { KeysetsModule } from './keysets/keysets.module';
import { ExecutionsModule } from './executions/executions.module';
import { KeyboardsModule } from './keyboards/keyboards.module';
import { KeyboardLayoutsModule } from './keyboard-layouts/keyboard-layouts.module';

@Module({
  imports: [CommandsModule, KeysetsModule, ExecutionsModule, KeyboardsModule, KeyboardLayoutsModule],
  controllers: [AppController, CommandsController, ToolsController, OperatingSystemsController, KeysetsController],
  providers: [AppService, CommandsService, ToolsService, OperatingSystemsService, KeysetsService],
})
export class AppModule {}
