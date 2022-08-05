import {Injectable} from '@nestjs/common';
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {ExecutionsService} from "../executions/executions.service";

@Injectable()
export class KeyboardLayoutDetailsService {

    constructor(private keyboardLayoutsService: KeyboardLayoutsService, private executionsService: ExecutionsService) {
    }

    findAll(): Array<KeyboardLayoutDetail> {
        const executions = this.executionsService.findAll();
        return [
            <KeyboardLayoutDetail>{id: '1', x: 1, y: 1, execution: executions[0]}
        ]

    }


}
