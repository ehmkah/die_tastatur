import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function intellijClassicMaxosxExecutions(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('1', CommandsDefinitions.RERUN_LAST, keyset, `{${SpecialKeys.SHIFT}+{${SpecialKeys.F10}}}`),
        executionService.createExecution('2', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.CTRL}+{1}}`)
    ];


}