import {Module} from '@nestjs/common';
import {ExecutionsService} from './executions.service';
import {ExecutionsController} from './executions.controller';
import {KeysetsService} from "../keysets/keysets.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";
import {CommandsService} from "../commands/commands.service";

@Module({
    providers: [ExecutionsService, KeysetsService, OperatingSystemsService, ToolsService, CommandsService],
    controllers: [ExecutionsController]
})
export class ExecutionsModule {
}
