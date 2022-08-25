import {Injectable} from '@nestjs/common';
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeyboardsService} from "../keyboards/keyboards.service";
import {macosxDefaultDevKeyboardLayout} from "./macosx-default-dev-keyboard-layout";
import {ExecutionsService} from "../executions/executions.service";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {macosxWebstormKeyboardLayout} from "./macosx-webstorm-keyboard-layout";

@Injectable()
export class KeyboardLayoutsService {

    constructor(private keyboardsService: KeyboardsService, private executionService: ExecutionsService) {
    }

    findAll(): Array<KeyboardLayout> {
        const keyboards = this.keyboardsService.findAll();
        return [
            macosxDefaultDevKeyboardLayout(keyboards[0], this),
            macosxWebstormKeyboardLayout(keyboards[0],this)
        ];
    }

    createKeyDetails(id: string, commandName: CommandsDefinitions, keyset: KeysetDefinitions) {
        const execution = this.executionService.findByCommandIDAndKeysetId(commandName, keyset);
        return <KeyboardLayoutDetail>{id: id, execution: execution}

    }

    findById(id: string) {
        let keyboardLayouts = this.findAll();
        return keyboardLayouts.find(keyboardLayout => keyboardLayout.id === id);
    }
}
