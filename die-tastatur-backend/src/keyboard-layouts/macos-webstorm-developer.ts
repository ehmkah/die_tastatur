import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

export function macosxWebstormDeveloperLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let keysetTerminal = KeysetDefinitions.TERMINAL_MACOSX;
    let keysetWebstorm = KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = [Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16)];

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.IDE_RUNNING_RUN, keysetWebstorm);
    board[0][2] = keyboardLayoutsService.createKeyDetails('0_2', CommandsDefinitions.IDE_RUNNING_DEBUG, keysetWebstorm);
    board[0][3] = keyboardLayoutsService.createKeyDetails('0_3', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, keysetWebstorm);
    board[0][4] = keyboardLayoutsService.createKeyDetails('0_4', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, keysetWebstorm);
    board[0][5] = keyboardLayoutsService.createKeyDetails('0_5', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keysetWebstorm);
    board[0][6] = keyboardLayoutsService.createKeyDetails('0_6', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keysetWebstorm);
    board[0][7] = keyboardLayoutsService.createKeyDetails('0_7', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keysetWebstorm);
    board[0][8] = keyboardLayoutsService.createKeyDetails('0_8', CommandsDefinitions.IDE_DEBUG_RESUME, keysetWebstorm);
    board[0][9] = keyboardLayoutsService.createKeyDetails('0_9', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, keysetWebstorm);
    board[0][10] = keyboardLayoutsService.createKeyDetails('0_10', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keysetWebstorm);
    board[0][11] = keyboardLayoutsService.createKeyDetails('0_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[0][12] = keyboardLayoutsService.createKeyDetails('0_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[0][13] = keyboardLayoutsService.createKeyDetails('0_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[0][14] = keyboardLayoutsService.createKeyDetails('0_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[0][15] = keyboardLayoutsService.createKeyDetails('0_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, keysetWebstorm);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, keysetWebstorm);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, keysetWebstorm);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keysetWebstorm);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, keysetWebstorm);
    board[1][6] = keyboardLayoutsService.createKeyDetails('1_6', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD, keysetWebstorm);
    board[1][7] = keyboardLayoutsService.createKeyDetails('1_7', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD, keysetWebstorm);
    board[1][8] = keyboardLayoutsService.createKeyDetails('1_8', CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, keysetWebstorm);
    board[1][9] = keyboardLayoutsService.createKeyDetails('1_9', CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, keysetWebstorm);
    board[1][10] = keyboardLayoutsService.createKeyDetails('1_10', CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET, keysetWebstorm);
    board[1][11] = keyboardLayoutsService.createKeyDetails('1_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[1][12] = keyboardLayoutsService.createKeyDetails('1_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[1][13] = keyboardLayoutsService.createKeyDetails('1_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[1][14] = keyboardLayoutsService.createKeyDetails('1_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[1][15] = keyboardLayoutsService.createKeyDetails('1_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[2][0] = keyboardLayoutsService.createKeyDetails('2_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[2][1] = keyboardLayoutsService.createKeyDetails('2_1', CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS, keysetWebstorm);
    board[2][2] = keyboardLayoutsService.createKeyDetails('2_2', CommandsDefinitions.IDE_REFACTORING_COPY, keysetWebstorm);
    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.IDE_REFACTORING_MOVE, keysetWebstorm);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE, keysetWebstorm);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.IDE_REFACTORING_RENAME, keysetWebstorm);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE, keysetWebstorm);
    board[2][7] = keyboardLayoutsService.createKeyDetails('2_7', CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE, keysetWebstorm);
    board[2][8] = keyboardLayoutsService.createKeyDetails('2_8', CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE, keysetWebstorm);
    board[2][9] = keyboardLayoutsService.createKeyDetails('2_9', CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT, keysetWebstorm);
    board[2][10] = keyboardLayoutsService.createKeyDetails('2_10', CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER, keysetWebstorm);
    board[2][11] = keyboardLayoutsService.createKeyDetails('2_11', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE, keysetWebstorm);
    board[2][12] = keyboardLayoutsService.createKeyDetails('2_12', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH, keysetWebstorm);
    board[2][13] = keyboardLayoutsService.createKeyDetails('2_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[2][14] = keyboardLayoutsService.createKeyDetails('2_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[2][15] = keyboardLayoutsService.createKeyDetails('2_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[3][0] = keyboardLayoutsService.createKeyDetails('3_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][1] = keyboardLayoutsService.createKeyDetails('3_1', CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY, keysetWebstorm);
    board[3][2] = keyboardLayoutsService.createKeyDetails('3_2', CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY, keysetWebstorm);
    board[3][3] = keyboardLayoutsService.createKeyDetails('3_3', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE, keysetWebstorm);
    board[3][4] = keyboardLayoutsService.createKeyDetails('3_4', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE, keysetWebstorm);
    board[3][5] = keyboardLayoutsService.createKeyDetails('3_5', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][6] = keyboardLayoutsService.createKeyDetails('3_6', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][7] = keyboardLayoutsService.createKeyDetails('3_7', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][8] = keyboardLayoutsService.createKeyDetails('3_8', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][9] = keyboardLayoutsService.createKeyDetails('3_9', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][10] = keyboardLayoutsService.createKeyDetails('3_10', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][11] = keyboardLayoutsService.createKeyDetails('3_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][12] = keyboardLayoutsService.createKeyDetails('3_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][13] = keyboardLayoutsService.createKeyDetails('3_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][14] = keyboardLayoutsService.createKeyDetails('3_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[3][15] = keyboardLayoutsService.createKeyDetails('3_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.IDE_VCS_QUICK_POPUP, keysetWebstorm);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.COMMIT, keysetWebstorm);
    board[4][2] = keyboardLayoutsService.createKeyDetails('4_2', CommandsDefinitions.IDE_VCS_UPDATE_PROJECCT_FROM_VCS, keysetWebstorm);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][4] = keyboardLayoutsService.createKeyDetails('4_4', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][5] = keyboardLayoutsService.createKeyDetails('4_5', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][6] = keyboardLayoutsService.createKeyDetails('4_6', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][7] = keyboardLayoutsService.createKeyDetails('4_7', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][8] = keyboardLayoutsService.createKeyDetails('4_8', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][9] = keyboardLayoutsService.createKeyDetails('4_9', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][10] = keyboardLayoutsService.createKeyDetails('4_10', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][11] = keyboardLayoutsService.createKeyDetails('4_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][12] = keyboardLayoutsService.createKeyDetails('4_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][13] = keyboardLayoutsService.createKeyDetails('4_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][14] = keyboardLayoutsService.createKeyDetails('4_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[4][15] = keyboardLayoutsService.createKeyDetails('4_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.IDE_EDITING_DELETE_WORD_START, keysetWebstorm);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.IDE_EDITING_DELETE_WORD_END, keysetWebstorm);
    board[5][3] = keyboardLayoutsService.createKeyDetails('5_3', CommandsDefinitions.IDE_EDITING_DELETE_LINE, keysetWebstorm);
    board[5][4] = keyboardLayoutsService.createKeyDetails('5_4', CommandsDefinitions.IDE_EDITING_JOIN_LINES, keysetWebstorm);
    board[5][5] = keyboardLayoutsService.createKeyDetails('5_5', CommandsDefinitions.IDE_EDITING_START_NEW_LINES, keysetWebstorm);
    board[5][6] = keyboardLayoutsService.createKeyDetails('5_6', CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, keysetWebstorm);
    board[5][7] = keyboardLayoutsService.createKeyDetails('5_7', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][8] = keyboardLayoutsService.createKeyDetails('5_8', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][9] = keyboardLayoutsService.createKeyDetails('5_9', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][10] = keyboardLayoutsService.createKeyDetails('5_10', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][11] = keyboardLayoutsService.createKeyDetails('5_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][12] = keyboardLayoutsService.createKeyDetails('5_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][13] = keyboardLayoutsService.createKeyDetails('5_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][14] = keyboardLayoutsService.createKeyDetails('5_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][15] = keyboardLayoutsService.createKeyDetails('5_15', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);

    board[6][0] = keyboardLayoutsService.createKeyDetails('6_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][1] = keyboardLayoutsService.createKeyDetails('6_1', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][2] = keyboardLayoutsService.createKeyDetails('6_2', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][3] = keyboardLayoutsService.createKeyDetails('6_3', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][4] = keyboardLayoutsService.createKeyDetails('6_4', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][5] = keyboardLayoutsService.createKeyDetails('6_5', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][6] = keyboardLayoutsService.createKeyDetails('6_6', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][7] = keyboardLayoutsService.createKeyDetails('6_7', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][8] = keyboardLayoutsService.createKeyDetails('6_8', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][9] = keyboardLayoutsService.createKeyDetails('6_9', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][10] = keyboardLayoutsService.createKeyDetails('6_10', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][11] = keyboardLayoutsService.createKeyDetails('6_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][12] = keyboardLayoutsService.createKeyDetails('6_12', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][13] = keyboardLayoutsService.createKeyDetails('6_13', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][14] = keyboardLayoutsService.createKeyDetails('6_14', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[6][15] = keyboardLayoutsService.createKeyDetails('6_15', CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES, keysetWebstorm);

    board[7][0] = keyboardLayoutsService.createKeyDetails('7_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][1] = keyboardLayoutsService.createKeyDetails('7_1', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][2] = keyboardLayoutsService.createKeyDetails('7_2', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][3] = keyboardLayoutsService.createKeyDetails('7_3', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][4] = keyboardLayoutsService.createKeyDetails('7_4', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][5] = keyboardLayoutsService.createKeyDetails('7_5', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][6] = keyboardLayoutsService.createKeyDetails('7_6', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][7] = keyboardLayoutsService.createKeyDetails('7_7', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][8] = keyboardLayoutsService.createKeyDetails('7_8', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][9] = keyboardLayoutsService.createKeyDetails('7_9', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][10] = keyboardLayoutsService.createKeyDetails('7_10', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][11] = keyboardLayoutsService.createKeyDetails('7_11', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[7][12] = keyboardLayoutsService.createKeyDetails('7_12', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION, keysetWebstorm);
    board[7][13] = keyboardLayoutsService.createKeyDetails('7_13', CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP, keysetWebstorm);
    board[7][14] = keyboardLayoutsService.createKeyDetails('7_14', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK, keysetWebstorm);
    board[7][15] = keyboardLayoutsService.createKeyDetails('7_15', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD, keysetWebstorm);

    return <KeyboardLayout>{
        id: 'macos-webstorm-developer',
        keyboard,
        name: 'Empty Keyboard',
        description: 'Keyboardlayout for webstorm developers',
        keys: board
    };


}

