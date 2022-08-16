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
            <Command>{id: 'jump_to_git_view', description: 'Jump to git view', defaultKeyPrintText: 'git\nview', name: CommandsDefinitions.JUMP_TO_GIT_VIEW},
            <Command>{id: 'run_last', description: 'Run last Runconfiguration', defaultKeyPrintText: 'run\nlast', name: CommandsDefinitions.RUN_LAST},
            <Command>{id: 'debug_last', description: 'Debug last Runconfiguration', defaultKeyPrintText: 'debug\nlast', name: CommandsDefinitions.DEBUG_LAST},
            <Command>{id: 'select_run', description: 'Open select menu to choose Runconfiguration', defaultKeyPrintText: 'select\nrun', name: CommandsDefinitions.SELECT_RUN},
            <Command>{id: 'select_debug', description: 'Open select menu to choose Runconfiguration to debug', defaultKeyPrintText: 'select\ndebug', name: CommandsDefinitions.SELECT_DEBUG},
            <Command>{id: 'open_git_commit', description: 'Open commit dialog', defaultKeyPrintText: 'open\nCommit', name: CommandsDefinitions.OPEN_COMMIT_DIALOG},
            <Command>{id: 'git_commit', description: 'commit', defaultKeyPrintText: 'commit', name: CommandsDefinitions.COMMIT},
            <Command>{id: 'git_push', description: 'push', defaultKeyPrintText: 'push', name: CommandsDefinitions.PUSH_1},
            <Command>{id: 'git_push_2', description: 'push2', defaultKeyPrintText: 'push2', name: CommandsDefinitions.PUSH_2},
            <Command>{id: 'toggle_breakpoint', description: 'Toggle breakpoint', defaultKeyPrintText: 'toggle\nbreakpoint', name: CommandsDefinitions.IDE_TOGGLE_BREAKPOINT},
            <Command>{id: 'ide_debug_stepover', description: 'Step over', defaultKeyPrintText: 'step-over', name: CommandsDefinitions.IDE_DEBUG_STEP_OVER},
            <Command>{id: 'ide_debug_stepinto', description: 'Step into', defaultKeyPrintText: 'step-into', name: CommandsDefinitions.IDE_DEBUG_STEP_INTO},
            <Command>{id: 'ide_debug_stepout', description: 'Step out', defaultKeyPrintText: 'step-out', name: CommandsDefinitions.IDE_DEBUG_STEP_OUT},
            <Command>{id: 'ide_debug_evaluateExpression', description: 'Evaluate expression', defaultKeyPrintText: 'evaluate', name: CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION},
            <Command>{id: 'ide_navigation_goto_declaration', description: 'Goto declaration', defaultKeyPrintText: 'declaration', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION},
            <Command>{id: 'ide_navigation_goto_class', description: 'Goto class', defaultKeyPrintText: 'goto\nclass', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS},
            <Command>{id: 'ide_navigation_goto_file', description: 'Goto file', defaultKeyPrintText: 'goto\nfile', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE},
            <Command>{id: 'ide_navigation_goto_symbol', description: 'Goto symbo', defaultKeyPrintText: 'goto\nsymbol', name: CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL},
            <Command>{id: 'IDE_EDITING_GENERATE', description: 'Generate Code', defaultKeyPrintText: 'generate', name: CommandsDefinitions.IDE_EDITING_GENERATE},
            <Command>{id: 'IDE_EDITING_SURROUND', description: 'Surround with if, try, for', defaultKeyPrintText: 'surround', name: CommandsDefinitions.IDE_EDITING_SURROUND},
            <Command>{id: 'IDE_EDITING_INSERT_LIVE_TEMPLATE', description: 'Insert live template', defaultKeyPrintText: 'live template', name: CommandsDefinitions.IDE_EDITING_INSERT_LIVE_TEMPLATE},
            <Command>{id: 'IDE_EDITING_COMMENT_OR_UNCOMMENT', description: 'Comment/uncomment with line command', defaultKeyPrintText: 'command', name: CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT},
            <Command>{id: 'ide_editing_reformat_code', description: 'Reformat code', defaultKeyPrintText: 'reformat', name: CommandsDefinitions.IDE_EDITING_REFORMAT_CODE},
            <Command>{id: 'IDE_EDITING_DUPLICATE_LINE', description: 'Duplicate current line or selected block', defaultKeyPrintText: 'duplicate', name: CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE},
            <Command>{id: 'IDE_EDITING_DELETE_LINE', description: 'Delete current line', defaultKeyPrintText: 'delete line', name: CommandsDefinitions.IDE_EDITING_DELETE_LINE},

            <Command>{id: 'ide_editing_basic_code_completion', description: 'Basic code completion', defaultKeyPrintText: 'code complete', name: CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION},
            <Command>{id: 'ide_editing_show_intention_action_quick_fixes', description: 'Show intention action and quick-fixes', defaultKeyPrintText: 'quick fixes', name: CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES},
            <Command>{id: 'ide_editing_parameter_info', description: 'Parameter info (within method call argument)', defaultKeyPrintText: 'parameter info', name: CommandsDefinitions.IDE_EDITING_PARAMETER_INFO},
            <Command>{id: 'ide_editing_quick_documentation_lookup', description: 'Quick documentation lookup', defaultKeyPrintText: 'docu lookup', name: CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP},
            <Command>{id: 'ide_editing_show_description_error_or_warning_at_carret', description: 'Show description or error or warning at caret', defaultKeyPrintText: 'error description', name: CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET},
            <Command>{id: 'ide_editing_comment_with_block', description: 'Comment/ uncomment with block comment', defaultKeyPrintText: 'comment block', name: CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK},
            <Command>{id: 'ide_editing_select_successivly', description: 'Select successively increasing code blocks', defaultKeyPrintText: 'increase select', name: CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY},
            <Command>{id: 'ide_editing_decrease_current_selection', description: 'Decrease current selection to previous state', defaultKeyPrintText: 'decrease select', name: CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION},
            <Command>{id: 'ide_editing_context_info', description: 'Context info', defaultKeyPrintText: 'context info', name: CommandsDefinitions.IDE_EDITING_CONTEXT_INFO},
            <Command>{id: 'ide_editing_auto_indent_line', description: 'Auto-indent-line(s)', defaultKeyPrintText: 'auto indent', name: CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE},
            <Command>{id: 'ide_editing_indent_selected_lines', description: 'Indent selected lines', defaultKeyPrintText: 'indent line', name: CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES},
            <Command>{id: 'ide_editing_unindent_selected_lines', description: 'Unindent selected lines', defaultKeyPrintText: 'unindent line', name: CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES},
            <Command>{id: 'ide_editing_paste_from_recent_buffer', description: 'Paste from recent buffers', defaultKeyPrintText: 'paste from buffers', name: CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER},
            <Command>{id: 'ide_editing_move_line_up', description: 'Move line up', defaultKeyPrintText: 'line up', name: CommandsDefinitions.IDE_EDITING_MOVE_LINE_UP},
            <Command>{id: 'ide_editing_move_line_down', description: 'Move line down', defaultKeyPrintText: 'line down', name: CommandsDefinitions.IDE_EDITING_MOVE_LINE_DOWN},
            <Command>{id: 'ide_editing_join_lines', description: 'Join lines', defaultKeyPrintText: 'line join', name: CommandsDefinitions.IDE_EDITING_JOIN_LINES},
            <Command>{id: 'ide_editing_split_lines', description: 'Split line', defaultKeyPrintText: 'line split', name: CommandsDefinitions.IDE_EDITING_SPLIT_LINES},
            <Command>{id: 'ide_editing_start_new_lines', description: 'Start new line', defaultKeyPrintText: 'new line', name: CommandsDefinitions.IDE_EDITING_START_NEW_LINES},
            <Command>{id: 'ide_editing_toggle_case_word', description: 'Toggle case for word at caret or selection', defaultKeyPrintText: 'toggle word case', name: CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD},
            <Command>{id: 'ide_editing_select_till_code_block_end', description: 'Select till code block end', defaultKeyPrintText: 'select code end', name: CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END},
            <Command>{id: 'ide_editing_select_till_code_block_start', description: 'Select till code block start', defaultKeyPrintText: 'select code start', name: CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START},
            <Command>{id: 'ide_editing_delete_word_end', description: 'Select till code block start', defaultKeyPrintText: 'delete word end', name: CommandsDefinitions.IDE_EDITING_DELETE_WORD_END},
            <Command>{id: 'ide_editing_delete_word_start', description: 'Delete to word end', defaultKeyPrintText: 'delete word start', name: CommandsDefinitions.IDE_EDITING_DELETE_WORD_START},
            <Command>{id: 'ide_editing_expand_code_block', description: 'Expand code block', defaultKeyPrintText: 'expand code block', name: CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK},
            <Command>{id: 'ide_editing_collapse_code_block', description: 'Collapse code block', defaultKeyPrintText: 'collapse code block', name: CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK},
            <Command>{id: 'ide_editing_expand_all', description: 'Expand/collapse code block', defaultKeyPrintText: 'expand all', name: CommandsDefinitions.IDE_EDITING_EXPAND_ALL},
            <Command>{id: 'ide_editing_coolapse_all', description: 'Collapse all', defaultKeyPrintText: 'collapse all', name: CommandsDefinitions.IDE_EDITING_COOLAPSE_ALL},
            <Command>{id: 'ide_editing_close_active_editor_tab', description: 'Close active editor tab', defaultKeyPrintText: 'close tab', name: CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB},
            <Command>{id: 'ide_multiple_carets_select_all_occurences',description: 'Select all occurences', defaultKeyPrintText: 'select all occurences', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES},
            <Command>{id: 'ide_multiple_carets_select_next_occurence',description: 'Select next occurence', defaultKeyPrintText: 'select next occurence', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE},
            <Command>{id: 'ide_multiple_carets_unselect_occurence',description: 'Unselect occurence', defaultKeyPrintText: 'unselect occurence', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE},
            <Command>{id: 'ide_multiple_carets_unselect_all_occurences_or_carets',description: 'Unselect all occurences or carets', defaultKeyPrintText: 'unselect all occurences', name: CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_ALL_OCCURENCES_OR_CARETS},

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
