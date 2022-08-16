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
        executionService.createExecution('11', CommandsDefinitions.IDE_TOGGLE_BREAKPOINT, keyset, `{${SpecialKeys.LWIN}+${SpecialKeys.F8}`),
        executionService.createExecution('12', CommandsDefinitions.IDE_DEBUG_STEP_OVER, keyset, `${SpecialKeys.F8}`),
        executionService.createExecution('13', CommandsDefinitions.IDE_DEBUG_STEP_INTO, keyset, `${SpecialKeys.F7}`),
        executionService.createExecution('14', CommandsDefinitions.IDE_DEBUG_STEP_OUT, keyset, `{${SpecialKeys.SHIFT} + ${SpecialKeys.F7}}`),
        executionService.createExecution('15', CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION, keyset, `{${SpecialKeys.ALT} + ${SpecialKeys.F8}}`),
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
    ];


}