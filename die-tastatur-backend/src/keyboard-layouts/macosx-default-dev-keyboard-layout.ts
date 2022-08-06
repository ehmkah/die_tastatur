import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

export function macosxDefaultDevKeyboardLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let intelliJClassicKeyset = KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX;
    let terminalDefaultKeyset = KeysetDefinitions.TERMINAL_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = [Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16)];

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.RERUN_LAST, intelliJClassicKeyset);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, intelliJClassicKeyset);
    board[1][0] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.GIT_FETCH, terminalDefaultKeyset);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.GIT_CHECKOUT_MASTER, terminalDefaultKeyset);
    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.DOCKER_LS, terminalDefaultKeyset);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.DOCKER_STOP, terminalDefaultKeyset);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.DOCKER_LOGS, terminalDefaultKeyset);
    board[5][9] = keyboardLayoutsService.createKeyDetails('5_9', CommandsDefinitions.DOCKER_COMPOSE_UP, terminalDefaultKeyset);
    board[6][0] = keyboardLayoutsService.createKeyDetails('6_0', CommandsDefinitions.KUBECTL_GET_PODS, terminalDefaultKeyset);
    board[6][1] = keyboardLayoutsService.createKeyDetails('6_1', CommandsDefinitions.KUBECTL_LOGS, terminalDefaultKeyset);
    board[6][2] = keyboardLayoutsService.createKeyDetails('6_2', CommandsDefinitions.KUBENS, terminalDefaultKeyset);
    board[6][3] = keyboardLayoutsService.createKeyDetails('6_3', CommandsDefinitions.KUBECTX, terminalDefaultKeyset);

    return <KeyboardLayout>{
        id: '2',
        keyboard,
        name: 'Linux Default Dev',
        keys: board
    };


}

