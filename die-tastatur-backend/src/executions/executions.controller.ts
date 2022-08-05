import {Controller, Get} from '@nestjs/common';
import {ExecutionsService} from "./executions.service";
import {Execution} from "./execution.interface";

@Controller('executions')
export class ExecutionsController {

    constructor(private executionsService: ExecutionsService) {
    }

    @Get()
    findAll(): Array<Execution> {
        return this.executionsService.findAll();
    }

}
