export enum CommandsDefinitions {

    // Empty command, allows explicitly to define empty keys
    EMPTY_COMMAND = 'empty',

    // WINDOW Manager available in nearly all applications
    GENERAL_CUT = 'GENERAL_CUT',

    // IDE Commands
    JUMP_TO_PROJECT_VIEW = 'project_view',
    JUMP_TO_GIT_VIEW = 'git_view',
    OPEN_COMMIT_DIALOG = 'open_commit_dialog',
    COMMIT = 'commit_taken',
    PUSH_1 = 'push_1',
    GIT_COMMIT_AND_PUSH = 'push_2',
    IDE_DEBUG_STEP_OVER = 'step_over',
    IDE_DEBUG_STEP_INTO = 'step_into',
    IDE_DEBUG_SMART_STEP_INTO = 'smart_step_into',
    IDE_DEBUG_STEP_OUT = 'step_out',
    IDE_DEBUG_RUN_TO_CURSOR = 'ide_debug_run_to_cursor',
    IDE_DEBUG_EVALUATE_EXPRESSION = 'evaluate_expression',
    IDE_DEBUG_RESUME = 'ide_debug_resume',
    IDE_DEBUG_TOGGLE_BREAKPOINT = 'toggle_breakpoint',
    IDE_DEBUG_VIEW_BREAKPOINT = 'ide_toggle_view_breakpoint',
    IDE_DEBUG_TOGGLE_BREAKPOINTS_ON_OFF = 'breakpoints_toggle_on_off',
    IDE_DEBUG_STOP = 'IDE_DEBUG_STOP',

    IDE_NAVIGATION_GOTO_DECLARATION = 'goto_declaration',
    IDE_NAVIGATION_GOTO_CLASS = 'goto_class',
    IDE_NAVIGATION_GOTO_FILE = 'goto_file',
    IDE_NAVIGATION_GOTO_SYMBOL = 'goto_symbol',
    IDE_NAVIGATION_GOTO_NEXT_EDITOR_TAB = 'ide_navigation_goto_next_editor_tab',
    IDE_NAVIGATION_GOTO_PREVIOUS_EDITOR_TAB = 'ide_navigation_goto_previous_editor_tab',
    IDE_NAVIGATION__GO_BACK_TO_PREVIOUS_TOOL_WINDOW = 'ide_navigation__go_back_to_previous_tool_window',
    IDE_NAVIGATION_GO_TO_EDITOR = 'ide_navigation_go_to_editor',
    IDE_NAVIGATION_GO_TO_LINE = 'ide_navigation_go_to_line',
    IDE_NAVIGATION_RECENT_FILES_POPUP = 'ide_navigation_recent_files_popup',
    IDE_NAVIGATION_NAVIGATE_BACK = 'ide_navigation_navigate_back',
    IDE_NAVIGATION_NAVIGATE_FORWARD = 'ide_navigation_navigate_forward',
    IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION = 'ide_navigation_navigate_to_last_edit_location',
    IDE_NAVIGATION_SELECT_CURRENT_FILE_IN_ANY_VIEW = 'ide_navigation_select_current_file_in_any_view',
    IDE_NAVIGATION_GOTO_IMPLEMENTATION = 'ide_navigation_goto_implementation',
    IDE_NAVIGATION_OPEN_QUICK_DEFINITION_LOOKUP = 'ide_navigation_open_quick_definition_lookup',
    IDE_NAVIGATION_GOTO_TYPE_DEFINITION = 'ide_navigation_goto_type_definitiaon',
    IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS = 'ide_navigation_goto_super_method_super_class',
    IDE_NAVIGATION_GOTO_PREVIOUS_METHOD = 'ide_navigation_goto_previous_method',
    IDE_NAVIGATION_GOTO_NEXT_METHOD = 'ide_navigation_goto_next_method',
    IDE_NAVIGATION_MOVE_CODE_BLOCK_END = 'ide_navigation_move_code_block_end',
    IDE_NAVIGATION_MOVE_CODEBLOCK_START = 'ide_navigation_move_codeblock_start',
    IDE_NAVIGATION_MOVE_CARET_MATCHING_BRACE = 'ide_navigation_move_caret_matching_brace',
    IDE_NAVIGATION_FILE_STRUCTURE_PIOPUP = 'ide_navigation_file_structure_piopup',
    IDE_NAVIGATION_TYPE_HIERACHIY = 'ide_navigation_type_hierachiy',
    IDE_NAVIGATION_METHOD_HIERACHIY = 'IDE_NAVIGATION_METHOD_HIERACHIY',
    IDE_NAVIGATION_CALL_HIERACHY = 'ide_navigation_call_hierachy',
    IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR = 'ide_navigation_next_highlighted_error',
    IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR = 'ide_navigation_previous_highlighted_error',
    IDE_NAVIGATION_JUMP_TO_SOURCE = 'ide_navigation_jump_to_source',
    IDE_NAVIGATION_JUMP_TO_NAVIGATION_BAR = 'ide_navigation__jump_to_navigation_bar',
    IDE_NAVIGATION_TOGGLE_BOOOMARK = 'IDE_NAVIGATION_TOGGLE_BOOOMARK',
    IDE_NAVIGATION_TOGGLE_BOOKMARK_WITH_MNEMOCONIC = 'ide_navigation_toggle_bookmark_with_mnemoconic',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_0 = 'ide_navigation_goto_numbered_bookmark_0',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_1 = 'ide_navigation_goto_numbered_bookmark_1',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_2 = 'ide_navigation_goto_numbered_bookmark_2',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_3 = 'ide_navigation_goto_numbered_bookmark_3',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_4 = 'ide_navigation_goto_numbered_bookmark_4',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_5 = 'ide_navigation_goto_numbered_bookmark_5',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_6 = 'ide_navigation_goto_numbered_bookmark_6',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_7 = 'ide_navigation_goto_numbered_bookmark_7',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_8 = 'ide_navigation_goto_numbered_bookmark_8',
    IDE_NAVIGATION_GOTO_NUMBERED_BOOKMARK_9 = 'ide_navigation_goto_numbered_bookmark_9',
    IDE_NAVIGATION_SHOW_BOOKMARK = 'ide_navigation_show_bookmark',
    IDE_SEARCH_AND_REPLACE_FIND = 'ide_search_and_replace_find',
    IDE_SEARCH_AND_REPLACE_REPLACE = 'ide_search_and_replace_replace',
    IDE_SEARCH_AND_REPLACE_FIND_NEXT = 'ide_search_and_replace_find_next',
    IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS = 'ide_search_and_replace_replace_next',
    IDE_SEARCH_AND_REPLACE_FIND_IN_PATH = 'ide_search_and_replace_find_in_path',
    IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH = 'ide_search_and_replace_replace_in_path',
    IDE_USAGE_SEARCH_FIND_USAGE = 'ide_usage_search_find_usage',
    IDE_USAGE_SEARCH_FIND_USAGE_IN_FILE = 'ide_usage_search_find_usage_in_file',
    IDE_USAGE_SEARCH_HIGHLIGHT_USAGE_IN_FILE = 'ide_usage_search_highlight_usage_in_file',
    IDE_USAGE_SEARCH_SHOW_USAGE = 'ide_usage_search_show_usage',
    IDE_REFACTORING_REFACTOR_THIS = 'ide_refactoring_refactor_this',
    IDE_REFACTORING_COPY = 'ide_refactoring_copy',
    IDE_REFACTORING_MOVE = 'ide_refactoring_move',
    IDE_REFACTORING_SAFE_DELETE = 'ide_refactoring_safe_delete',
    IDE_REFACTORING_RENAME = 'ide_refactoring_rename',
    IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE = 'ide_refactoring_change_function_signature',
    IDE_REFACTORING_INLINE_VARIABLE = 'ide_refactoring_inline_variable',
    IDE_REFACTORING_EXTRACT_VARIABLE = 'ide_refactoring_extract_variable',
    IDE_REFACTORING_EXTRACT_CONSTANT = 'ide_refactoring_extract_constant',
    IDE_REFACTORING_EXTRACT_PARAMETER = 'ide_refactoring_extract_parameter',
    IDE_REFACTORING_EXTRACT_METHOD = 'IDE_REFACTORING_EXTRACT_METHOD',
    IDE_REFACTORING_EXTRACT_FIELD = 'IDE_REFACTORING_EXTRACT_FIELD',

    IDE_VCS_QUICK_POPUP = 'ide_vcs_quick_popup',
    IDE_VCS_COMMIT_TO_VCS = 'ide_vcs_commit_to_vcs',
    IDE_VCS_UPDATE_TO_VCS = 'IDE_VCS_UPDATE_TO_VCS',
    IDE_VCS_PUSH_TO_VCS = 'IDE_VCS_PUSH_TO_VCS',
    IDE_VCS_UPDATE_PROJECCT_FROM_VCS = 'ide_vcs_update_projecct_from_vcs',
    IDE_VCS_VIEW_RECENT_CHANGES = 'ide_vcs_view_recent_changes',

    IDE_GENERAL_SEARCH_EVERYWHERE = 'ide_general_search_everywhere',
    IDE_GENERAL_FIND_ACTION = 'ide_general_find_action',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_0 = 'ide_general_open_corresponding_tool_window_0',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_1 = 'ide_general_open_corresponding_tool_window_1',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_2 = 'ide_general_open_corresponding_tool_window_2',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_3 = 'ide_general_open_corresponding_tool_window_3',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_4 = 'ide_general_open_corresponding_tool_window_4',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_5 = 'ide_general_open_corresponding_tool_window_5',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_6 = 'ide_general_open_corresponding_tool_window_6',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_7 = 'ide_general_open_corresponding_tool_window_7',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_8 = 'ide_general_open_corresponding_tool_window_8',
    IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_9 = 'ide_general_open_corresponding_tool_window_9',
    IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW = 'ide_general_toggle_maximize_window',
    IDE_GENERAL_ADD_FO_FAVORITES = 'ide_general_add_fo_favorites',
    IDE_GENERAL_INSPECT_CURRENT_FILE = 'ide_general_inspect_current_file',
    IDE_GENERAL_QUICK_SWITCH_CURRENT_SCHEME = 'ide_general_quick_switch_current_scheme',
    IDE_GENERAL_OPEN_PREFERENCES = 'ide_general_open_preferences',
    IDE_GENERAL_SWITCH_BETWEEN_TAB_AND_TOOL_WINDOW = 'ide_general_switch_between_tab_and_tool_window',
    IDE_GENERAL_SAVE_ALL = 'IDE_GENERAL_SAVE_ALL',
    IDE_GENERAL_SYNCHRONIZE = 'IDE_GENERAL_SYNCHRONIZE',
    IDE_GENERAL_OPEN_PROJECT_STRUCTURE = 'IDE_GENERAL_OPEN_PROJECT_STRUCTURE',
    IDE_GENERAL_HIDE_ACTIVE_VIEW = 'IDE_GENERAL_HIDE_ACTIVE_VIEW',
    IDE_GENERAL_SELECT_CURRENT_FILE_IN_ANY_VIEW = 'IDE_GENERAL_SELECT_CURRENT_FILE_IN_ANY_VIEW',
    IDE_GENERAL_COLUMN_SELECTION_MODE = 'IDE_GENERAL_COLUMN_SELECTION_MODE',

    IDE_EDITING_GENERATE = 'ide_editing_generate',
    IDE_EDITING_SURROUND = 'ide_editing_surround',
    IDE_EDITING_INSERT_LIVE_TEMPLATE = 'ide_insert_live_template',
    IDE_EDITING_SURROUND_LIVE_TEMPLATE = 'IDE_EDITING_SURROUND_LIVE_TEMPLATE',
    IDE_EDITING_COMMENT_OR_UNCOMMENT = 'ide_editing_comment_or_uncomment',
    IDE_EDITING_REFORMAT_CODE = 'ide_editing_reformat_code',
    IDE_EDITING_OPTIMISE_IMPORTS = 'IDE_EDITING_OPTIMISE_IMPORTS',
    IDE_EDITING_DUPLICATE_LINE = 'ide_editing_duplicate_line',
    IDE_EDITING_COPY_LINE = 'IDE_EDITING_COPY_LINE',
    IDE_EDITING_DELETE_LINE = 'ide_editing_delete_line',
    IDE_EDITING_INSERT_LINE_BELOW = 'ide_insert_line_below',
    IDE_EDITING_BASIC_CODE_COMPLETION = 'IDE_EDITING_BASIC_CODE_COMPLETION',
    IDE_EDITING_SMART_CODE_COMPLETION = 'IDE_EDITING_SMART_CODE_COMPLETION',
    IDE_EDITING_COMPLETE_STATEMENT = 'IDE_EDITING_COMPLETE_STATEMENT',
    IDE_EDITING_GENERATE_CODE = 'IDE_EDITING_GENERATE_CODE',
    IDE_EDITING_IMPLEMENT_METHODS = 'IDE_EDITING_IMPLEMENT_METHODS',
    IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES = 'ide_editing_show_intention_action_quick_fixes',
    IDE_EDITING_PARAMETER_INFO = 'ide_editing_parameter_info',
    IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP = 'ide_editing_quick_documentation_lookup',
    IDE_EDITING_OPEN_EXTERNAL_DOCUMENTATION = 'IDE_EDITING_OPEN_EXTERNAL_DOCUMENTATION',
    IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET = 'ide_editing_show_description_error_or_warning_at_carret',
    IDE_EDITING_COMMENT_WITH_BLOCK = 'ide_editing_comment_with_block',
    IDE_EDITING_SELECT_SUCCESSIVLY = 'ide_editing_select_successivly',
    IDE_EDITING_DECREASE_CURRENT_SELECTION = 'ide_editing_decrease_current_selection',
    IDE_EDITING_CONTEXT_INFO = 'ide_editing_context_info',
    IDE_EDITING_AUTO_INDENT_LINE = 'IDE_EDITING_AUTO_INDENT_LINE',
    IDE_EDITING_INDENT_SELECTED_LINES = 'ide_editing_indent_selected_lines',
    IDE_EDITING_UNINDENT_SELECTED_LINES = 'ide_editing_unindent_selected_lines',
    IDE_EDITING_PASTE_FROM_RECENT_BUFFER = 'ide_editing_paste_from_recent_buffer',
    IDE_EDITING_MOVE_LINE_UP = 'ide_editing_move_line_up',
    IDE_EDITING_MOVE_LINE_DOWN = 'ide_editing_move_line_down',
    IDE_EDITING_JOIN_LINES = 'ide_editing_join_lines',
    IDE_EDITING_SPLIT_LINES = 'ide_editing_split_lines',
    IDE_EDITING_START_NEW_LINES = 'ide_editing_start_new_lines',
    IDE_EDITING_TOGGLE_CASE_WORD = 'ide_editing_toggle_case_word',
    IDE_EDITING_SELECT_TILL_CODE_BLOCK_END = 'ide_editing_select_till_code_block_end',
    IDE_EDITING_SELECT_TILL_CODE_BLOCK_START = 'ide_editing_select_till_code_block_start',
    IDE_EDITING_DELETE_WORD_END = 'ide_editing_delete_word_end',
    IDE_EDITING_DELETE_WORD_START = 'ide_editing_delete_word_start',
    IDE_EDITING_EXPAND_CODE_BLOCK = 'ide_editing_expand_code_block',
    IDE_EDITING_COLLAPSE_CODE_BLOCK = 'ide_editing_collapse_code_block',
    IDE_EDITING_EXPAND_ALL = 'ide_editing_expand_all',
    IDE_EDITING_COOLAPSE_ALL = 'ide_editing_coolapse_all',
    IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB = 'ide_editing_close_active_editor_tab',
    IDE_CREATE_NEW_FILE = 'ide_create_new_file',

    IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES = 'ide_multiple_carets_select_all_occurences',
    IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE = 'ide_multiple_carets_select_next_occurence',
    IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE = 'ide_multiple_carets_unselect_occurence',
    IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS = 'ide_multiple_carets_unselect_all_occurences_or_carets',

    IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN = 'ide_running_select_configuration_and_run',
    IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG = 'ide_running_select_configuration_and_debug',
    IDE_RUNNING_RUN = 'ide_running_run',
    IDE_RUNNING_DEBUG = 'ide_running_debug',
    IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR = 'ide_runningrun_context_configuration_from_editor',
    IDE_RUNNINGRUN_RUN_ANYTHING = 'IDE_RUNNINGRUN_RUN_ANYTHING',
    IDE_RUNNING_RERUN__TESTS = 'ide_running_rerun__tests',
    IDE_RUNNING_RUN_GULP_NPM_GRUNT = 'ide_running_run_gulp_npm_grunt',
    IDE_RUNNING_BUILD_PROJECT = 'IDE_RUNNING_BUILD_PROJECT',




// Docker commands
    DOCKER_LS = 'dockerls',
    DOCKER_STOP = 'docker_stop',
    DOCKER_LOGS = 'docker_logs',

    // Docker compose
    DOCKER_COMPOSE_UP = 'docker_compose-up',
    DOCKER_COMPOSE_DOWN = 'docker_compose-down',
    DOCKER_COMPOSE_PULL = 'docker_compose-pull',

    // Git Commands
    GIT_FETCH = 'git-fetch',
    GIT_PULL = 'git-pull',
    GIT_MERGE_MASTER = 'git-merge_master',
    GIT_MERGE_DEVELOP = 'git-merge_develop',
    GIT_CHECKOUT = 'git-checkout',
    GIT_CHECKOUT_MASTER = 'git-checkout_master',
    GIT_CHECKOUT_DEVELOP = 'git-checkout_develop',
    GIT_CHECKOUT_LAST = 'git-checkout_last',
    GIT_CREATE_AND_CHECKOUT_NEW_BRANCH = 'git-create_and_checkout_new_branch',
    GIT_PUSH_ORIGIN_HEAD = 'git-push_origin_head',
    GIT_PUSH_TAGS = 'git-push_tags',
    GIT_UNDO_COMMIT = 'git-undo_commit',
    GIT_RESET = 'git-reset',
    GIT_DELETE_BRANCH = 'git-delete-branch',

    // Gradle
    GRADLE_RELOAD_CHANGES = 'gradle-reload_changes',

    // Kubectl commands
    KUBECTL_GET_PODS = 'kubectl_get_pods',
    KUBECTL_LOGS = 'kubectl_logs',

    // kubectx
    KUBECTX = "KubeCtx",

    // kubens commands
    KUBENS = 'KUBENS',

    // ssh
    SSH_AGENT_START = 'ssh_agent-start',
    SSH_AGENT_ADD_KEY = 'ssh_agent_addkey',

    // other
    YES = 'yes',
    NO = 'no',
}