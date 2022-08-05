import {Module} from '@nestjs/common';
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {KeysetsService} from "./keysets.service";
import {ToolsService} from "../tools/tools.service";

@Module({
    providers: [OperatingSystemsService, KeysetsService, ToolsService]
})
export class KeysetsModule {

}
