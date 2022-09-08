import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function otherDefaultAll(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('empty', CommandsDefinitions.EMPTY_COMMAND, keyset, ``),
    ]

}
