import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function git_default_macos(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('git_1', CommandsDefinitions.GIT_CHECKOUT_MASTER, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}master{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_2', CommandsDefinitions.GIT_FETCH, keyset, `git{${SpecialKeys.SPACE}}fetch{${SpecialKeys.SPACE}}-p{${SpecialKeys.RETURN}}`),
    ]

}
