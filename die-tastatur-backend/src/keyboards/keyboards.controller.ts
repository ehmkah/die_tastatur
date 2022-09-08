import {Controller, Get} from '@nestjs/common';
import {Keyboard} from "./keyboard.interface";
import {KeyboardsService} from "./keyboards.service";

@Controller('keyboards')
export class KeyboardsController {

    constructor(private keyboardsService: KeyboardsService) {
    }

    @Get()
    findAll(): Array<Keyboard> {
        return this.keyboardsService.findAll();
    }

}
