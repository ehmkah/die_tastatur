import {Injectable} from '@nestjs/common';
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeyboardsService} from "../keyboards/keyboards.service";
import {macosxDefaultDevKeyboardLayout} from "./macosx-default-dev-keyboard-layout";
import {ExecutionsService} from "../executions/executions.service";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {macosxWebstormKeyboardTestExecutionLayout} from "./macosx-webstorm-keyboard-test-execution-layout";
import {emptyKeyboardLayout} from "./empty-keyboard-layout";
import {macosxWebstormDeveloperLayout} from "./macos-webstorm-developer";
import {Execution} from "../executions/execution.interface";

@Injectable()
export class KeyboardLayoutsService {

    constructor(private keyboardsService: KeyboardsService, private executionService: ExecutionsService) {
    }

    findAll(): Array<KeyboardLayout> {
        const keyboards = this.keyboardsService.findAll();
        return [
            macosxDefaultDevKeyboardLayout(keyboards[0], this),
            macosxWebstormKeyboardTestExecutionLayout(keyboards[0], this),
            macosxWebstormDeveloperLayout(keyboards[0], this),
            emptyKeyboardLayout(keyboards[0], this)
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

    /**
     * Generates test keyboardlayout for all executions so they can be tested without manually mapping them to a real layout.
     */
    generateKeyboardLayoutForExecutionSet(executions: Array<Execution>): Array<KeyboardLayout> {
        const result: Array<KeyboardLayout> = [];
        const requiredTestboards = executions.length / 128;
        for (let i = 0; i < requiredTestboards; i++) {
            let keyboardLayout1 = <KeyboardLayout>{id: `testkeyboardlayout${i}.${executions[0].keyset.name}` };
            result.push(keyboardLayout1);
        }
        return result;
    }
}
