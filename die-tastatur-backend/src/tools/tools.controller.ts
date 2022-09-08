import {Controller, Get} from '@nestjs/common';
import {Tool} from "./tools.interface";
import {ToolsService} from "./tools.service";

@Controller('tools')
export class ToolsController {

    constructor(private toolsService: ToolsService) {
    }

    @Get()
    findAll(): Array<Tool> {
        return this.toolsService.findAll();
    }

}
