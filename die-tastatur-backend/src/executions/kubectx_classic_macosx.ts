import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function kubectx_default_macos(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('kubectx', CommandsDefinitions.KUBECTX, keyset, `kubectx{${SpecialKeys.RETURN}}`),
    ]

}