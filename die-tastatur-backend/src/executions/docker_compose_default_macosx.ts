import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function docker_compose_default_macosx(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('docker_compose-up', CommandsDefinitions.DOCKER_COMPOSE_UP, keyset, `docker-compose{${SpecialKeys.SPACE}}up{${SpecialKeys.RETURN}}`),
    ]

}