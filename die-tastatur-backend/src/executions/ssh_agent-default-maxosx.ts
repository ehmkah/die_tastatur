import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function ssh_agentDefaultMaxosx(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('ssh_agent-start', CommandsDefinitions.SSH_AGENT_START, keyset, `ssh-agent{${SpecialKeys.SPACE}}bash{${SpecialKeys.RETURN}}`),
        executionService.createExecution('ssh_agent-add_key', CommandsDefinitions.SSH_AGENT_ADD_KEY, keyset, `ssh-add{${SpecialKeys.SPACE}}~/.ssh/id_rsa{${SpecialKeys.RETURN}}`),
    ]

}