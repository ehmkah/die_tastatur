import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function intellijClassicMaxosxExecutions(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('git_view', CommandsDefinitions.JUMP_TO_GIT_VIEW, keyset, `{${SpecialKeys.LWIN}+9}`),
        executionService.createExecution('2', CommandsDefinitions.RUN_LAST, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.F10}}}`),
        executionService.createExecution('3', CommandsDefinitions.DEBUG_LAST, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.F9}}}`),
        executionService.createExecution('4', CommandsDefinitions.SELECT_RUN, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+{${SpecialKeys.F10}}}}`),
        executionService.createExecution('5', CommandsDefinitions.SELECT_DEBUG, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+{${SpecialKeys.F9}}}}`),
        executionService.createExecution('6', CommandsDefinitions.GRADLE_RELOAD_CHANGES, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+O}}`),
        executionService.createExecution('7', CommandsDefinitions.OPEN_COMMIT_DIALOG, keyset, `{${SpecialKeys.CTRL}+k}`),
        executionService.createExecution('8', CommandsDefinitions.COMMIT, keyset, `{${SpecialKeys.ALT}+i}`),
        executionService.createExecution('9', CommandsDefinitions.PUSH_1, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+k}}`),
        executionService.createExecution('10', CommandsDefinitions.PUSH_2, keyset, `{${SpecialKeys.ALT}+p}`),

        executionService.createExecution('12', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keyset, `${SpecialKeys.F8}`),
        executionService.createExecution('11', CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F8}`),
        executionService.createExecution('13', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keyset, `${SpecialKeys.F7}`),
        executionService.createExecution('14', CommandsDefinitions.IDE_DEBUG_STEP_OUT, keyset, `{${SpecialKeys.SHIFT} + ${SpecialKeys.F7}}`),
        executionService.createExecution('15', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keyset, `{${SpecialKeys.ALT} + ${SpecialKeys.F8}}`),

        executionService.createExecution('ide_debug_smart_step_into', CommandsDefinitions.IDE_DEBUG_SMART_STEP_INTO, keyset, `{${SpecialKeys.SHIFT}+${SpecialKeys.F7}`),
        executionService.createExecution('ide_debug_run_to_cursor', CommandsDefinitions.IDE_DEBUG_RUN_TO_CURSOR, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.F9}`),
        executionService.createExecution('ide_debug_resume', CommandsDefinitions.IDE_DEBUG_RESUME, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+R}}`),
        executionService.createExecution('ide_debug_view_breakpoint', CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+${SpecialKeys.F8}}`),




        executionService.createExecution('16', CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, keyset, `{${SpecialKeys.LWIN}+B`),
        executionService.createExecution('17', CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, keyset, `{${SpecialKeys.LWIN}+O}`),
        executionService.createExecution('18', CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+O}}`),
        executionService.createExecution('19', CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+O}}`),
        executionService.createExecution('20', CommandsDefinitions.IDE_EDITING_GENERATE, keyset, `{${SpecialKeys.LWIN}+N}`),
        executionService.createExecution('21', CommandsDefinitions.IDE_EDITING_SURROUND, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+T}}`),
        executionService.createExecution('22', CommandsDefinitions.IDE_EDITING_INSERT_LIVE_TEMPLATE, keyset, `{${SpecialKeys.LWIN}+J}`),
        executionService.createExecution('23', CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, keyset, `{${SpecialKeys.LWIN}+/}`),
        executionService.createExecution('24', CommandsDefinitions.IDE_EDITING_REFORMAT_CODE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+L}}`),
        executionService.createExecution('25', CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE, keyset, `{${SpecialKeys.LWIN}+L}`),
        executionService.createExecution('26', CommandsDefinitions.IDE_EDITING_DELETE_LINE, keyset, `{${SpecialKeys.LWIN}+BACKSPACE???}`),
        executionService.createExecution('IDE_EDITING_BASIC_CODE_COMPLETION', CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION, keyset, `{${SpecialKeys.CTRL}+${SpecialKeys.SPACE}`),
        executionService.createExecution('IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES', CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES, keyset, `{${SpecialKeys.ALT}+${SpecialKeys.RETURN}}`),
        executionService.createExecution('IDE_EDITING_PARAMETER_INFO', CommandsDefinitions.IDE_EDITING_PARAMETER_INFO, keyset, `{${SpecialKeys.LWIN}+P}`),
        executionService.createExecution('IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP', CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP, keyset, `{${SpecialKeys.CTRL}+J}`),
        executionService.createExecution('IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET', CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F1}}`),
        executionService.createExecution('IDE_EDITING_COMMENT_WITH_BLOCK', CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+/}}`),
        executionService.createExecution('IDE_EDITING_SELECT_SUCCESSIVLY', CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY, keyset, `{${SpecialKeys.ALT}+CURSORUP}`),
        executionService.createExecution('IDE_EDITING_DECREASE_CURRENT_SELECTION', CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION, keyset, `{${SpecialKeys.ALT}+CURSOR_DOWN}`),
        executionService.createExecution('IDE_EDITING_CONTEXT_INFO', CommandsDefinitions.IDE_EDITING_CONTEXT_INFO, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+Q}}`),
        executionService.createExecution('IDE_EDITING_AUTO_INDENT_LINE', CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+I}}`),
        executionService.createExecution('IDE_EDITING_INDENT_SELECTED_LINES', CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES, keyset, `TAB`),
        executionService.createExecution('IDE_EDITING_UNINDENT_SELECTED_LINES', CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES, keyset, `{${SpecialKeys.SHIFT}+TAB}`),
        executionService.createExecution('IDE_EDITING_PASTE_FROM_RECENT_BUFFER', CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+V}}`),
        executionService.createExecution('IDE_EDITING_MOVE_LINE_UP', CommandsDefinitions.IDE_EDITING_MOVE_LINE_UP, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+CURSOR_UP}}`),
        executionService.createExecution('IDE_EDITING_MOVE_LINE_DOWN', CommandsDefinitions.IDE_EDITING_MOVE_LINE_DOWN, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+CURSOR_DOWN}}`),
        executionService.createExecution('IDE_EDITING_JOIN_LINES', CommandsDefinitions.IDE_EDITING_JOIN_LINES, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+J}}`),
        executionService.createExecution('IDE_EDITING_SPLIT_LINES', CommandsDefinitions.IDE_EDITING_SPLIT_LINES, keyset, `{${SpecialKeys.LWIN} + ${SpecialKeys.RETURN}}`),
        executionService.createExecution('IDE_EDITING_START_NEW_LINES', CommandsDefinitions.IDE_EDITING_START_NEW_LINES, keyset, `{${SpecialKeys.SHIFT}+ ${SpecialKeys.RETURN}`),
        executionService.createExecution('IDE_EDITING_TOGGLE_CASE_WORD', CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD, keyset, `{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT} + U}}`),
        executionService.createExecution('IDE_EDITING_SELECT_TILL_CODE_BLOCK_END', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+ ]}}}}`),
        executionService.createExecution('IDE_EDITING_SELECT_TILL_CODE_BLOCK_START', CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}+{${SpecialKeys.LWIN}+{${SpecialKeys.SHIFT}+ [}}}}`),
        executionService.createExecution('IDE_EDITING_DELETE_WORD_END', CommandsDefinitions.IDE_EDITING_DELETE_WORD_END, keyset, `{${SpecialKeys.ALT}+DELETE_RIGHT}`),
        executionService.createExecution('IDE_EDITING_DELETE_WORD_START', CommandsDefinitions.IDE_EDITING_DELETE_WORD_START, keyset, `{${SpecialKeys.ALT}+DELETE}`),
        executionService.createExecution('IDE_EDITING_EXPAND_CODE_BLOCK', CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK, keyset, `{${SpecialKeys.LWIN}++`),
        executionService.createExecution('IDE_EDITING_COLLAPSE_CODE_BLOCK', CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK, keyset, `{${SpecialKeys.LWIN}+-`),
        executionService.createExecution('IDE_EDITING_EXPAND_ALL', CommandsDefinitions.IDE_EDITING_EXPAND_ALL, keyset, `{${SpecialKeys.LWIN}++}`),
        executionService.createExecution('IDE_EDITING_COOLAPSE_ALL', CommandsDefinitions.IDE_EDITING_COOLAPSE_ALL, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.LWIN}+-}}`),
        executionService.createExecution('IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB', CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB, keyset, `{${SpecialKeys.LWIN}+W}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.LWIN}+G}}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE', CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE, keyset, `{${SpecialKeys.ALT}+G}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+G}}`),
        executionService.createExecution('IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS', CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS, keyset, `???`),

        executionService.createExecution('IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_RUN, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+R}}`),
        executionService.createExecution('IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG', CommandsDefinitions.IDE_RUNNING_SELECT_CONFIGURATION_AND_DEBUG, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}}+D}`),
        executionService.createExecution('IDE_RUNNING_RUN', CommandsDefinitions.IDE_RUNNING_RUN, keyset, `{${SpecialKeys.CTRL}+R}`),
        executionService.createExecution('IDE_RUNNING_DEBUG', CommandsDefinitions.IDE_RUNNING_DEBUG, keyset, `{${SpecialKeys.CTRL}+D}`),
        executionService.createExecution('IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR', CommandsDefinitions.IDE_RUNNINGRUN_CONTEXT_CONFIGURATION_FROM_EDITOR, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+R}}`),
        executionService.createExecution('IDE_RUNNING_RERUN__TESTS', CommandsDefinitions.IDE_RUNNING_RERUN__TESTS, keyset, `{${SpecialKeys.CTRL}+{${SpecialKeys.LWIN}}+R}`),
        executionService.createExecution('IDE_RUNNING_RUN_GULP_NPM_GRUNT', CommandsDefinitions.IDE_RUNNING_RUN_GULP_NPM_GRUNT, keyset, `{${SpecialKeys.ALT}+{${SpecialKeys.F11}}`),


    ];


}