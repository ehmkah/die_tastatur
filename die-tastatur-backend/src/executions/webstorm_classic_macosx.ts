import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function webstormDefaultMaxosxExecutions(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        // verified
        executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.LWIN}+1}`),
        executionService.createExecution('git_view', CommandsDefinitions.JUMP_TO_GIT_VIEW, keyset, `{${SpecialKeys.LWIN}+9}`),
        executionService.createExecution('6', CommandsDefinitions.GRADLE_RELOAD_CHANGES, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+O}}`),
        executionService.createExecution('7', CommandsDefinitions.OPEN_COMMIT_DIALOG, keyset, `{${SpecialKeys.CTRL}+k}`),
        executionService.createExecution('8', CommandsDefinitions.COMMIT, keyset, `{${SpecialKeys.ALT}+i}`),
        executionService.createExecution('9', CommandsDefinitions.PUSH_1, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+k}}`),
        executionService.createExecution('10', CommandsDefinitions.GIT_COMMIT_AND_PUSH, keyset, `{${SpecialKeys.ALT}+p}`),

        executionService.createExecution('12', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keyset, `${SpecialKeys.F8}`),
        executionService.createExecution('11', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F8}}`),
        executionService.createExecution('13', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keyset, `${SpecialKeys.F7}`),
        executionService.createExecution('14', CommandsDefinitions.IDE_DEBUG_STEP_OUT, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.F8}}`),
        executionService.createExecution('15', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F8}}`),

        executionService.createExecution('ide_debug_smart_step_into', CommandsDefinitions.IDE_DEBUG_SMART_STEP_INTO, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.F7}}`),
        executionService.createExecution('ide_debug_run_to_cursor', CommandsDefinitions.IDE_DEBUG_RUN_TO_CURSOR, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F9}}`),
        executionService.createExecution('ide_debug_resume', CommandsDefinitions.IDE_DEBUG_RESUME, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+r}}`),
        executionService.createExecution('ide_debug_view_breakpoint', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.F8}}}`),

        executionService.createExecution('16', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset, `{${SpecialKeys.LWIN}+B}`),
        executionService.createExecution('17', CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, keyset, `{${SpecialKeys.LWIN}+o}`),
        executionService.createExecution('18', CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+o}}`),
        executionService.createExecution('19', CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+o}}`),
        executionService.createExecution('ide_navigation_goto_next_editor_tab', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_EDITOR_TAB, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+]}}`),
        executionService.createExecution('ide_navigation_goto_previous_editor_tab', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_EDITOR_TAB, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+[}}`),
        executionService.createExecution('ide_navigation__go_back_to_previous_tool_window', CommandsDefinitions.IDE_NAVIGATION__GO_BACK_TO_PREVIOUS_TOOL_WINDOW, keyset, `${SpecialKeys.F12}`),
        executionService.createExecution('ide_navigation_go_to_editor', CommandsDefinitions.IDE_NAVIGATION_GO_TO_EDITOR, keyset, `${SpecialKeys.ESCAPE}`),
        executionService.createExecution('ide_navigation_go_to_line', CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, keyset, `{${SpecialKeys.LWIN}+l}`),
        executionService.createExecution('ide_navigation_recent_files_popup', CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP, keyset, `{${SpecialKeys.LWIN}+E}`),
        executionService.createExecution('ide_navigation_navigate_back', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+${SpecialKeys.CURSOR_LEFT}}}`),
        executionService.createExecution('ide_navigation_navigate_forward', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+${SpecialKeys.CURSOR_RIGHT}}}`),
        executionService.createExecution('ide_navigation_navigate_to_last_edit_location', CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+${SpecialKeys.BACKSPACE}}}`),
        executionService.createExecution('ide_navigation_select_current_file_in_any_view', CommandsDefinitions.IDE_NAVIGATION_SELECT_CURRENT_FILE_IN_ANY_VIEW, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F1}}`),
        executionService.createExecution('ide_navigation_goto_implementation', CommandsDefinitions.IDE_NAVIGATION_GOTO_IMPLEMENTATION, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+B}}`),
        executionService.createExecution('ide_navigation_open_quick_definition_lookup', CommandsDefinitions.IDE_NAVIGATION_OPEN_QUICK_DEFINITION_LOOKUP, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SPACE}}}`),
        executionService.createExecution('ide_navigation_goto_type_definitiaon', CommandsDefinitions.IDE_NAVIGATION_GOTO_TYPE_DEFINITION, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+b}}`),
        executionService.createExecution('ide_navigation_goto_super_method_super_class', CommandsDefinitions.IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS, keyset, `{${SpecialKeys.LWIN}+u}`),
        executionService.createExecution('ide_navigation_goto_previous_method', CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.CTRL}+${SpecialKeys.CURSOR_UP}}}`),
        executionService.createExecution('ide_navigation_goto_next_method', CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.CTRL}+${SpecialKeys.CURSOR_DOWN}}}`),
        executionService.createExecution('ide_navigation_move_code_block_end', CommandsDefinitions.IDE_NAVIGATION_MOVE_CODE_BLOCK_END, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+]}}`),
        executionService.createExecution('ide_navigation_move_codeblock_start', CommandsDefinitions.IDE_NAVIGATION_MOVE_CODEBLOCK_START, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+[}}`),
        executionService.createExecution('ide_navigation_move_caret_matching_brace', CommandsDefinitions.IDE_NAVIGATION_MOVE_CARET_MATCHING_BRACE, keyset, `{${SpecialKeys.CTRL}+m}`),
        executionService.createExecution('ide_navigation_file_structure_piopup', CommandsDefinitions.IDE_NAVIGATION_FILE_STRUCTURE_PIOPUP, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F12}}`),
        executionService.createExecution('ide_navigation_type_hierachiy', CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY, keyset, `{${SpecialKeys.CTRL}+h}`),
        executionService.createExecution('ide_navigation_call_hierachy', CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+h}}`),
        executionService.createExecution('ide_navigation_next_highlighted_error', CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, keyset, `${SpecialKeys.F2}`),
        executionService.createExecution('ide_navigation_previous_highlighted_error', CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.F2}}`),
        executionService.createExecution('ide_navigation_jump_to_source', CommandsDefinitions.IDE_NAVIGATION_JUMP_TO_SOURCE, keyset, `${SpecialKeys.F4}`),
        executionService.createExecution('ide_navigation__jump_to_navigation_bar', CommandsDefinitions.IDE_NAVIGATION_JUMP_TO_NAVIGATION_BAR, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.CURSOR_UP}}`),
        executionService.createExecution('IDE_NAVIGATION_TOGGLE_BOOOMARK', CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOOMARK, keyset, `${SpecialKeys.F3}`),
        executionService.createExecution('ide_navigation_toggle_bookmark_with_mnemoconic', CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOKMARK_WITH_MNEMOCONIC, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F3}}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_0', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_0, keyset, `{${SpecialKeys.CTRL}+0}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_1', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_1, keyset, `{${SpecialKeys.CTRL}+1}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_2', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_2, keyset, `{${SpecialKeys.CTRL}+2}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_3', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_3, keyset, `{${SpecialKeys.CTRL}+3}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_4', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_4, keyset, `{${SpecialKeys.CTRL}+4}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_5', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_5, keyset, `{${SpecialKeys.CTRL}+5}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_6', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_6, keyset, `{${SpecialKeys.CTRL}+6}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_7', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_7, keyset, `{${SpecialKeys.CTRL}+7}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_8', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_8, keyset, `{${SpecialKeys.CTRL}+8}`),
        executionService.createExecution('ide_navigation_goto_numbered_bookmark_9', CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_9, keyset, `{${SpecialKeys.CTRL}+9}`),
        executionService.createExecution('ide_navigation_show_bookmark', CommandsDefinitions.IDE_NAVIGATION_SHOW_BOOKMARK, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F3}}`),

        executionService.createExecution('ide_search_and_replace_find', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND, keyset, `{${SpecialKeys.LWIN}+f}`),
        executionService.createExecution('ide_search_and_replace_replace', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE, keyset, `{${SpecialKeys.LWIN}+r}`),
        executionService.createExecution('ide_search_and_replace_find_next', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_NEXT, keyset, `{${SpecialKeys.LWIN}+g}`),
        executionService.createExecution('ide_search_and_replace_find_previous', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+g}}`),
        executionService.createExecution('ide_search_and_replace_find_in_path', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_IN_PATH, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+f}}`),
        executionService.createExecution('ide_search_and_replace_replace_in_path', CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+r}}`),
        executionService.createExecution('ide_usage_search_find_usage', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F7}}`),
        executionService.createExecution('ide_usage_search_find_usage_in_file', CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F7}}`),
        executionService.createExecution('ide_usage_search_highlight_usage_in_file', CommandsDefinitions.IDE_USAGE_SEARCH_HIGHLIGHT_USAGE_IN_FILE, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.F7}}}`),
        executionService.createExecution('ide_usage_search_show_usage', CommandsDefinitions.IDE_USAGE_SEARCH_SHOW_USAGE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+${SpecialKeys.F7}}}`),
        executionService.createExecution('ide_refactoring_refactor_this', CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS, keyset, `{${SpecialKeys.CTRL}+t}`),
        executionService.createExecution('ide_refactoring_copy', CommandsDefinitions.IDE_REFACTORING_COPY, keyset, `${SpecialKeys.F5}`),
        executionService.createExecution('ide_refactoring_move', CommandsDefinitions.IDE_REFACTORING_MOVE, keyset, `${SpecialKeys.F6}`),
        executionService.createExecution('ide_refactoring_safe_delete', CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.DELETE}}`),
        executionService.createExecution('ide_refactoring_rename', CommandsDefinitions.IDE_REFACTORING_RENAME, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.F6}}`),
        executionService.createExecution('ide_refactoring_change_function_signature', CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F6}}`),
        executionService.createExecution('ide_refactoring_inline_variable', CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+n}}`),
        executionService.createExecution('ide_refactoring_extract_variable', CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+v}}`),
        executionService.createExecution('ide_refactoring_extract_constant', CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+c}}`),
        executionService.createExecution('ide_refactoring_extract_parameter', CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+p}}`),
        executionService.createExecution('ide_vcs_quick_popup', CommandsDefinitions.IDE_VCS_QUICK_POPUP, keyset, `{${SpecialKeys.ALT}+v}`),
        executionService.createExecution('ide_vcs_commit_to_vcs', CommandsDefinitions.IDE_VCS_COMMIT_TO_VCS, keyset, `{${SpecialKeys.LWIN}+k}`),
        executionService.createExecution('ide_vcs_update_projecct_from_vcs', CommandsDefinitions.IDE_VCS_UPDATE_PROJECCT_FROM_VCS, keyset, `{${SpecialKeys.LWIN}+t}`),
        executionService.createExecution('ide_vcs_view_recent_changes', CommandsDefinitions.IDE_VCS_VIEW_RECENT_CHANGES, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+c}}`),
        executionService.createExecution('ide_general_search_everywhere', CommandsDefinitions.IDE_GENERAL_SEARCH_EVERYWHERE, keyset, `{${SpecialKeys.SHIFT}}{${SpecialKeys.SHIFT}}`),
        executionService.createExecution('ide_general_find_action', CommandsDefinitions.IDE_GENERAL_FIND_ACTION, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+a}}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_0', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_0, keyset, `{${SpecialKeys.LWIN}+0}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_1', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_1, keyset, `{${SpecialKeys.LWIN}+1}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_2', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_2, keyset, `{${SpecialKeys.LWIN}+2}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_3', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_3, keyset, `{${SpecialKeys.LWIN}+3}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_4', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_4, keyset, `{${SpecialKeys.LWIN}+4}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_5', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_5, keyset, `{${SpecialKeys.LWIN}+5}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_6', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_6, keyset, `{${SpecialKeys.LWIN}+6}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_7', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_7, keyset, `{${SpecialKeys.LWIN}+7}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_8', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_8, keyset, `{${SpecialKeys.LWIN}+8}`),
        executionService.createExecution('ide_general_open_corresponding_tool_window_9', CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_9, keyset, `{${SpecialKeys.LWIN}+9}`),
        executionService.createExecution('ide_general_toggle_maximize_window', CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.F12}}}`),
        executionService.createExecution('ide_general_add_fo_favorites', CommandsDefinitions.IDE_GENERAL_ADD_FO_FAVORITES, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+F}}`),
        executionService.createExecution('ide_general_inspect_current_file', CommandsDefinitions.IDE_GENERAL_INSPECT_CURRENT_FILE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+I}}`),
        executionService.createExecution('ide_general_quick_switch_current_scheme', CommandsDefinitions.IDE_GENERAL_QUICK_SWITCH_CURRENT_SCHEME, keyset, `{${SpecialKeys.CTRL}+\`}`),
        executionService.createExecution('ide_general_open_preferences', CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES, keyset, `{${SpecialKeys.LWIN}+,}`),
        executionService.createExecution('ide_general_switch_between_tab_and_tool_window', CommandsDefinitions.IDE_GENERAL_SWITCH_BETWEEN_TAB_AND_TOOL_WINDOW, keyset, `{${SpecialKeys.CTRL}+${SpecialKeys.TAB}}`),


        executionService.createExecution('20', CommandsDefinitions.IDE_EDITING_GENERATE, keyset, `{${SpecialKeys.LWIN}+n}`),
        executionService.createExecution('21', CommandsDefinitions.IDE_EDITING_SURROUND, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+t}}`),
        executionService.createExecution('22', CommandsDefinitions.IDE_EDITING_INSERT_LIVE_TEMPLATE, keyset, `{${SpecialKeys.LWIN}+j}`),
        executionService.createExecution('23', CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.DIV}}`),
        executionService.createExecution('24', CommandsDefinitions.IDE_EDITING_REFORMAT_CODE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+l}}`),
        executionService.createExecution('25', CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE, keyset, `{${SpecialKeys.LWIN}+d}`),
        executionService.createExecution('26', CommandsDefinitions.IDE_EDITING_DELETE_LINE, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.BACKSPACE}}`),
        executionService.createExecution('IDE_EDITING_BASIC_CODE_COMPLETION', CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION, keyset, `{${SpecialKeys.CTRL}+${SpecialKeys.SPACE}}`),
        executionService.createExecution('IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES', CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.RETURN}}`),
        executionService.createExecution('IDE_EDITING_PARAMETER_INFO', CommandsDefinitions.IDE_EDITING_PARAMETER_INFO, keyset, `{${SpecialKeys.LWIN}+p}`),
        executionService.createExecution('IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP', CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP, keyset, `{${SpecialKeys.CTRL}+j}`),
        executionService.createExecution('IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET', CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F1}}`),
        executionService.createExecution('IDE_EDITING_COMMENT_WITH_BLOCK', CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+${SpecialKeys.DIV}}}`),
        executionService.createExecution('IDE_EDITING_SELECT_SUCCESSIVLY', CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_UP}}`),
        executionService.createExecution('IDE_EDITING_DECREASE_CURRENT_SELECTION', CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_DOWN}}`),
        executionService.createExecution('IDE_EDITING_CONTEXT_INFO', CommandsDefinitions.IDE_EDITING_CONTEXT_INFO, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+q}}`),
        executionService.createExecution('IDE_EDITING_AUTO_INDENT_LINE', CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.CTRL}+i}}`),
        executionService.createExecution('IDE_EDITING_INDENT_SELECTED_LINES', CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES, keyset, `${SpecialKeys.TAB}`),
        executionService.createExecution('IDE_EDITING_UNINDENT_SELECTED_LINES', CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.TAB}}`),
        executionService.createExecution('IDE_EDITING_PASTE_FROM_RECENT_BUFFER', CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+V}}`),
        executionService.createExecution('IDE_EDITING_MOVE_LINE_UP', CommandsDefinitions.IDE_EDITING_MOVE_LINE_UP, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+${SpecialKeys.CURSOR_UP}}}`),
        executionService.createExecution('IDE_EDITING_MOVE_LINE_DOWN', CommandsDefinitions.IDE_EDITING_MOVE_LINE_DOWN, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+${SpecialKeys.CURSOR_DOWN}}}`),
        executionService.createExecution('IDE_EDITING_JOIN_LINES', CommandsDefinitions.IDE_EDITING_JOIN_LINES, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+J}}`),
        executionService.createExecution('IDE_EDITING_SPLIT_LINES', CommandsDefinitions.IDE_EDITING_SPLIT_LINES, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.RETURN}}`),
        executionService.createExecution('IDE_EDITING_START_NEW_LINES', CommandsDefinitions.IDE_EDITING_START_NEW_LINES, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.RETURN}}`),
        executionService.createExecution('IDE_EDITING_TOGGLE_CASE_WORD', CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+u}}`),
        executionService.createExecution('IDE_EDITING_SELECT_TILL_CODE_BLOCK_END', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+]}}}`),
        executionService.createExecution('IDE_EDITING_SELECT_TILL_CODE_BLOCK_START', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+[}}}`),
        executionService.createExecution('IDE_EDITING_DELETE_WORD_END', CommandsDefinitions.IDE_EDITING_DELETE_WORD_END, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.DELETE}}`),
        executionService.createExecution('IDE_EDITING_DELETE_WORD_START', CommandsDefinitions.IDE_EDITING_DELETE_WORD_START, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.BACKSPACE}}`),
        executionService.createExecution('IDE_EDITING_EXPAND_CODE_BLOCK', CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.PLUS}}`),
        executionService.createExecution('IDE_EDITING_COLLAPSE_CODE_BLOCK', CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.MINUS}}}`),
        executionService.createExecution('IDE_EDITING_EXPAND_ALL', CommandsDefinitions.IDE_EDITING_EXPAND_ALL, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.PLUS}}}`),
        executionService.createExecution('IDE_EDITING_COOLAPSE_ALL', CommandsDefinitions.IDE_EDITING_COLAPSE_ALL, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.MINUS}}}`),
        executionService.createExecution('IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB', CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB, keyset, `{${SpecialKeys.LWIN}+w}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+g}}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE, keyset, `{${SpecialKeys.CTRL}+g}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+g}}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS, keyset, `${SpecialKeys.ESCAPE}`),

        executionService.createExecution('IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+r}}`),
        executionService.createExecution('IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+d}}`),
        executionService.createExecution('IDE_RUNNING_RUN', CommandsDefinitions.IDE_RUNNING_RUN, keyset, `{${SpecialKeys.CTRL}+r}`),
        executionService.createExecution('IDE_RUNNING_DEBUG', CommandsDefinitions.IDE_RUNNING_DEBUG, keyset, `{${SpecialKeys.CTRL}+d}`),
        executionService.createExecution('IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR', CommandsDefinitions.IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+r}}`),
        executionService.createExecution('IDE_RUNNING_RERUN__TESTS', CommandsDefinitions.IDE_RUNNING_RERUN__TESTS, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+r}}`),
        executionService.createExecution('IDE_RUNNING_RUN_GULP_NPM_GRUNT', CommandsDefinitions.IDE_RUNNING_RUN_GULP_NPM_GRUNT, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F11}}`),

        // not supported
        executionService.createExecution('ide_debug_toggle_breakpoints_on_off', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINTS_ON_OFF, keyset, `UNDEFINED`),

    ];


}