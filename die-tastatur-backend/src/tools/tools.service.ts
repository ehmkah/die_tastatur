import {Injectable} from '@nestjs/common';
import {Tool} from "./tools.interface";
import {ToolsDefinitions} from "./tools-definitions";

@Injectable()
export class ToolsService {

    // Returns all supported tools
    findAll(): Array<Tool> {
        return [
            <Tool>{id: 'intellij', name: ToolsDefinitions.IntelliJ},
            <Tool>{id: 'webstorm', name: ToolsDefinitions.Webstorm},
            <Tool>{id: 'terminal', name: ToolsDefinitions.Terminal},
            <Tool>{id: 'vsCode', name: 'VsCode'},
            <Tool>{id: 'xcode', name: 'Xcode'},
            <Tool>{id: 'eclipse', name: 'Eclipse'}
        ];
    }

    findByName(toolName: ToolsDefinitions): Tool {
        return this.findAll().filter(tool => tool.name === toolName)[0];
    }

}
