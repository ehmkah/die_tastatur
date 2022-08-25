import {Injectable} from '@nestjs/common';
import {Execution} from "./execution.interface";
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {webstormDefaultMaxosxExecutions} from "./webstorm_classic_macosx";
import {git_default_macos} from "./git_default_macos";
import {kubect_default_macos} from "./kubect_default_macos";
import {kubens_default_macos} from "./kubens_default_macos";
import {kubectx_default_macos} from "./kubectx_classic_macosx";
import {docker_default_macos} from "./docker_default_macosx";
import {docker_compose_default_macosx} from "./docker_compose_default_macosx";
import {shellDefaultMacosx} from "./shell-default-macosx";
import {ssh_agentDefaultMaxosx} from "./ssh_agent-default-maxosx";

@Injectable()
export class ExecutionsService {

    constructor(private keysetService: KeysetsService,
                private commandService: CommandsService) {
    }

    findAll(): Array<Execution> {

        const executions: Array<Execution> = webstormDefaultMaxosxExecutions(this, this.keysetService.findByName(KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX)).concat(
            git_default_macos(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            kubect_default_macos(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            kubens_default_macos(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            kubectx_default_macos(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            docker_default_macos(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            docker_compose_default_macosx(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            shellDefaultMacosx(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX))).concat(
            ssh_agentDefaultMaxosx(this, this.keysetService.findByName(KeysetDefinitions.TERMINAL_MACOSX)));

        return executions;
    }

    findByCommandIDAndKeysetId(commandName: CommandsDefinitions, keysetName: KeysetDefinitions): Execution {
        if (null == commandName || null == keysetName) {
            return undefined;
        }
        const matchingExecutions = this.findAll().filter(e => e.command.name === commandName && e.keyset.name === keysetName);

        return matchingExecutions[0];
    }


    createExecution(id: string, commandDefinition: CommandsDefinitions, keyset: Keyset, executor: string): Execution {
        const command = this.commandService.findByCommandDefintion(commandDefinition);
        return <Execution>{
            id: id,
            executor: executor,
            keyset,
            command
        }
    }


}

class KrauTest extends ExecutionsService{

    findAll(): Array<Execution> {


        return super.findAll();

    }

    heuuL() {
        const heud = 'ju';
    }
}