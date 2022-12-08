import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {emptyKeyboardLayout} from "./empty-keyboard-layout";

export function linuxIntellijDeveloperLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let keysetTerminal = KeysetDefinitions.TERMINAL_MACOSX;
    let keysetLinuxClassic = KeysetDefinitions.INTELLIJ_CLASSIC_LINUX;
    let board: Array<Array<KeyboardLayoutDetail>> = emptyKeyboardLayout(keyboard, keyboardLayoutsService).keys;

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_5, keysetLinuxClassic);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.IDE_RUNNING_RUN, keysetLinuxClassic);
    board[0][2] = keyboardLayoutsService.createKeyDetails('0_2', CommandsDefinitions.IDE_RUNNING_DEBUG, keysetLinuxClassic);
    board[0][3] = keyboardLayoutsService.createKeyDetails('0_3', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, keysetLinuxClassic);
    board[0][4] = keyboardLayoutsService.createKeyDetails('0_4', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, keysetLinuxClassic);
    board[0][5] = keyboardLayoutsService.createKeyDetails('0_5', CommandsDefinitions.IDE_DEBUG_STOP, keysetLinuxClassic);
    board[0][6] = keyboardLayoutsService.createKeyDetails('0_6', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keysetLinuxClassic);
    board[0][7] = keyboardLayoutsService.createKeyDetails('0_7', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keysetLinuxClassic);
    board[0][8] = keyboardLayoutsService.createKeyDetails('0_8', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keysetLinuxClassic);
    board[0][9] = keyboardLayoutsService.createKeyDetails('0_9', CommandsDefinitions.IDE_DEBUG_RESUME, keysetLinuxClassic);
    board[0][10] = keyboardLayoutsService.createKeyDetails('0_10', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, keysetLinuxClassic);
    board[0][11] = keyboardLayoutsService.createKeyDetails('0_11', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keysetLinuxClassic);
    board[0][15] = keyboardLayoutsService.createKeyDetails('0_15', CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW, keysetLinuxClassic);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_0', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_7, keysetLinuxClassic);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_1', CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, keysetLinuxClassic);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_2', CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, keysetLinuxClassic);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, keysetLinuxClassic);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keysetLinuxClassic);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS, keysetLinuxClassic);
    board[1][6] = keyboardLayoutsService.createKeyDetails('1_6', CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, keysetLinuxClassic);
    board[1][7] = keyboardLayoutsService.createKeyDetails('1_7', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD, keysetLinuxClassic);
    board[1][8] = keyboardLayoutsService.createKeyDetails('1_8', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD, keysetLinuxClassic);
    board[1][9] = keyboardLayoutsService.createKeyDetails('1_9', CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, keysetLinuxClassic);
    board[1][10] = keyboardLayoutsService.createKeyDetails('1_10', CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, keysetLinuxClassic);
//    board[1][11] = keyboardLayoutsService.createKeyDetails('1_11', CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET, keysetLinuxClassic);

    board[2][0] = keyboardLayoutsService.createKeyDetails('2_0', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_1, keysetLinuxClassic);
    board[2][1] = keyboardLayoutsService.createKeyDetails('2_1', CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS, keysetLinuxClassic);
    board[2][2] = keyboardLayoutsService.createKeyDetails('2_2', CommandsDefinitions.IDE_REFACTORING_COPY, keysetLinuxClassic);
    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.IDE_REFACTORING_MOVE, keysetLinuxClassic);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE, keysetLinuxClassic);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.IDE_REFACTORING_RENAME, keysetLinuxClassic);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE, keysetLinuxClassic);
    board[2][7] = keyboardLayoutsService.createKeyDetails('2_7', CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE, keysetLinuxClassic);
    board[2][8] = keyboardLayoutsService.createKeyDetails('2_8', CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE, keysetLinuxClassic);
    board[2][9] = keyboardLayoutsService.createKeyDetails('2_9', CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT, keysetLinuxClassic);
    board[2][10] = keyboardLayoutsService.createKeyDetails('2_10', CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER, keysetLinuxClassic);
    board[2][11] = keyboardLayoutsService.createKeyDetails('2_11', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE, keysetLinuxClassic);
    board[2][12] = keyboardLayoutsService.createKeyDetails('2_12', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH, keysetLinuxClassic);

    board[3][0] = keyboardLayoutsService.createKeyDetails('1_0', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_3, keysetLinuxClassic);
    board[3][1] = keyboardLayoutsService.createKeyDetails('3_1', CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY, keysetLinuxClassic);
    board[3][2] = keyboardLayoutsService.createKeyDetails('3_2', CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY, keysetLinuxClassic);
    board[3][3] = keyboardLayoutsService.createKeyDetails('3_3', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE, keysetLinuxClassic);
    board[3][4] = keyboardLayoutsService.createKeyDetails('3_4', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE, keysetLinuxClassic);

    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.IDE_VCS_QUICK_POPUP, keysetLinuxClassic);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.IDE_VCS_COMMIT_TO_VCS, keysetLinuxClassic);
    //board[4][2] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.COMMIT, keysetWebstorm);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.IDE_VCS_PUSH_TO_VCS, keysetLinuxClassic);
    board[4][4] = keyboardLayoutsService.createKeyDetails('4_4', CommandsDefinitions.IDE_VCS_UPDATE_TO_VCS, keysetLinuxClassic);

    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.EMPTY_COMMAND, keysetTerminal);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.IDE_EDITING_DELETE_WORD_START, keysetLinuxClassic);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.IDE_EDITING_DELETE_WORD_END, keysetLinuxClassic);
    board[5][3] = keyboardLayoutsService.createKeyDetails('5_3', CommandsDefinitions.IDE_EDITING_DELETE_LINE, keysetLinuxClassic);
    board[5][4] = keyboardLayoutsService.createKeyDetails('5_4', CommandsDefinitions.IDE_EDITING_JOIN_LINES, keysetLinuxClassic);
    board[5][5] = keyboardLayoutsService.createKeyDetails('5_5', CommandsDefinitions.IDE_EDITING_START_NEW_LINES, keysetLinuxClassic);
    board[5][6] = keyboardLayoutsService.createKeyDetails('5_6', CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, keysetLinuxClassic);
    board[5][7] = keyboardLayoutsService.createKeyDetails('5_7', CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD, keysetLinuxClassic);
    board[5][15] = keyboardLayoutsService.createKeyDetails('5_15', CommandsDefinitions.IDE_GENERAL_COLUMN_SELECTION_MODE, keysetLinuxClassic);

    board[6][15] = keyboardLayoutsService.createKeyDetails('6_15', CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES, keysetLinuxClassic);

    board[7][12] = keyboardLayoutsService.createKeyDetails('7_12', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION, keysetLinuxClassic);
    board[7][13] = keyboardLayoutsService.createKeyDetails('7_13', CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP, keysetLinuxClassic);
    board[7][14] = keyboardLayoutsService.createKeyDetails('7_14', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK, keysetLinuxClassic);
    board[7][15] = keyboardLayoutsService.createKeyDetails('7_15', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD, keysetLinuxClassic);

    return <KeyboardLayout>{
        id: 'Linux-intellij-developer',
        keyboard,
        name: 'Linux Intellij Developer Keyboard',
        description: 'Keyboardlayout for Intellij developers',
        keys: board
    };


}

