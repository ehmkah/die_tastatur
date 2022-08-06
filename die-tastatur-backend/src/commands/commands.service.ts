import {Injectable} from '@nestjs/common';
import {Command} from "./command.interface";
import {CommandsDefinitions} from "./commands-definitions";

@Injectable()
export class CommandsService {

    // All commands which are supported at the moment
    findAll(): Array<Command> {
        return [
            // IDEs
            <Command>{id: 'jump_to_project_view', description: 'Jump to project view', defaultKeyPrintText: 'to projectview', name: CommandsDefinitions.JUMP_TO_PROJECT_VIEW},
            <Command>{id: 'run_last', description: 'Run last Runconfiguration', defaultKeyPrintText: 'run\nlast', name: CommandsDefinitions.RUN_LAST},
            <Command>{id: 'debug_last', description: 'Debug last Runconfiguration', defaultKeyPrintText: 'debug\nlast', name: CommandsDefinitions.DEBUG_LAST},
            <Command>{id: 'select_run', description: 'Open select menu to choose Runconfiguration', defaultKeyPrintText: 'select\nrun', name: CommandsDefinitions.SELECT_RUN},
            <Command>{id: 'select_debug', description: 'Open select menu to choose Runconfiguration to debug', defaultKeyPrintText: 'select\ndebug', name: CommandsDefinitions.SELECT_DEBUG},

            // docker
            <Command>{id: 'docker_ls', description: 'Docker show all running containers', defaultKeyPrintText: 'docker\nls', name: CommandsDefinitions.DOCKER_LS},
            <Command>{id: 'docker_stop', description: 'Stop running docker container', defaultKeyPrintText: 'docker\nstop', name: CommandsDefinitions.DOCKER_STOP},
            <Command>{id: 'docker_logs', description: 'Show logs for running docker container', defaultKeyPrintText: 'docker\nlogs', name: CommandsDefinitions.DOCKER_LOGS},

            //docker-compose
            <Command>{id: 'docker_compose-up', description: 'Start all container from docker-compose', defaultKeyPrintText: 'compose\nup', name: CommandsDefinitions.DOCKER_COMPOSE_UP},
            <Command>{id: 'docker_compose-down', description: 'Stop all running docker container from docker-compose', defaultKeyPrintText: 'compose\ndown', name: CommandsDefinitions.DOCKER_COMPOSE_DOWN},
            <Command>{id: 'docker_compose-pull', description: 'Pull al required containers for docker-compose', defaultKeyPrintText: 'compose\npull', name: CommandsDefinitions.DOCKER_COMPOSE_PULL},

            // GIT
            <Command>{id: 'git checkout master branch', description: 'git checkout code master branch', defaultKeyPrintText: 'co\nmaster', name: CommandsDefinitions.GIT_CHECKOUT_MASTER},
            <Command>{id: 'git fetch', description: 'git fetch', defaultKeyPrintText: 'fetch', name: CommandsDefinitions.GIT_FETCH},
            <Command>{id: 'git pull', description: 'git pull', defaultKeyPrintText: 'pull', name: CommandsDefinitions.GIT_PULL},
            <Command>{id: 'git merge master', description: 'git merge origin/master', defaultKeyPrintText: 'merge\nmaster', name: CommandsDefinitions.GIT_MERGE_MASTER},
            <Command>{id: 'git merge develop', description: 'git merge origin/develop', defaultKeyPrintText: 'merge\ndevelop', name: CommandsDefinitions.GIT_MERGE_DEVELOP},
            <Command>{id: 'git checkout', description: 'git checkout', defaultKeyPrintText: 'co', name: CommandsDefinitions.GIT_CHECKOUT},
            <Command>{id: 'git checkout develop branch', description: 'git checkout develop branch', defaultKeyPrintText: 'co\ndevelop', name: CommandsDefinitions.GIT_CHECKOUT_DEVELOP},
            <Command>{id: 'git checkout last', description: 'git checkout last branch', defaultKeyPrintText: 'co\n-', name: CommandsDefinitions.GIT_CHECKOUT_LAST},
            <Command>{id: 'git checkout new branch', description: 'git checkout new branch', defaultKeyPrintText: 'co\n-b', name: CommandsDefinitions.GIT_CREATE_AND_CHECKOUT_NEW_BRANCH},
            <Command>{id: 'git push head', description: 'git push origin HEAD', defaultKeyPrintText: 'push\nHEAD', name: CommandsDefinitions.GIT_PUSH_ORIGIN_HEAD},
            <Command>{id: 'git push tags', description: 'git push tag', defaultKeyPrintText: 'push\ntag', name: CommandsDefinitions.GIT_PUSH_TAGS},
            <Command>{id: 'git undo commit', description: 'git undo commit', defaultKeyPrintText: 'undo\ncommit', name: CommandsDefinitions.GIT_UNDO_COMMIT},
            <Command>{id: 'git reset', description: 'git reset', defaultKeyPrintText: 'reset', name: CommandsDefinitions.GIT_RESET},
            <Command>{id: 'git delete branch', description: 'git delete branch', defaultKeyPrintText: 'delete\nbranch', name: CommandsDefinitions.GIT_DELETE_BRANCH},

            // gradle
            <Command>{id: 'gradle-reload_chanegs', description: 'gradle reload changes', defaultKeyPrintText: 'load\ngradle\nchanges', name: CommandsDefinitions.GRADLE_RELOAD_CHANGES},

            // kubectl
            <Command>{id: 'kubectl get pods', description: 'Show all kubernetes pods for selected namespace', defaultKeyPrintText: 'kube\npods', name: CommandsDefinitions.KUBECTL_GET_PODS},
            <Command>{id: 'kubectl logs', description: 'Show logs for pod', defaultKeyPrintText: 'kube\nlogs', name: CommandsDefinitions.KUBECTL_LOGS},

            // kubectx
            <Command>{id: 'kubectx', description: 'Select kubernetes Context', defaultKeyPrintText: 'kubectx', name: CommandsDefinitions.KUBECTX},

            // kubens
            <Command>{id: 'kubens', description: 'Select kubernetes namespace interactive', defaultKeyPrintText: 'kubens', name: CommandsDefinitions.KUBENS},

            // ssh-agent
            <Command>{id: 'ssh_agent-start', description: 'start ssh-agent', defaultKeyPrintText: 'ssh\nagent', name: CommandsDefinitions.SSH_AGENT_START},
            <Command>{id: 'ssh-agent-add_key', description: 'add key to ssh-agent', defaultKeyPrintText: 'add\nkey', name: CommandsDefinitions.SSH_AGENT_ADD_KEY},

            // Other
            <Command>{id: 'yes', description: 'say yes', defaultKeyPrintText:'yes', name: CommandsDefinitions.YES},
            <Command>{id: 'no', description: 'say no', defaultKeyPrintText:'no', name: CommandsDefinitions.NO}
        ];
    }

    findByCommandDefintion(commandDefinition: CommandsDefinitions) {
        return this.findAll().filter(command => command.name === commandDefinition)[0];
    }

}
