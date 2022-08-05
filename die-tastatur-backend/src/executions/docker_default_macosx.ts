import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function docker_default_macos(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('docker_ls', CommandsDefinitions.DOCKER_LS, keyset, `docker{${SpecialKeys.SPACE}}ls{${SpecialKeys.RETURN}}`),
        executionService.createExecution('docker_stop', CommandsDefinitions.DOCKER_STOP, keyset, `docker{${SpecialKeys.SPACE}}stop{${SpecialKeys.SPACE}}`),
        executionService.createExecution('docker_logs', CommandsDefinitions.DOCKER_LOGS, keyset, `docker{${SpecialKeys.SPACE}}logs{${SpecialKeys.SPACE}}`),
    ]

}