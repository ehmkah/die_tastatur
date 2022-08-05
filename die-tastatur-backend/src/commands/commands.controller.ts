import {Controller, Get} from '@nestjs/common';
import {CommandsService} from "./commands.service";
import {Command} from "./command.interface";

@Controller('commands')
export class CommandsController {

    constructor(private commandsService: CommandsService) {
    }

    @Get()
    findAll(): Array<Command> {
        return this.commandsService.findAll();
    }

}
