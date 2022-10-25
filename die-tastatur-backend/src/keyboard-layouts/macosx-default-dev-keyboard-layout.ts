import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {emptyKeyboardLayout} from "./empty-keyboard-layout";

export function macosxDefaultDevKeyboardLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let intelliJClassicKeyset = KeysetDefinitions.WEBSTORM_CLASSIC_MACOSX;
    let terminalDefaultKeyset = KeysetDefinitions.TERMINAL_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = emptyKeyboardLayout(keyboard, keyboardLayoutsService).keys;

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.JUMP_TO_GIT_VIEW, intelliJClassicKeyset);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.OPEN_COMMIT_DIALOG, intelliJClassicKeyset);
    board[0][2] = keyboardLayoutsService.createKeyDetails('0_2', CommandsDefinitions.OPEN_COMMIT_DIALOG, intelliJClassicKeyset);
    board[0][3] = keyboardLayoutsService.createKeyDetails('0_3', CommandsDefinitions.COMMIT, intelliJClassicKeyset);
    board[0][4] = keyboardLayoutsService.createKeyDetails('0_4', CommandsDefinitions.COMMIT, intelliJClassicKeyset);
    board[0][5] = keyboardLayoutsService.createKeyDetails('0_5', CommandsDefinitions.PUSH_1, intelliJClassicKeyset);
    board[0][6] = keyboardLayoutsService.createKeyDetails('0_6', CommandsDefinitions.PUSH_1, intelliJClassicKeyset);
    board[0][7] = keyboardLayoutsService.createKeyDetails('0_7', CommandsDefinitions.GIT_COMMIT_AND_PUSH, intelliJClassicKeyset);
    board[0][8] = keyboardLayoutsService.createKeyDetails('0_8', CommandsDefinitions.GIT_COMMIT_AND_PUSH, intelliJClassicKeyset);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_0', CommandsDefinitions.GIT_FETCH, terminalDefaultKeyset);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_1', CommandsDefinitions.GIT_PULL, terminalDefaultKeyset);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_2', CommandsDefinitions.GIT_MERGE_MASTER, terminalDefaultKeyset);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.GIT_MERGE_DEVELOP, terminalDefaultKeyset);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.GIT_CHECKOUT_MASTER, terminalDefaultKeyset);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.GIT_CHECKOUT_DEVELOP, terminalDefaultKeyset);
    board[1][6] = keyboardLayoutsService.createKeyDetails('1_6', CommandsDefinitions.GIT_CHECKOUT_LAST, terminalDefaultKeyset);
    board[1][7] = keyboardLayoutsService.createKeyDetails('1_7', CommandsDefinitions.GIT_CREATE_AND_CHECKOUT_NEW_BRANCH, terminalDefaultKeyset);
    board[1][8] = keyboardLayoutsService.createKeyDetails('1_8', CommandsDefinitions.GIT_CHECKOUT, terminalDefaultKeyset);
    board[1][9] = keyboardLayoutsService.createKeyDetails('1_9', CommandsDefinitions.GIT_PUSH_ORIGIN_HEAD, terminalDefaultKeyset);
    board[1][10] = keyboardLayoutsService.createKeyDetails('1_10', CommandsDefinitions.GIT_PUSH_TAGS, terminalDefaultKeyset);
    board[1][11] = keyboardLayoutsService.createKeyDetails('1_11', CommandsDefinitions.GIT_UNDO_COMMIT, terminalDefaultKeyset);
    board[1][12] = keyboardLayoutsService.createKeyDetails('1_12', CommandsDefinitions.GIT_RESET, terminalDefaultKeyset);
    board[1][13] = keyboardLayoutsService.createKeyDetails('1_13', CommandsDefinitions.GIT_DELETE_BRANCH, terminalDefaultKeyset);

    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.SSH_AGENT_START, terminalDefaultKeyset);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.SSH_AGENT_START, terminalDefaultKeyset);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.SSH_AGENT_ADD_KEY, terminalDefaultKeyset);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.SSH_AGENT_ADD_KEY, terminalDefaultKeyset);
    board[3][0] = keyboardLayoutsService.createKeyDetails('3_0', CommandsDefinitions.GRADLE_RELOAD_CHANGES, intelliJClassicKeyset);

    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.IDE_RUNNING_RUN, intelliJClassicKeyset);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.IDE_RUNNING_DEBUG, intelliJClassicKeyset);
    board[4][2] = keyboardLayoutsService.createKeyDetails('4_2', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, intelliJClassicKeyset);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, intelliJClassicKeyset);

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
        id: 'maxos_default_dev',
        keyboard,
        name: 'Maxos Default Dev',
        keys: board
    };


}

