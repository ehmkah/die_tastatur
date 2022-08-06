import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function shellDefaultMacosx(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('shell-yes', CommandsDefinitions.YES, keyset, `yes{${SpecialKeys.RETURN}}`),
        executionService.createExecution('shell-no', CommandsDefinitions.NO, keyset, `no{${SpecialKeys.RETURN}}`),
    ]

}