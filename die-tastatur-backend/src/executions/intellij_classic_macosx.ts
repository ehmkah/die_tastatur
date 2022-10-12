import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetsService} from "../keysets/keysets.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";


/**
 * defines shortcuts for Intellij classic on macosx
 * @param executionService
 * @param keyset
 */
export function intellijClassicMaxosxExecutions(executionService: ExecutionsService, keysetService: KeysetsService): Array<Execution> {

    class InternalExecution {
        command: CommandsDefinitions;
        executor: string;


        constructor(command: CommandsDefinitions, executor: string) {
            this.command = command;
            this.executor = executor;
        }
    }

    let keyset = keysetService.findByName(KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX);

    const executions = [
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND, `{${SpecialKeys.LWIN}+f}`)
    ];


    const resultPrepare = {
        keyset: keyset,
        executions: executions
    }

    let idCounter = 0;
    let result = [];

    resultPrepare.executions.forEach(value => {
            idCounter = idCounter + 1;
            result.push(executionService.createExecution(idCounter.toString(), value.command, keyset, value.executor));
        }
    );


    return result;

    //[
    //   executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.LWIN}+1}`),


    //];
}