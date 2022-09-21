import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

export function macosxWebstormKeyboardTestExecutionLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let keyset = KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = [Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16)];

    board[0][0] = keyboardLayoutsService.createKeyDetails('0_0', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset);
    board[0][1] = keyboardLayoutsService.createKeyDetails('0_1', CommandsDefinitions.JUMP_TO_GIT_VIEW, keyset);
    board[0][2] = keyboardLayoutsService.createKeyDetails('0_2', CommandsDefinitions.OPEN_COMMIT_DIALOG, keyset);
    board[0][3] = keyboardLayoutsService.createKeyDetails('0_3', CommandsDefinitions.COMMIT, keyset);
    board[0][4] = keyboardLayoutsService.createKeyDetails('0_4', CommandsDefinitions.PUSH_1, keyset);
    board[0][5] = keyboardLayoutsService.createKeyDetails('0_5', CommandsDefinitions.GIT_COMMIT_AND_PUSH, keyset);
    board[0][6] = keyboardLayoutsService.createKeyDetails('0_6', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keyset);
    board[0][7] = keyboardLayoutsService.createKeyDetails('0_7', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keyset);
    board[0][8] = keyboardLayoutsService.createKeyDetails('0_8', CommandsDefinitions.IDE_DEBUG_SMART_STEP_INTO, keyset);
    board[0][9] = keyboardLayoutsService.createKeyDetails('0_9', CommandsDefinitions.IDE_DEBUG_STEP_OUT, keyset);
    board[0][10] = keyboardLayoutsService.createKeyDetails('0_10', CommandsDefinitions.IDE_DEBUG_RUN_TO_CURSOR, keyset);
    board[0][11] = keyboardLayoutsService.createKeyDetails('0_11', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keyset);
    board[0][12] = keyboardLayoutsService.createKeyDetails('0_12', CommandsDefinitions.IDE_DEBUG_RESUME, keyset);
    board[0][13] = keyboardLayoutsService.createKeyDetails('0_13', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, keyset);
    board[0][14] = keyboardLayoutsService.createKeyDetails('0_14', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keyset);
    board[0][15] = keyboardLayoutsService.createKeyDetails('0_15', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keyset);

    board[1][0] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset);
    board[1][1] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset);
    board[1][2] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset);
    board[1][3] = keyboardLayoutsService.createKeyDetails('1_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset);
    board[1][4] = keyboardLayoutsService.createKeyDetails('1_4', CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, keyset);
    board[1][5] = keyboardLayoutsService.createKeyDetails('1_5', CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, keyset);
    board[1][6] = keyboardLayoutsService.createKeyDetails('1_6', CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, keyset);
    board[1][7] = keyboardLayoutsService.createKeyDetails('1_7', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_EDITOR_TAB, keyset);
    board[1][8] = keyboardLayoutsService.createKeyDetails('1_8', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_EDITOR_TAB, keyset);
    board[1][9] = keyboardLayoutsService.createKeyDetails('1_9', CommandsDefinitions.IDE_NAVIGATION__GO_BACK_TO_PREVIOUS_TOOL_WINDOW, keyset);
    board[1][10] = keyboardLayoutsService.createKeyDetails('1_10', CommandsDefinitions.IDE_NAVIGATION_GO_TO_EDITOR, keyset);
    board[1][11] = keyboardLayoutsService.createKeyDetails('1_11', CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, keyset);
    board[1][12] = keyboardLayoutsService.createKeyDetails('1_12', CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP, keyset);
    board[1][13] = keyboardLayoutsService.createKeyDetails('1_13', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK, keyset);
    board[1][14] = keyboardLayoutsService.createKeyDetails('1_14', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD, keyset);
    board[1][15] = keyboardLayoutsService.createKeyDetails('1_15', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION, keyset);

    board[2][0] = keyboardLayoutsService.createKeyDetails('2_0', CommandsDefinitions.IDE_NAVIGATION_OPEN_QUICK_DEFINITION_LOOKUP, keyset);
    board[2][1] = keyboardLayoutsService.createKeyDetails('2_1', CommandsDefinitions.IDE_NAVIGATION_GOTO_TYPE_DEFINITION, keyset);
    board[2][2] = keyboardLayoutsService.createKeyDetails('2_2', CommandsDefinitions.IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS, keyset);
    board[2][3] = keyboardLayoutsService.createKeyDetails('2_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD, keyset);
    board[2][4] = keyboardLayoutsService.createKeyDetails('2_4', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD, keyset);
    board[2][5] = keyboardLayoutsService.createKeyDetails('2_5', CommandsDefinitions.IDE_NAVIGATION_MOVE_CODE_BLOCK_END, keyset);
    board[2][6] = keyboardLayoutsService.createKeyDetails('2_6', CommandsDefinitions.IDE_NAVIGATION_MOVE_CODEBLOCK_START, keyset);
    board[2][7] = keyboardLayoutsService.createKeyDetails('2_7', CommandsDefinitions.IDE_NAVIGATION_MOVE_CARET_MATCHING_BRACE, keyset);
    board[2][8] = keyboardLayoutsService.createKeyDetails('2_8', CommandsDefinitions.IDE_NAVIGATION_FILE_STRUCTURE_PIOPUP, keyset);
    board[2][9] = keyboardLayoutsService.createKeyDetails('2_9', CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY, keyset);
    board[2][10] = keyboardLayoutsService.createKeyDetails('2_10', CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY, keyset);
    board[2][11] = keyboardLayoutsService.createKeyDetails('2_11', CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, keyset);
    board[2][12] = keyboardLayoutsService.createKeyDetails('2_12', CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, keyset);
    board[2][13] = keyboardLayoutsService.createKeyDetails('2_13', CommandsDefinitions.IDE_NAVIGATION_JUMP_TO_SOURCE, keyset);
    board[2][14] = keyboardLayoutsService.createKeyDetails('2_14', CommandsDefinitions.IDE_NAVIGATION__JUMP_TO_NAVIGATION_BAR, keyset);
    board[2][15] = keyboardLayoutsService.createKeyDetails('2_15', CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOOMARI, keyset);

    board[3][0] = keyboardLayoutsService.createKeyDetails('3_0', CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOKMARK_WITH_MNEMOCONIC, keyset);
    board[3][1] = keyboardLayoutsService.createKeyDetails('3_1', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_0, keyset);
    board[3][2] = keyboardLayoutsService.createKeyDetails('3_2', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END, keyset);
    board[3][3] = keyboardLayoutsService.createKeyDetails('3_3', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START, keyset);
    board[3][4] = keyboardLayoutsService.createKeyDetails('3_4', CommandsDefinitions.IDE_EDITING_DELETE_WORD_END, keyset);
    board[3][5] = keyboardLayoutsService.createKeyDetails('3_5', CommandsDefinitions.IDE_EDITING_DELETE_WORD_START, keyset);
    board[3][6] = keyboardLayoutsService.createKeyDetails('3_6', CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK, keyset);
    board[3][7] = keyboardLayoutsService.createKeyDetails('3_7', CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK, keyset);
    board[3][8] = keyboardLayoutsService.createKeyDetails('3_8', CommandsDefinitions.IDE_EDITING_EXPAND_ALL, keyset);
    board[3][9] = keyboardLayoutsService.createKeyDetails('3_9', CommandsDefinitions.IDE_EDITING_COOLAPSE_ALL, keyset);
    board[3][10] = keyboardLayoutsService.createKeyDetails('3_10', CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB, keyset);
    board[3][11] = keyboardLayoutsService.createKeyDetails('3_11', CommandsDefinitions.IDE_NAVIGATION_SHOW_BOOKMARK, keyset);
    board[3][12] = keyboardLayoutsService.createKeyDetails('3_12', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND, keyset);
    board[3][13] = keyboardLayoutsService.createKeyDetails('3_13', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE, keyset);
    board[3][14] = keyboardLayoutsService.createKeyDetails('3_14', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_NEXT, keyset);
    board[3][15] = keyboardLayoutsService.createKeyDetails('3_15', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS, keyset);

    board[4][0] = keyboardLayoutsService.createKeyDetails('4_0', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_IN_PATH, keyset);
    board[4][1] = keyboardLayoutsService.createKeyDetails('4_1', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH, keyset);
    board[4][2] = keyboardLayoutsService.createKeyDetails('4_2', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE, keyset);
    board[4][3] = keyboardLayoutsService.createKeyDetails('4_3', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE, keyset);
    board[4][4] = keyboardLayoutsService.createKeyDetails('4_4', CommandsDefinitions.IDE_USAGE_SEARCH_HIGHLIGHT_USAGE_IN_FILE, keyset);
    board[4][5] = keyboardLayoutsService.createKeyDetails('4_5', CommandsDefinitions.IDE_USAGE_SEARCH_SHOW_USAGE, keyset);
    board[4][6] = keyboardLayoutsService.createKeyDetails('4_6', CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS, keyset);
    board[4][7] = keyboardLayoutsService.createKeyDetails('4_7', CommandsDefinitions.IDE_REFACTORING_COPY, keyset);
    board[4][8] = keyboardLayoutsService.createKeyDetails('4_8', CommandsDefinitions.IDE_REFACTORING_MOVE, keyset);
    board[4][9] = keyboardLayoutsService.createKeyDetails('4_9', CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE, keyset);
    board[4][10] = keyboardLayoutsService.createKeyDetails('4_10', CommandsDefinitions.IDE_REFACTORING_RENAME, keyset);
    board[4][11] = keyboardLayoutsService.createKeyDetails('4_11', CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE, keyset);
    board[4][12] = keyboardLayoutsService.createKeyDetails('4_12', CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE, keyset);
    board[4][13] = keyboardLayoutsService.createKeyDetails('4_13', CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE, keyset);
    board[4][14] = keyboardLayoutsService.createKeyDetails('4_14', CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT, keyset);
    board[4][15] = keyboardLayoutsService.createKeyDetails('4_15', CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER, keyset);

    board[5][0] = keyboardLayoutsService.createKeyDetails('5_0', CommandsDefinitions.IDE_VCS_QUICK_POPUP, keyset);
    board[5][1] = keyboardLayoutsService.createKeyDetails('5_1', CommandsDefinitions.IDE_VCS_COMMIT_TO_VCS, keyset);
    board[5][2] = keyboardLayoutsService.createKeyDetails('5_2', CommandsDefinitions.IDE_VCS_UPDATE_PROJECCT_FROM_VCS, keyset);
    board[5][3] = keyboardLayoutsService.createKeyDetails('5_3', CommandsDefinitions.IDE_VCS_VIEW_RECENT_CHANGES, keyset);
    board[5][4] = keyboardLayoutsService.createKeyDetails('5_4', CommandsDefinitions.IDE_GENERAL_SEARCH_EVERYWHERE, keyset);
    board[5][5] = keyboardLayoutsService.createKeyDetails('5_5', CommandsDefinitions.IDE_GENERAL_FIND_ACTION, keyset);
    board[5][6] = keyboardLayoutsService.createKeyDetails('5_6', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_0, keyset);
    board[5][7] = keyboardLayoutsService.createKeyDetails('5_7', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES, keyset);
    board[5][8] = keyboardLayoutsService.createKeyDetails('5_8', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE, keyset);
    board[5][9] = keyboardLayoutsService.createKeyDetails('5_9', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE, keyset);
    board[5][10] = keyboardLayoutsService.createKeyDetails('5_10', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS, keyset);
    board[5][11] = keyboardLayoutsService.createKeyDetails('5_11', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, keyset);
    board[5][12] = keyboardLayoutsService.createKeyDetails('5_12', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, keyset);
    board[5][13] = keyboardLayoutsService.createKeyDetails('5_13', CommandsDefinitions.IDE_RUNNING_RUN, keyset);
    board[5][14] = keyboardLayoutsService.createKeyDetails('5_14', CommandsDefinitions.IDE_RUNNING_DEBUG, keyset);
    board[5][15] = keyboardLayoutsService.createKeyDetails('5_15', CommandsDefinitions.IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR, keyset);

    board[6][0] = keyboardLayoutsService.createKeyDetails('6_0', CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW, keyset);
    board[6][1] = keyboardLayoutsService.createKeyDetails('6_1', CommandsDefinitions.IDE_GENERAL_ADD_FO_FAVORITES, keyset);
    board[6][2] = keyboardLayoutsService.createKeyDetails('6_2', CommandsDefinitions.IDE_GENERAL_INSPECT_CURRENT_FILE, keyset);
    board[6][3] = keyboardLayoutsService.createKeyDetails('6_3', CommandsDefinitions.IDE_GENERAL_QUICK_SWITCH_CURRENT_SCHEME, keyset);
    board[6][4] = keyboardLayoutsService.createKeyDetails('6_4', CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES, keyset);
    board[6][5] = keyboardLayoutsService.createKeyDetails('6_5', CommandsDefinitions.IDE_GENERAL_SWITCH_BETWEEN_TAB_AND_TOOL_WINDOW, keyset);
    board[6][6] = keyboardLayoutsService.createKeyDetails('6_6', CommandsDefinitions.IDE_EDITING_GENERATE, keyset);
    board[6][7] = keyboardLayoutsService.createKeyDetails('6_7', CommandsDefinitions.IDE_EDITING_SURROUND, keyset);
    board[6][8] = keyboardLayoutsService.createKeyDetails('6_8', CommandsDefinitions.IDE_EDITING_INSERT_LIVE_TEMPLATE, keyset);
    board[6][9] = keyboardLayoutsService.createKeyDetails('6_9', CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, keyset);
    board[6][10] = keyboardLayoutsService.createKeyDetails('6_10', CommandsDefinitions.IDE_EDITING_REFORMAT_CODE, keyset);
    board[6][11] = keyboardLayoutsService.createKeyDetails('6_11', CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE, keyset);
    board[6][12] = keyboardLayoutsService.createKeyDetails('6_12', CommandsDefinitions.IDE_EDITING_DELETE_LINE, keyset);
    board[6][13] = keyboardLayoutsService.createKeyDetails('6_13', CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION, keyset);
    board[6][14] = keyboardLayoutsService.createKeyDetails('6_14', CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES, keyset);
    board[6][15] = keyboardLayoutsService.createKeyDetails('6_15', CommandsDefinitions.IDE_EDITING_PARAMETER_INFO, keyset);

    board[7][0] = keyboardLayoutsService.createKeyDetails('7_0', CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP, keyset);
    board[7][1] = keyboardLayoutsService.createKeyDetails('7_1', CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET, keyset);
    board[7][2] = keyboardLayoutsService.createKeyDetails('7_2', CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK, keyset);
    board[7][3] = keyboardLayoutsService.createKeyDetails('7_3', CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY, keyset);
    board[7][4] = keyboardLayoutsService.createKeyDetails('7_4', CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION, keyset);
    board[7][5] = keyboardLayoutsService.createKeyDetails('7_5', CommandsDefinitions.IDE_EDITING_CONTEXT_INFO, keyset);
    board[7][6] = keyboardLayoutsService.createKeyDetails('7_6', CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE, keyset);
    board[7][7] = keyboardLayoutsService.createKeyDetails('7_7', CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES, keyset);
    board[7][8] = keyboardLayoutsService.createKeyDetails('7_8', CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES, keyset);
    board[7][9] = keyboardLayoutsService.createKeyDetails('7_9', CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER, keyset);
    board[7][10] = keyboardLayoutsService.createKeyDetails('7_10', CommandsDefinitions.IDE_EDITING_MOVE_LINE_UP, keyset);
    board[7][11] = keyboardLayoutsService.createKeyDetails('7_11', CommandsDefinitions.IDE_EDITING_MOVE_LINE_DOWN, keyset);
    board[7][12] = keyboardLayoutsService.createKeyDetails('7_12', CommandsDefinitions.IDE_EDITING_JOIN_LINES, keyset);
    board[7][13] = keyboardLayoutsService.createKeyDetails('7_13', CommandsDefinitions.IDE_EDITING_SPLIT_LINES, keyset);
    board[7][14] = keyboardLayoutsService.createKeyDetails('7_14', CommandsDefinitions.IDE_EDITING_START_NEW_LINES, keyset);
    board[7][15] = keyboardLayoutsService.createKeyDetails('7_15', CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD, keyset);

    return <KeyboardLayout>{
        id: 'macosx_webstorm',
        keyboard,
        name: 'MacosX Webstorm⁄',
        description: 'Test that the executions are working on a real pre-128 keyboard',
        keys: board
    };


}

