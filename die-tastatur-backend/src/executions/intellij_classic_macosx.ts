import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";


/**
 * defines shortcuts for Intellij classic on macosx
 * @param executionService
 * @param keyset
 */
export function intellijClassicMaxosxExecutions(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.LWIN}+1}`),

    ];
}