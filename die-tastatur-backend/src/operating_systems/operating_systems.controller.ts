import {Controller, Get} from '@nestjs/common';
import {OperatingSystem} from "./operating_system.interface";

@Controller('operating-systems')
export class OperatingSystemsController {


    @Get()
    findAll(): Array<OperatingSystem> {
        return [<OperatingSystem>{id: '1', name: 'MacOsX'}]
    }
}
