import {Controller, Get} from '@nestjs/common';
import {Keyset} from "./keyset.interface";
import {KeysetsService} from "./keysets.service";

@Controller('keysets')
export class KeysetsController {


    constructor(private keysetsService : KeysetsService) {
    }

    @Get()
    findAll(): Array<Keyset> {
        return this.keysetsService.findAll();
    }
}
