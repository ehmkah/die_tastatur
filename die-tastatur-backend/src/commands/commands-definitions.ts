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
    GIT_FETCH = 'git-fetch',
    GIT_PULL = 'git-pull',
    GIT_MERGE_MASTER = 'git-merge_master',
    GIT_MERGE_DEVELOP = 'git-merge_develop',
    GIT_CHECKOUT = 'git-checkout',
    GIT_CHECKOUT_MASTER = 'git-checkout_master',
    GIT_CHECKOUT_DEVELOP = 'git-checkout_develop',
    GIT_CHECKOUT_LAST = 'git-checkout_last',
    GIT_CREATE_AND_CHECKOUT_NEW_BRANCH = 'git-create_and_checkout_new_branch',
    GIT_PUSH_ORIGIN_HEAD = 'git-push_origin_head',
    GIT_PUSH_TAGS = 'git-push_tags',
    GIT_UNDO_COMMIT = 'git-undo_commit',
    GIT_RESET = 'git-reset',
    GIT_DELETE_BRANCH = 'git-delete-branch',

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