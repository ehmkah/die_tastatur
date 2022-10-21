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
import {Keyboard} from "../keyboards/keyboard.interface";
import {intellijClassicLinuxExecutions} from "../executions/intellij_classic_linux";
import {Key} from "readline";
import {KeysetsService} from "../keysets/keysets.service";

@Injectable()
export class KeyboardLayoutsService {

    constructor(private keyboardsService: KeyboardsService, private executionService: ExecutionsService, private keysetService: KeysetsService) {
    }

    findAll(): Array<KeyboardLayout> {
        const keyboards = this.keyboardsService.findAll();
        return [
            macosxDefaultDevKeyboardLayout(keyboards[0], this),
            macosxWebstormKeyboardTestExecutionLayout(keyboards[0], this),
            macosxWebstormDeveloperLayout(keyboards[0], this),
            emptyKeyboardLayout(keyboards[0], this)
        ].concat(this.generateKeyboardLayoutForExecutionSet(intellijClassicLinuxExecutions(this.executionService, this.keysetService), keyboards[0]));
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
    generateKeyboardLayoutForExecutionSet(executions: Array<Execution>, keyboard: Keyboard): Array<KeyboardLayout> {
        const result: Array<KeyboardLayout> = [];
        const X_SIZE = keyboard.xSize;
        const Y_SIZE = keyboard.ySize;
        const NUMBER_OF_KEYS = X_SIZE * Y_SIZE;
        const requiredTestboards = executions.length / NUMBER_OF_KEYS;
        for (let i = 0; i < requiredTestboards; i++) {
            let keyboardLayout = <KeyboardLayout>{
                id: `testkeyboardlayout${i}.${executions[0].keyset.name}`,
                keys: new Array(Y_SIZE)
            };
            result.push(keyboardLayout);
        }

        let keyCounter = 0;
        let yCounter = 0;
        let xCounter = 0;
        for (const execution of executions) {
            const keyboardId = Math.floor(keyCounter / NUMBER_OF_KEYS);
            if (xCounter == 0) {
                result[keyboardId].keys[yCounter] = new Array(X_SIZE);
            }
            result[keyboardId].keys[yCounter][xCounter] = this.createKeyDetails(`${yCounter}{${xCounter}`, execution.command.name, execution.keyset.name);

            xCounter = xCounter + 1;
            if (xCounter == X_SIZE) {
                xCounter = 0;
                if (yCounter == Y_SIZE - 1) {
                    yCounter = 0;
                } else {
                    yCounter = yCounter + 1;
                }
            }

            keyCounter = keyCounter + 1;
        }

        return result;

    }

}
