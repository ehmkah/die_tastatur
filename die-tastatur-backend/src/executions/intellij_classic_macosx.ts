import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function intellijClassicMaxosxExecutions(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('git_view', CommandsDefinitions.JUMP_TO_GIT_VIEW, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('2', CommandsDefinitions.RUN_LAST, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.F10}}}`),
        executionService.createExecution('3', CommandsDefinitions.DEBUG_LAST, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('4', CommandsDefinitions.SELECT_RUN, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('5', CommandsDefinitions.SELECT_DEBUG, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('6', CommandsDefinitions.GRADLE_RELOAD_CHANGES, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('7', CommandsDefinitions.OPEN_COMMIT_DIALOG, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('8', CommandsDefinitions.COMMIT, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('9', CommandsDefinitions.PUSH_1, keyset, `{${SpecialKeys.CTRL}+{1}}`),
        executionService.createExecution('10', CommandsDefinitions.PUSH_2, keyset, `{${SpecialKeys.CTRL}+{1}}`),
    ];


}