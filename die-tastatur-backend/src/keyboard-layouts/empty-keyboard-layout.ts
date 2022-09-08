import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

export function emptyKeyboardLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let keyset = KeysetDefinitions.TERMINAL_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = [Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16)];

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][2] = keyboardLayoutsService.createKeyDetails('0_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][3] = keyboardLayoutsService.createKeyDetails('0_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][4] = keyboardLayoutsService.createKeyDetails('0_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][5] = keyboardLayoutsService.createKeyDetails('0_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][6] = keyboardLayoutsService.createKeyDetails('0_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][7] = keyboardLayoutsService.createKeyDetails('0_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][8] = keyboardLayoutsService.createKeyDetails('0_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][9] = keyboardLayoutsService.createKeyDetails('0_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][10] = keyboardLayoutsService.createKeyDetails('0_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][11] = keyboardLayoutsService.createKeyDetails('0_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][12] = keyboardLayoutsService.createKeyDetails('0_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][13] = keyboardLayoutsService.createKeyDetails('0_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][14] = keyboardLayoutsService.createKeyDetails('0_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[0][15] = keyboardLayoutsService.createKeyDetails('0_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][6] = keyboardLayoutsService.createKeyDetails('1_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][7] = keyboardLayoutsService.createKeyDetails('1_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][8] = keyboardLayoutsService.createKeyDetails('1_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][9] = keyboardLayoutsService.createKeyDetails('1_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][10] = keyboardLayoutsService.createKeyDetails('1_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][11] = keyboardLayoutsService.createKeyDetails('1_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][12] = keyboardLayoutsService.createKeyDetails('1_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][13] = keyboardLayoutsService.createKeyDetails('1_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][14] = keyboardLayoutsService.createKeyDetails('1_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[1][15] = keyboardLayoutsService.createKeyDetails('1_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[2][0] = keyboardLayoutsService.createKeyDetails('2_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][1] = keyboardLayoutsService.createKeyDetails('2_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][2] = keyboardLayoutsService.createKeyDetails('2_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][7] = keyboardLayoutsService.createKeyDetails('2_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][8] = keyboardLayoutsService.createKeyDetails('2_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][9] = keyboardLayoutsService.createKeyDetails('2_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][10] = keyboardLayoutsService.createKeyDetails('2_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][11] = keyboardLayoutsService.createKeyDetails('2_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][12] = keyboardLayoutsService.createKeyDetails('2_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][13] = keyboardLayoutsService.createKeyDetails('2_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][14] = keyboardLayoutsService.createKeyDetails('2_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[2][15] = keyboardLayoutsService.createKeyDetails('2_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[3][0] = keyboardLayoutsService.createKeyDetails('3_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][1] = keyboardLayoutsService.createKeyDetails('3_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][2] = keyboardLayoutsService.createKeyDetails('3_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][3] = keyboardLayoutsService.createKeyDetails('3_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][4] = keyboardLayoutsService.createKeyDetails('3_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][5] = keyboardLayoutsService.createKeyDetails('3_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][6] = keyboardLayoutsService.createKeyDetails('3_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][7] = keyboardLayoutsService.createKeyDetails('3_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][8] = keyboardLayoutsService.createKeyDetails('3_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][9] = keyboardLayoutsService.createKeyDetails('3_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][10] = keyboardLayoutsService.createKeyDetails('3_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][11] = keyboardLayoutsService.createKeyDetails('3_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][12] = keyboardLayoutsService.createKeyDetails('3_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][13] = keyboardLayoutsService.createKeyDetails('3_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][14] = keyboardLayoutsService.createKeyDetails('3_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[3][15] = keyboardLayoutsService.createKeyDetails('3_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][2] = keyboardLayoutsService.createKeyDetails('4_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][4] = keyboardLayoutsService.createKeyDetails('4_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][5] = keyboardLayoutsService.createKeyDetails('4_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][6] = keyboardLayoutsService.createKeyDetails('4_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][7] = keyboardLayoutsService.createKeyDetails('4_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][8] = keyboardLayoutsService.createKeyDetails('4_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][9] = keyboardLayoutsService.createKeyDetails('4_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][10] = keyboardLayoutsService.createKeyDetails('4_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][11] = keyboardLayoutsService.createKeyDetails('4_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][12] = keyboardLayoutsService.createKeyDetails('4_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][13] = keyboardLayoutsService.createKeyDetails('4_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][14] = keyboardLayoutsService.createKeyDetails('4_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[4][15] = keyboardLayoutsService.createKeyDetails('4_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][3] = keyboardLayoutsService.createKeyDetails('5_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][4] = keyboardLayoutsService.createKeyDetails('5_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][5] = keyboardLayoutsService.createKeyDetails('5_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][6] = keyboardLayoutsService.createKeyDetails('5_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][7] = keyboardLayoutsService.createKeyDetails('5_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][8] = keyboardLayoutsService.createKeyDetails('5_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][9] = keyboardLayoutsService.createKeyDetails('5_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][10] = keyboardLayoutsService.createKeyDetails('5_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][11] = keyboardLayoutsService.createKeyDetails('5_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][12] = keyboardLayoutsService.createKeyDetails('5_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][13] = keyboardLayoutsService.createKeyDetails('5_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][14] = keyboardLayoutsService.createKeyDetails('5_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[5][15] = keyboardLayoutsService.createKeyDetails('5_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[6][0] = keyboardLayoutsService.createKeyDetails('6_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][1] = keyboardLayoutsService.createKeyDetails('6_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][2] = keyboardLayoutsService.createKeyDetails('6_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][3] = keyboardLayoutsService.createKeyDetails('6_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][4] = keyboardLayoutsService.createKeyDetails('6_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][5] = keyboardLayoutsService.createKeyDetails('6_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][6] = keyboardLayoutsService.createKeyDetails('6_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][7] = keyboardLayoutsService.createKeyDetails('6_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][8] = keyboardLayoutsService.createKeyDetails('6_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][9] = keyboardLayoutsService.createKeyDetails('6_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][10] = keyboardLayoutsService.createKeyDetails('6_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][11] = keyboardLayoutsService.createKeyDetails('6_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][12] = keyboardLayoutsService.createKeyDetails('6_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][13] = keyboardLayoutsService.createKeyDetails('6_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][14] = keyboardLayoutsService.createKeyDetails('6_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[6][15] = keyboardLayoutsService.createKeyDetails('6_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    board[7][0] = keyboardLayoutsService.createKeyDetails('7_0', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][1] = keyboardLayoutsService.createKeyDetails('7_1', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][2] = keyboardLayoutsService.createKeyDetails('7_2', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][3] = keyboardLayoutsService.createKeyDetails('7_3', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][4] = keyboardLayoutsService.createKeyDetails('7_4', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][5] = keyboardLayoutsService.createKeyDetails('7_5', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][6] = keyboardLayoutsService.createKeyDetails('7_6', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][7] = keyboardLayoutsService.createKeyDetails('7_7', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][8] = keyboardLayoutsService.createKeyDetails('7_8', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][9] = keyboardLayoutsService.createKeyDetails('7_9', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][10] = keyboardLayoutsService.createKeyDetails('7_10', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][11] = keyboardLayoutsService.createKeyDetails('7_11', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][12] = keyboardLayoutsService.createKeyDetails('7_12', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][13] = keyboardLayoutsService.createKeyDetails('7_13', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][14] = keyboardLayoutsService.createKeyDetails('7_14', CommandsDefinitions.EMPTY_COMMAND, keyset);
    board[7][15] = keyboardLayoutsService.createKeyDetails('7_15', CommandsDefinitions.EMPTY_COMMAND, keyset);

    return <KeyboardLayout>{
        id: 'empty_keyboardlayout',
        keyboard,
        name: 'Empty Keyboard',
        keys: board
    };


}

