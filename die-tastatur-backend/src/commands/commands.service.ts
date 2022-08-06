import {Injectable} from '@nestjs/common';
import {Command} from "./command.interface";
import {CommandsDefinitions} from "./commands-definitions";

@Injectable()
export class CommandsService {

    // All commands which are supported at the moment
    findAll(): Array<Command> {
        return [
            // IDEs
            <Command>{id: 'rerun_last', description: 'Rerun last run', defaultKeyPrintText: 'rerun', name: CommandsDefinitions.RERUN_LAST},
            <Command>{id: 'jump_to_project_view', description: 'Jump to project view', defaultKeyPrintText: 'to projectview', name: CommandsDefinitions.JUMP_TO_PROJECT_VIEW},

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

            // kubectl
            <Command>{id: 'kubectl get pods', description: 'Show all kubernetes pods for selected namespace', defaultKeyPrintText: 'kube\npods', name: CommandsDefinitions.KUBECTL_GET_PODS},
            <Command>{id: 'kubectl logs', description: 'Show logs for pod', defaultKeyPrintText: 'kube\nlogs', name: CommandsDefinitions.KUBECTL_LOGS},

            // kubectx
            <Command>{id: 'kubectx', description: 'Select kubernetes Context', defaultKeyPrintText: 'kubectx', name: CommandsDefinitions.KUBECTX},

            // kubens
            <Command>{id: 'kubens', description: 'Select kubernetes namespace interactive', defaultKeyPrintText: 'kubens', name: CommandsDefinitions.KUBENS},

            // Other
            <Command>{id: 'yes', description: 'say yes', name: CommandsDefinitions.YES},
            <Command>{id: 'no', description: 'say no', name: CommandsDefinitions.NO}
        ];
    }

    findByCommandDefintion(commandDefinition: CommandsDefinitions) {
        return this.findAll().filter(command => command.name === commandDefinition)[0];
    }

}
