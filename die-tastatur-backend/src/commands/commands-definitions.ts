export enum CommandsDefinitions {
    // IDE Commands
    RERUN_LAST = 'rerun_last',
    JUMP_TO_PROJECT_VIEW = 'project_view',

    // Docker commands
    DOCKER_LS = 'dockerls',
    DOCKER_STOP = 'docker_stop',
    DOCKER_LOGS = 'docker_logs',

    // Docker compose
    DOCKER_COMPOSE_UP = 'docker_compose-up',

    // Git Commands
    GIT_FETCH = 'git_fetch_cmd',
    GIT_CHECKOUT_MASTER = 'checkout_master_cmd',

    // Kubectl commands
    KUBECTL_GET_PODS = 'kubectl_get_pods',
    KUBECTL_LOGS = 'kubectl_logs',

    // kubectx
    KUBECTX = "KubeCtx",

    // kubens commands
    KUBENS = 'KUBENS',

    // other
    YES = 'yes',
    NO = 'no',
}