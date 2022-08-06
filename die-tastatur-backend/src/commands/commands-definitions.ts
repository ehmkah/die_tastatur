export enum CommandsDefinitions {
    // IDE Commands
    JUMP_TO_PROJECT_VIEW = 'project_view',
    RUN_LAST = 'run_last',
    DEBUG_LAST='debug_last',
    SELECT_RUN='select_run',
    SELECT_DEBUG='select_debug',

    // Docker commands
    DOCKER_LS = 'dockerls',
    DOCKER_STOP = 'docker_stop',
    DOCKER_LOGS = 'docker_logs',

    // Docker compose
    DOCKER_COMPOSE_UP = 'docker_compose-up',
    DOCKER_COMPOSE_DOWN = 'docker_compose-down',
    DOCKER_COMPOSE_PULL = 'docker_compose-pull',

    // Git Commands
    GIT_FETCH = 'git_fetch_cmd',
    GIT_CHECKOUT_MASTER = 'checkout_master_cmd',

    // Gradle
    GRADLE_RELOAD_CHANGES = 'gradle-reload_changes',

    // Kubectl commands
    KUBECTL_GET_PODS = 'kubectl_get_pods',
    KUBECTL_LOGS = 'kubectl_logs',

    // kubectx
    KUBECTX = "KubeCtx",

    // kubens commands
    KUBENS = 'KUBENS',

    // ssh
    SSH_AGENT_START = 'ssh_agent-start',
    SSH_AGENT_ADD_KEY = 'ssh_agent_addkey',

    // other
    YES = 'yes',
    NO = 'no',
}