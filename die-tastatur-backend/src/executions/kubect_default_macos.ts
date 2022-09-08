import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function kubect_default_macos(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('kubectl_1', CommandsDefinitions.KUBECTL_GET_PODS, keyset, `kubectl{${SpecialKeys.SPACE}}get{${SpecialKeys.SPACE}}pods{${SpecialKeys.RETURN}}`),
        executionService.createExecution('kubectl_2', CommandsDefinitions.KUBECTL_LOGS, keyset, `kubectl{${SpecialKeys.SPACE}}logs{${SpecialKeys.SPACE}}-f{${SpecialKeys.SPACE}}`),
    ]

}