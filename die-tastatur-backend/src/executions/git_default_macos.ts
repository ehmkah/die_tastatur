import {ExecutionsService} from "./executions.service";
import {Keyset} from "../keysets/keyset.interface";
import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function git_default_macos(executionService: ExecutionsService, keyset: Keyset): Array<Execution> {

    return [
        executionService.createExecution('git_1', CommandsDefinitions.GIT_CHECKOUT_MASTER, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}master{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_2', CommandsDefinitions.GIT_FETCH, keyset, `git{${SpecialKeys.SPACE}}fetch{${SpecialKeys.SPACE}}-p{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_3', CommandsDefinitions.GIT_PULL, keyset, `git{${SpecialKeys.SPACE}}pull{${SpecialKeys.SPACE}}-p{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_4', CommandsDefinitions.GIT_MERGE_MASTER, keyset, `git{${SpecialKeys.SPACE}}merge{${SpecialKeys.SPACE}}origin/master{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_5', CommandsDefinitions.GIT_MERGE_DEVELOP, keyset, `git{${SpecialKeys.SPACE}}merge{${SpecialKeys.SPACE}}origin/develop{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_6', CommandsDefinitions.GIT_CHECKOUT_DEVELOP, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}develop{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_7', CommandsDefinitions.GIT_CHECKOUT_LAST, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}-{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_8', CommandsDefinitions.GIT_CREATE_AND_CHECKOUT_NEW_BRANCH, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}-b{${SpecialKeys.SPACE}}`),
        executionService.createExecution('git_9', CommandsDefinitions.GIT_CHECKOUT, keyset, `git{${SpecialKeys.SPACE}}checkout{${SpecialKeys.SPACE}}`),
        executionService.createExecution('git_10', CommandsDefinitions.GIT_PUSH_ORIGIN_HEAD, keyset, `git{${SpecialKeys.SPACE}}push{${SpecialKeys.SPACE}}-u{${SpecialKeys.SPACE}}origin{${SpecialKeys.SPACE}}HEAD{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_11', CommandsDefinitions.GIT_PUSH_TAGS, keyset, `git{${SpecialKeys.SPACE}}push{${SpecialKeys.SPACE}}-u{${SpecialKeys.SPACE}}origin{${SpecialKeys.SPACE}}--tags{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_12', CommandsDefinitions.GIT_UNDO_COMMIT, keyset, `git{${SpecialKeys.SPACE}}reset{${SpecialKeys.SPACE}}HEAD{${SpecialKeys.ALT}+n}{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_13', CommandsDefinitions.GIT_RESET, keyset, `git{${SpecialKeys.SPACE}}reset{${SpecialKeys.SPACE}}--hard{${SpecialKeys.RETURN}}`),
        executionService.createExecution('git_14', CommandsDefinitions.GIT_DELETE_BRANCH, keyset, `git{${SpecialKeys.SPACE}}branch{${SpecialKeys.SPACE}}-D{${SpecialKeys.SPACE}}`),
    ]

}
