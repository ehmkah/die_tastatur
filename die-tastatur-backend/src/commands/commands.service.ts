import {Injectable} from '@nestjs/common';
import {Command} from "./command.interface";
import {CommandsDefinitions} from "./commands-definitions";

@Injectable()
export class CommandsService {

    // All commands which are supported at the moment
    findAll(): Array<Command> {
        return [
            // IDEs
            <Command>{id: 'jump_to_project_view', description: 'Jump to project view', defaultKeyPrintText: 'to projectview', name: CommandsDefinitions.JUMP_TO_PROJECT_VIEW},
            <Command>{id: 'jump_to_git_view', description: 'Jump to git view', defaultKeyPrintText: 'git\nview', name: CommandsDefinitions.JUMP_TO_GIT_VIEW},
            <Command>{id: 'open_git_commit', description: 'Open commit dialog', defaultKeyPrintText: 'open\nCommit', name: CommandsDefinitions.OPEN_COMMIT_DIALOG},
            <Command>{id: 'git_commit', description: 'commit', defaultKeyPrintText: 'commit', name: CommandsDefinitions.COMMIT},
            <Command>{id: 'git_push', description: 'push', defaultKeyPrintText: 'push', name: CommandsDefinitions.PUSH_1},
            <Command>{id: 'git_push_2', description: 'push2', defaultKeyPrintText: 'push2', name: CommandsDefinitions.PUSH_2},
            <Command>{id: 'toggle_breakpoint', description: 'Toggle breakpoint', defaultKeyPrintText: 'toggle\nbreakpoint', name: CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT},
            <Command>{id: 'ide_debug_stepover', description: 'Step over', defaultKeyPrintText: 'step-over', name: CommandsDefinitions.IDE_DEBUG_STEP_OVER},
            <Command>{id: 'ide_debug_stepinto', description: 'Step into', defaultKeyPrintText: 'step-into', name: CommandsDefinitions.IDE_DEBUG_STEP_INTO},
            <Command>{id: 'ide_debug_stepout', description: 'Step out', defaultKeyPrintText: 'step-out', name: CommandsDefinitions.IDE_DEBUG_STEP_OUT},
            <Command>{id: 'ide_debug_evaluateExpression', description: 'Evaluate expression', defaultKeyPrintText: 'evaluate', name: CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION},
            <Command>{id: 'ide_debug_run_to_cursor', description: 'Run to cursor', defaultKeyPrintText: 'runto cursor', name: CommandsDefinitions.IDE_DEBUG_RUN_TO_CURSOR},
            <Command>{id: 'ide_debug_resume', description: 'Resume', defaultKeyPrintText: 'resume', name: CommandsDefinitions.IDE_DEBUG_RESUME},
            <Command>{id: 'ide_toggle_view_breakpoint', description: 'View breakpoints', defaultKeyPrintText: 'view breakpoints', name: CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT},
            <Command>{id: 'ide_debug_smart_step_into', description: 'Smart step into', defaultKeyPrintText: 'stepinto smart', name: CommandsDefinitions.IDE_DEBUG_SMART_STEP_INTO},

            <Command>{id: 'ide_navigation_goto_declaration', description: 'Goto declaration', defaultKeyPrintText: 'declaration', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION},
            <Command>{id: 'ide_navigation_goto_class', description: 'Goto class', defaultKeyPrintText: 'goto\nclass', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS},
            <Command>{id: 'ide_navigation_goto_file', description: 'Goto file', defaultKeyPrintText: 'goto\nfile', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE},
            <Command>{id: 'ide_navigation_goto_symbol', description: 'Goto symbo', defaultKeyPrintText: 'goto\nsymbol', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL},

            <Command>{id: 'ide_navigation_goto_next_editor_tab', description: 'Goto next editor tab', defaultKeyPrintText: 'next tab', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_EDITOR_TAB},
            <Command>{id: 'ide_navigation_goto_previous_editor_tab', description: 'Goto previous editor tab', defaultKeyPrintText: 'previous tab', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_EDITOR_TAB},
            <Command>{id: 'ide_navigation__go_back_to_previous_tool_window', description: 'Goto back to previous tool window', defaultKeyPrintText: 'previous tool window', name: CommandsDefinitions.IDE_NAVIGATION__GO_BACK_TO_PREVIOUS_TOOL_WINDOW},
            <Command>{id: 'ide_navigation_go_to_editor', description: 'Goto editor (from tool window)', defaultKeyPrintText: 'goto editor', name: CommandsDefinitions.IDE_NAVIGATION_GO_TO_EDITOR},
            <Command>{id: 'ide_navigation_go_to_line', description: 'Goto line', defaultKeyPrintText: 'goto line', name: CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE},
            <Command>{id: 'ide_navigation_recent_files_popup', description: 'Recent files popup', defaultKeyPrintText: 'recent files', name: CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP},
            <Command>{id: 'ide_navigation_navigate_back', description: 'Navigate back', defaultKeyPrintText: 'navigate back', name: CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK},
            <Command>{id: 'ide_navigation_navigate_forward', description: 'Navigate forward', defaultKeyPrintText: 'navigate forward', name: CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD},
            <Command>{id: 'ide_navigation_navigate_to_last_edit_location', description: 'Navigate to last edit location', defaultKeyPrintText: 'navigate last edit', name: CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION},
            <Command>{id: 'ide_navigation_select_current_file_in_any_view', description: 'Select current file or symbol in any view', defaultKeyPrintText: 'select in any view', name: CommandsDefinitions.IDE_NAVIGATION_SELECT_CURRENT_FILE_IN_ANY_VIEW},
            <Command>{id: 'ide_navigation_goto_implementation', description: 'Goto implementation', defaultKeyPrintText: 'goto implementation', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_IMPLEMENTATION},
            <Command>{id: 'ide_navigation_open_quick_definition_lookup', description: 'Open quick definition lookup', defaultKeyPrintText: 'quick definition', name: CommandsDefinitions.IDE_NAVIGATION_OPEN_QUICK_DEFINITION_LOOKUP},
            <Command>{id: 'ide_navigation_goto_type_definitiaon', description: 'Goto type declaration', defaultKeyPrintText: 'type definition', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_TYPE_DEFINITION},
            <Command>{id: 'ide_navigation_goto_super_method_super_class', description: 'Goto super-method/ super-class', defaultKeyPrintText: 'goto supermethod', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS},
            <Command>{id: 'ide_navigation_goto_previous_method', description: 'Goto previous method', defaultKeyPrintText: 'goto previous method', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD},
            <Command>{id: 'ide_navigation_goto_next_method', description: 'Goto next method', defaultKeyPrintText: 'goto next method', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD},
            <Command>{id: 'ide_navigation_move_code_block_end', description: 'Move code block end', defaultKeyPrintText: 'mv code end', name: CommandsDefinitions.IDE_NAVIGATION_MOVE_CODE_BLOCK_END},
            <Command>{id: 'ide_navigation_move_codeblock_start', description: 'Move code block start', defaultKeyPrintText: 'mv code start', name: CommandsDefinitions.IDE_NAVIGATION_MOVE_CODEBLOCK_START},
            <Command>{id: 'ide_navigation_move_caret_matching_brace', description: 'Move caret to mmatching brace', defaultKeyPrintText: 'mv carret match brace', name: CommandsDefinitions.IDE_NAVIGATION_MOVE_CARET_MATCHING_BRACE},
            <Command>{id: 'ide_navigation_file_structure_piopup', description: 'File structure popup', defaultKeyPrintText: 'filestructure', name: CommandsDefinitions.IDE_NAVIGATION_FILE_STRUCTURE_PIOPUP},
            <Command>{id: 'ide_navigation_type_hierachiy', description: 'Type hierachy', defaultKeyPrintText: 'type hierachy', name: CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY},
            <Command>{id: 'ide_navigation_call_hierachy', description: 'Call hierachy', defaultKeyPrintText: 'call hierachy', name: CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY},
            <Command>{id: 'ide_navigation_next_highlighted_error', description: 'Next highlighted error', defaultKeyPrintText: 'next error', name: CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR},
            <Command>{id: 'ide_navigation_previous_highlighted_error', description: 'Previous hightlighted error', defaultKeyPrintText: 'previous error', name: CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR},
            <Command>{id: 'ide_navigation_jump_to_source', description: 'Jump to source', defaultKeyPrintText: 'jump to source', name: CommandsDefinitions.IDE_NAVIGATION_JUMP_TO_SOURCE},
            <Command>{id: 'ide_navigation__jump_to_navigation_bar', description: 'Jump to navigation bar', defaultKeyPrintText: 'jump nav bar', name: CommandsDefinitions.IDE_NAVIGATION__JUMP_TO_NAVIGATION_BAR},
            <Command>{id: 'ide_navigation_toggle_booomari', description: 'Toggle bookmark', defaultKeyPrintText: 'toggle bookmark', name: CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOOMARI},
            <Command>{id: 'ide_navigation_toggle_bookmark_with_mnemoconic', description: 'Toggle bookmark with mneomic', defaultKeyPrintText: 'toggle bookmark mnemoic', name: CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOKMARK_WITH_MNEMOCONIC},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_0', description: 'Goto numbered 0 bookmark', defaultKeyPrintText: 'goto bookmark 0', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_0},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_1', description: 'Goto numbered 1 bookmark', defaultKeyPrintText: 'goto bookmark 1', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_1},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_2', description: 'Goto numbered 2 bookmark', defaultKeyPrintText: 'goto bookmark 2', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_2},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_3', description: 'Goto numbered 3 bookmark', defaultKeyPrintText: 'goto bookmark 3', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_3},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_4', description: 'Goto numbered 4 bookmark', defaultKeyPrintText: 'goto bookmark 4', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_4},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_5', description: 'Goto numbered 5 bookmark', defaultKeyPrintText: 'goto bookmark 5', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_5},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_6', description: 'Goto numbered 6 bookmark', defaultKeyPrintText: 'goto bookmark 6', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_6},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_7', description: 'Goto numbered 7 bookmark', defaultKeyPrintText: 'goto bookmark 7', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_7},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_8', description: 'Goto numbered 8 bookmark', defaultKeyPrintText: 'goto bookmark 8', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_8},
            <Command>{id: 'ide_navigation_goto_numbered_bookmark_9', description: 'Goto numbered 9 bookmark', defaultKeyPrintText: 'goto bookmark 9', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_9},
            <Command>{id: 'ide_navigation_show_bookmark', description: 'Show bookmark', defaultKeyPrintText: 'show bookmark', name: CommandsDefinitions.IDE_NAVIGATION_SHOW_BOOKMARK},

            <Command>{id: 'ide_search_and_replace_find', description: 'Find', defaultKeyPrintText: 'Find', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND},
            <Command>{id: 'ide_search_and_replace_replace', description: 'Replace', defaultKeyPrintText: 'Replace', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE},
            <Command>{id: 'ide_search_and_replace_find_next', description: 'Find next', defaultKeyPrintText: 'Find next', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_NEXT},
            <Command>{id: 'ide_search_and_replace_replace_next', description: 'Replace next', defaultKeyPrintText: 'Replace next', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS},
            <Command>{id: 'ide_search_and_replace_find_in_path', description: 'Find in path', defaultKeyPrintText: 'Find in path', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_IN_PATH},
            <Command>{id: 'ide_search_and_replace_replace_in_path', description: 'Replace in path', defaultKeyPrintText: 'Replace in path', name: CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH},
            <Command>{id: 'ide_usage_search_find_usage', description: 'Find usage', defaultKeyPrintText: 'Find usage', name: CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE},
            <Command>{id: 'ide_usage_search_find_usage_in_file', description: 'Find usage in file', defaultKeyPrintText: 'Find usage in file', name: CommandsDefinitions.IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE},
            <Command>{id: 'ide_usage_search_highlight_usage_in_file', description: 'highlight usage in file', defaultKeyPrintText: 'Highlight usage in file', name: CommandsDefinitions.IDE_USAGE_SEARCH_HIGHLIGHT_USAGE_IN_FILE},
            <Command>{id: 'ide_usage_search_show_usage', description: 'Show usages', defaultKeyPrintText: 'show usage', name: CommandsDefinitions.IDE_USAGE_SEARCH_SHOW_USAGE},
            <Command>{id: 'ide_refactoring_refactor_this', description: 'Refactor this', defaultKeyPrintText: 'Refactor this', name: CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS},
            <Command>{id: 'ide_refactoring_copy', description: 'Refactor Copy', defaultKeyPrintText: 'Refactor Copy', name: CommandsDefinitions.IDE_REFACTORING_COPY},
            <Command>{id: 'ide_refactoring_move', description: 'Refactor Move', defaultKeyPrintText: 'Refactor move', name: CommandsDefinitions.IDE_REFACTORING_MOVE},
            <Command>{id: 'ide_refactoring_safe_delete', description: 'Safe delete', defaultKeyPrintText: 'Refactor safe delete', name: CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE},
            <Command>{id: 'ide_refactoring_rename', description: 'Rename', defaultKeyPrintText: 'Rename', name: CommandsDefinitions.IDE_REFACTORING_RENAME},
            <Command>{id: 'ide_refactoring_change_function_signature', description: 'Change function signature', defaultKeyPrintText: 'Change function signature', name: CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE},
            <Command>{id: 'ide_refactoring_inline_variable', description: 'Inline variable', defaultKeyPrintText: 'Inline variable', name: CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE},
            <Command>{id: 'ide_refactoring_extract_variable', description: 'Extract variable', defaultKeyPrintText: 'Extract variable', name: CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE},
            <Command>{id: 'ide_refactoring_extract_constant', description: 'Extract constant', defaultKeyPrintText: 'extract constant', name: CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT},
            <Command>{id: 'ide_refactoring_extract_parameter', description: 'Extract parameter', defaultKeyPrintText: 'Extract parameter', name: CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER},
            <Command>{id: 'ide_vcs_quick_popup', description: 'Qvcs quick popup', defaultKeyPrintText: 'VCS popup', name: CommandsDefinitions.IDE_VCS_QUICK_POPUP},
            <Command>{id: 'ide_vcs_commit_to_vcs', description: 'Commit project to VCS', defaultKeyPrintText: 'Commit', name: CommandsDefinitions.IDE_VCS_COMMIT_TO_VCS},
            <Command>{id: 'ide_vcs_update_projecct_from_vcs', description: 'Update project from VCS', defaultKeyPrintText: 'Update', name: CommandsDefinitions.IDE_VCS_UPDATE_PROJECCT_FROM_VCS},
            <Command>{id: 'ide_vcs_view_recent_changes', description: 'View recent changes ', defaultKeyPrintText: 'View recent changes', name: CommandsDefinitions.IDE_VCS_VIEW_RECENT_CHANGES},
            <Command>{id: 'ide_general_search_everywhere', description: 'Search everywhere', defaultKeyPrintText: 'Search everywhere', name: CommandsDefinitions.IDE_GENERAL_SEARCH_EVERYWHERE},
            <Command>{id: 'ide_general_find_action', description: 'Find action', defaultKeyPrintText: 'Find Action', name: CommandsDefinitions.IDE_GENERAL_FIND_ACTION},
            <Command>{id: 'ide_general_open_corresponding_tool_window_0', description: 'Open tool window 0', defaultKeyPrintText: 'toolwindow 0', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_0},
            <Command>{id: 'ide_general_open_corresponding_tool_window_1', description: 'Open tool window 1', defaultKeyPrintText: 'toolwindow 1', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_1},
            <Command>{id: 'ide_general_open_corresponding_tool_window_2', description: 'Open tool window 2', defaultKeyPrintText: 'toolwindow 2', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_2},
            <Command>{id: 'ide_general_open_corresponding_tool_window_3', description: 'Open tool window 3', defaultKeyPrintText: 'toolwindow 3', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_3},
            <Command>{id: 'ide_general_open_corresponding_tool_window_4', description: 'Open tool window 4', defaultKeyPrintText: 'toolwindow 4', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_4},
            <Command>{id: 'ide_general_open_corresponding_tool_window_5', description: 'Open tool window 5', defaultKeyPrintText: 'toolwindow 5', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_5},
            <Command>{id: 'ide_general_open_corresponding_tool_window_6', description: 'Open tool window 6', defaultKeyPrintText: 'toolwindow 6', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_6},
            <Command>{id: 'ide_general_open_corresponding_tool_window_7', description: 'Open tool window 7', defaultKeyPrintText: 'toolwindow 7', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_7},
            <Command>{id: 'ide_general_open_corresponding_tool_window_8', description: 'Open tool window 8', defaultKeyPrintText: 'toolwindow 8', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_8},
            <Command>{id: 'ide_general_open_corresponding_tool_window_9', description: 'Open tool window 9', defaultKeyPrintText: 'toolwindow 9', name: CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_9},
            <Command>{id: 'ide_general_toggle_maximize_window', description: 'Toggle maximze editor', defaultKeyPrintText: 'Max editor', name: CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW},
            <Command>{id: 'ide_general_add_fo_favorites', description: 'Add to favorites', defaultKeyPrintText: 'Add favorites', name: CommandsDefinitions.IDE_GENERAL_ADD_FO_FAVORITES},
            <Command>{id: 'ide_general_inspect_current_file', description: 'Inspect current file with current profile', defaultKeyPrintText: 'Inspect file', name: CommandsDefinitions.IDE_GENERAL_INSPECT_CURRENT_FILE},
            <Command>{id: 'ide_general_quick_switch_current_scheme', description: 'Quick switch current scheme', defaultKeyPrintText: 'Change scheme', name: CommandsDefinitions.IDE_GENERAL_QUICK_SWITCH_CURRENT_SCHEME},
            <Command>{id: 'ide_general_open_preferences', description: 'Open preferences', defaultKeyPrintText: 'Open preferences', name: CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES},
            <Command>{id: 'ide_general_switch_between_tab_and_tool_window', description: 'Switch between tabs and tool windows', defaultKeyPrintText: 'Switch tab tool', name: CommandsDefinitions.IDE_GENERAL_SWITCH_BETWEEN_TAB_AND_TOOL_WINDOW},

            <Command>{id: 'IDE_EDITING_GENERATE', description: 'Generate Code', defaultKeyPrintText: 'generate', name: CommandsDefinitions.IDE_EDITING_GENERATE},
            <Command>{id: 'IDE_EDITING_SURROUND', description: 'Surround with if, try, for', defaultKeyPrintText: 'surround', name: CommandsDefinitions.IDE_EDITING_SURROUND},
            <Command>{id: 'IDE_EDITING_INSERT_LIVE_TEMPLATE', description: 'Insert live template', defaultKeyPrintText: 'live template', name: CommandsDefinitions.IDE_EDITING_INSERT_LIVE_TEMPLATE},
            <Command>{id: 'IDE_EDITING_COMMENT_OR_UNCOMMENT', description: 'Comment/uncomment with line command', defaultKeyPrintText: 'command', name: CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT},
            <Command>{id: 'ide_editing_reformat_code', description: 'Reformat code', defaultKeyPrintText: 'reformat', name: CommandsDefinitions.IDE_EDITING_REFORMAT_CODE},
            <Command>{id: 'IDE_EDITING_DUPLICATE_LINE', description: 'Duplicate current line or selected block', defaultKeyPrintText: 'duplicate', name: CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE},
            <Command>{id: 'IDE_EDITING_DELETE_LINE', description: 'Delete current line', defaultKeyPrintText: 'delete line', name: CommandsDefinitions.IDE_EDITING_DELETE_LINE},

            <Command>{id: 'ide_editing_basic_code_completion', description: 'Basic code completion', defaultKeyPrintText: 'code complete', name: CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION},
            <Command>{id: 'ide_editing_show_intention_action_quick_fixes', description: 'Show intention action and quick-fixes', defaultKeyPrintText: 'quick fixes', name: CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES},
            <Command>{id: 'ide_editing_parameter_info', description: 'Parameter info (within method call argument)', defaultKeyPrintText: 'parameter info', name: CommandsDefinitions.IDE_EDITING_PARAMETER_INFO},
            <Command>{id: 'ide_editing_quick_documentation_lookup', description: 'Quick documentation lookup', defaultKeyPrintText: 'docu lookup', name: CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP},
            <Command>{id: 'ide_editing_show_description_error_or_warning_at_carret', description: 'Show description or error or warning at caret', defaultKeyPrintText: 'error description', name: CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET},
            <Command>{id: 'ide_editing_comment_with_block', description: 'Comment/ uncomment with block comment', defaultKeyPrintText: 'comment block', name: CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK},
            <Command>{id: 'ide_editing_select_successivly', description: 'Select successively increasing code blocks', defaultKeyPrintText: 'increase select', name: CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY},
            <Command>{id: 'ide_editing_decrease_current_selection', description: 'Decrease current selection to previous state', defaultKeyPrintText: 'decrease select', name: CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION},
            <Command>{id: 'ide_editing_context_info', description: 'Context info', defaultKeyPrintText: 'context info', name: CommandsDefinitions.IDE_EDITING_CONTEXT_INFO},
            <Command>{id: 'ide_editing_auto_indent_line', description: 'Auto-indent-line(s)', defaultKeyPrintText: 'auto indent', name: CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE},
            <Command>{id: 'ide_editing_indent_selected_lines', description: 'Indent selected lines', defaultKeyPrintText: 'indent line', name: CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES},
            <Command>{id: 'ide_editing_unindent_selected_lines', description: 'Unindent selected lines', defaultKeyPrintText: 'unindent line', name: CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES},
            <Command>{id: 'ide_editing_paste_from_recent_buffer', description: 'Paste from recent buffers', defaultKeyPrintText: 'paste from buffers', name: CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER},
            <Command>{id: 'ide_editing_move_line_up', description: 'Move line up', defaultKeyPrintText: 'line up', name: CommandsDefinitions.IDE_EDITING_MOVE_LINE_UP},
            <Command>{id: 'ide_editing_move_line_down', description: 'Move line down', defaultKeyPrintText: 'line down', name: CommandsDefinitions.IDE_EDITING_MOVE_LINE_DOWN},
            <Command>{id: 'ide_editing_join_lines', description: 'Join lines', defaultKeyPrintText: 'line join', name: CommandsDefinitions.IDE_EDITING_JOIN_LINES},
            <Command>{id: 'ide_editing_split_lines', description: 'Split line', defaultKeyPrintText: 'line split', name: CommandsDefinitions.IDE_EDITING_SPLIT_LINES},
            <Command>{id: 'ide_editing_start_new_lines', description: 'Start new line', defaultKeyPrintText: 'new line', name: CommandsDefinitions.IDE_EDITING_START_NEW_LINES},
            <Command>{id: 'ide_editing_toggle_case_word', description: 'Toggle case for word at caret or selection', defaultKeyPrintText: 'toggle word case', name: CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD},
            <Command>{id: 'ide_editing_select_till_code_block_end', description: 'Select till code block end', defaultKeyPrintText: 'select code end', name: CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END},
            <Command>{id: 'ide_editing_select_till_code_block_start', description: 'Select till code block start', defaultKeyPrintText: 'select code start', name: CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START},
            <Command>{id: 'ide_editing_delete_word_end', description: 'Select till code block start', defaultKeyPrintText: 'delete word end', name: CommandsDefinitions.IDE_EDITING_DELETE_WORD_END},
            <Command>{id: 'ide_editing_delete_word_start', description: 'Delete to word end', defaultKeyPrintText: 'delete word start', name: CommandsDefinitions.IDE_EDITING_DELETE_WORD_START},
            <Command>{id: 'ide_editing_expand_code_block', description: 'Expand code block', defaultKeyPrintText: 'expand code block', name: CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK},
            <Command>{id: 'ide_editing_collapse_code_block', description: 'Collapse code block', defaultKeyPrintText: 'collapse code block', name: CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK},
            <Command>{id: 'ide_editing_expand_all', description: 'Expand/collapse code block', defaultKeyPrintText: 'expand all', name: CommandsDefinitions.IDE_EDITING_EXPAND_ALL},
            <Command>{id: 'ide_editing_coolapse_all', description: 'Collapse all', defaultKeyPrintText: 'collapse all', name: CommandsDefinitions.IDE_EDITING_COOLAPSE_ALL},
            <Command>{id: 'ide_editing_close_active_editor_tab', description: 'Close active editor tab', defaultKeyPrintText: 'close tab', name: CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB},
            <Command>{id: 'ide_multiple_carets_select_all_occurences',description: 'Select all occurences', defaultKeyPrintText: 'select all occurences', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES},
            <Command>{id: 'ide_multiple_carets_select_next_occurence',description: 'Select next occurence', defaultKeyPrintText: 'select next occurence', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE},
            <Command>{id: 'ide_multiple_carets_unselect_occurence',description: 'Unselect occurence', defaultKeyPrintText: 'unselect occurence', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE},
            <Command>{id: 'ide_multiple_carets_unselect_all_occurences_or_carets',description: 'Unselect all occurences or carets', defaultKeyPrintText: 'unselect all occurences', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS},

            <Command>{id: 'ide_running_select_configuration_and_run',description: 'Select configuration and run', defaultKeyPrintText: 'select and run', name: CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN},
            <Command>{id: 'ide_running_select_configuration_and_debug',description: 'Select configuration and debug', defaultKeyPrintText: 'select and debug', name: CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG},
            <Command>{id: 'ide_running_run',description: 'Run', defaultKeyPrintText: 'run', name: CommandsDefinitions.IDE_RUNNING_RUN},
            <Command>{id: 'ide_running_debug',description: 'Debug', defaultKeyPrintText: 'debug', name: CommandsDefinitions.IDE_RUNNING_DEBUG},
            <Command>{id: 'ide_runningrun_context_configuration_from_editor',description: 'Run context configuration from editor', defaultKeyPrintText: 'run context', name: CommandsDefinitions.IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR},
            <Command>{id: 'ide_running_rerun__tests',description: 'Rerun tests', defaultKeyPrintText: 'rerun tests', name: CommandsDefinitions.IDE_RUNNING_RERUN__TESTS},
            <Command>{id: 'ide_running_run_gulp_npm_grunt',description: 'Run Gulp7Grun/npm tasks', defaultKeyPrintText: 'run npm', name: CommandsDefinitions.IDE_RUNNING_RUN_GULP_NPM_GRUNT},

            // docker
            <Command>{id: 'docker_ls', description: 'Docker show all running containers', defaultKeyPrintText: 'docker\nls', name: CommandsDefinitions.DOCKER_LS},
            <Command>{id: 'docker_stop', description: 'Stop running docker container', defaultKeyPrintText: 'docker\nstop', name: CommandsDefinitions.DOCKER_STOP},
            <Command>{id: 'docker_logs', description: 'Show logs for running docker container', defaultKeyPrintText: 'docker\nlogs', name: CommandsDefinitions.DOCKER_LOGS},

            //docker-compose
            <Command>{id: 'docker_compose-up', description: 'Start all container from docker-compose', defaultKeyPrintText: 'compose\nup', name: CommandsDefinitions.DOCKER_COMPOSE_UP},
            <Command>{id: 'docker_compose-down', description: 'Stop all running docker container from docker-compose', defaultKeyPrintText: 'compose\ndown', name: CommandsDefinitions.DOCKER_COMPOSE_DOWN},
            <Command>{id: 'docker_compose-pull', description: 'Pull al required containers for docker-compose', defaultKeyPrintText: 'compose\npull', name: CommandsDefinitions.DOCKER_COMPOSE_PULL},

            // GIT
            <Command>{id: 'git checkout master branch', description: 'git checkout code master branch', defaultKeyPrintText: 'co\nmaster', name: CommandsDefinitions.GIT_CHECKOUT_MASTER},
            <Command>{id: 'git fetch', description: 'git fetch', defaultKeyPrintText: 'fetch', name: CommandsDefinitions.GIT_FETCH},
            <Command>{id: 'git pull', description: 'git pull', defaultKeyPrintText: 'pull', name: CommandsDefinitions.GIT_PULL},
            <Command>{id: 'git merge master', description: 'git merge origin/master', defaultKeyPrintText: 'merge\nmaster', name: CommandsDefinitions.GIT_MERGE_MASTER},
            <Command>{id: 'git merge develop', description: 'git merge origin/develop', defaultKeyPrintText: 'merge\ndevelop', name: CommandsDefinitions.GIT_MERGE_DEVELOP},
            <Command>{id: 'git checkout', description: 'git checkout', defaultKeyPrintText: 'co', name: CommandsDefinitions.GIT_CHECKOUT},
            <Command>{id: 'git checkout develop branch', description: 'git checkout develop branch', defaultKeyPrintText: 'co\ndevelop', name: CommandsDefinitions.GIT_CHECKOUT_DEVELOP},
            <Command>{id: 'git checkout last', description: 'git checkout last branch', defaultKeyPrintText: 'co\n-', name: CommandsDefinitions.GIT_CHECKOUT_LAST},
            <Command>{id: 'git checkout new branch', description: 'git checkout new branch', defaultKeyPrintText: 'co\n-b', name: CommandsDefinitions.GIT_CREATE_AND_CHECKOUT_NEW_BRANCH},
            <Command>{id: 'git push head', description: 'git push origin HEAD', defaultKeyPrintText: 'push\nHEAD', name: CommandsDefinitions.GIT_PUSH_ORIGIN_HEAD},
            <Command>{id: 'git push tags', description: 'git push tag', defaultKeyPrintText: 'push\ntag', name: CommandsDefinitions.GIT_PUSH_TAGS},
            <Command>{id: 'git undo commit', description: 'git undo commit', defaultKeyPrintText: 'undo\ncommit', name: CommandsDefinitions.GIT_UNDO_COMMIT},
            <Command>{id: 'git reset', description: 'git reset', defaultKeyPrintText: 'reset', name: CommandsDefinitions.GIT_RESET},
            <Command>{id: 'git delete branch', description: 'git delete branch', defaultKeyPrintText: 'delete\nbranch', name: CommandsDefinitions.GIT_DELETE_BRANCH},

            // gradle
            <Command>{id: 'gradle-reload_chanegs', description: 'gradle reload changes', defaultKeyPrintText: 'load\ngradle\nchanges', name: CommandsDefinitions.GRADLE_RELOAD_CHANGES},

            // kubectl
            <Command>{id: 'kubectl get pods', description: 'Show all kubernetes pods for selected namespace', defaultKeyPrintText: 'kube\npods', name: CommandsDefinitions.KUBECTL_GET_PODS},
            <Command>{id: 'kubectl logs', description: 'Show logs for pod', defaultKeyPrintText: 'kube\nlogs', name: CommandsDefinitions.KUBECTL_LOGS},

            // kubectx
            <Command>{id: 'kubectx', description: 'Select kubernetes Context', defaultKeyPrintText: 'kubectx', name: CommandsDefinitions.KUBECTX},

            // kubens
            <Command>{id: 'kubens', description: 'Select kubernetes namespace interactive', defaultKeyPrintText: 'kubens', name: CommandsDefinitions.KUBENS},

            // ssh-agent
            <Command>{id: 'ssh_agent-start', description: 'start ssh-agent', defaultKeyPrintText: 'ssh\nagent', name: CommandsDefinitions.SSH_AGENT_START},
            <Command>{id: 'ssh-agent-add_key', description: 'add key to ssh-agent', defaultKeyPrintText: 'add\nkey', name: CommandsDefinitions.SSH_AGENT_ADD_KEY},

            // Other
            <Command>{id: 'yes', description: 'say yes', defaultKeyPrintText:'yes', name: CommandsDefinitions.YES},
            <Command>{id: 'no', description: 'say no', defaultKeyPrintText:'no', name: CommandsDefinitions.NO}


        ];

    }

    findByCommandDefintion(commandDefinition: CommandsDefinitions) {


    this.hhhhh('ll');


    return this.findAll().filter(command => command.name === commandDefinition)[0];
    }


    hhhhh(gug) {

        console.log('hhh')

    }
}
