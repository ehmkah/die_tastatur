import {Injectable} from '@nestjs/common';
import {Keyset} from "./keyset.interface";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";
import {KeysetDefinitions} from "./keyset-definitions";
import {ToolsDefinitions} from "../tools/tools-definitions";

@Injectable()
export class KeysetsService {

    constructor(private operatingSystemService: OperatingSystemsService,
                private toolsService: ToolsService) {
    }

    findAll(): Array<Keyset> {
        const operatingSystems = this.operatingSystemService.findAll();
        return [
            <Keyset>{
                id: '1',
                tool: this.toolsService.findByName(ToolsDefinitions.Intellij),
                operatingSystem: operatingSystems[0],
                description: 'IntelliJ Classic',
                name: KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX
            },
            <Keyset>{
                id: '2',
                tool: this.toolsService.findByName(ToolsDefinitions.Terminal),
                operatingSystem: operatingSystems[0],
                description: 'Terminal Default',
                name: KeysetDefinitions.TERMINAL_MACOSX
            }
        ];
    }

    findByName(keysetName: KeysetDefinitions) {
        return this.findAll().filter(keyset => keyset.name === keysetName)[0];
    }

}
