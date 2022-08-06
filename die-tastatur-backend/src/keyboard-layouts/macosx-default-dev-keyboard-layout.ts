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

    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, intelliJClassicKeyset);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_0', CommandsDefinitions.GIT_FETCH, terminalDefaultKeyset);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_1', CommandsDefinitions.GIT_PULL, terminalDefaultKeyset);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_2', CommandsDefinitions.GIT_MERGE_MASTER, terminalDefaultKeyset);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.GIT_MERGE_DEVELOP, terminalDefaultKeyset);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.GIT_CHECKOUT_MASTER, terminalDefaultKeyset);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.GIT_CHECKOUT_DEVELOP, terminalDefaultKeyset);

    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.SSH_AGENT_START, terminalDefaultKeyset);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.SSH_AGENT_START, terminalDefaultKeyset);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.SSH_AGENT_ADD_KEY, terminalDefaultKeyset);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.SSH_AGENT_ADD_KEY, terminalDefaultKeyset);
    board[3][0] = keyboardLayoutsService.createKeyDetails('3_0', CommandsDefinitions.GRADLE_RELOAD_CHANGES, intelliJClassicKeyset);
    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.RUN_LAST, intelliJClassicKeyset);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.DEBUG_LAST, intelliJClassicKeyset);
    board[4][2] = keyboardLayoutsService.createKeyDetails('4_2', CommandsDefinitions.SELECT_RUN, intelliJClassicKeyset);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.SELECT_DEBUG, intelliJClassicKeyset);
    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.DOCKER_LS, terminalDefaultKeyset);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.DOCKER_STOP, terminalDefaultKeyset);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.DOCKER_LOGS, terminalDefaultKeyset);
    board[5][7] = keyboardLayoutsService.createKeyDetails('5_7', CommandsDefinitions.DOCKER_COMPOSE_DOWN, terminalDefaultKeyset);
    board[5][8] = keyboardLayoutsService.createKeyDetails('5_8', CommandsDefinitions.DOCKER_COMPOSE_PULL, terminalDefaultKeyset);
    board[5][9] = keyboardLayoutsService.createKeyDetails('5_9', CommandsDefinitions.DOCKER_COMPOSE_UP, terminalDefaultKeyset);
    board[5][14] = keyboardLayoutsService.createKeyDetails('5_14', CommandsDefinitions.YES, terminalDefaultKeyset);
    board[5][15] = keyboardLayoutsService.createKeyDetails('5_15', CommandsDefinitions.NO, terminalDefaultKeyset);
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

