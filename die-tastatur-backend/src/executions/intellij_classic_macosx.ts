import {Execution} from "./execution.interface";
import {SpecialKeys} from "./special_keys";
import {ExecutionsService} from "./executions.service";
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
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND, `{${SpecialKeys.LWIN}+f}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_SEARCH_EVERYWHERE, `${SpecialKeys.SHIFT}${SpecialKeys.SHIFT}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES,`{${SpecialKeys.ALT}+${SpecialKeys.RETURN}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_GENERATE,`{${SpecialKeys.ALT}+${SpecialKeys.INS}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_PARAMETER_INFO,`{${SpecialKeys.CTRL}+p}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SELECT_SUCCESSIVLY,`{${SpecialKeys.CTRL}+w}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_DECREASE_CURRENT_SELECTION,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+w}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP,`{${SpecialKeys.CTRL}+e}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_RENAME,`{${SpecialKeys.SHIFT}+${SpecialKeys.F6}}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_0,`{${SpecialKeys.ALT}+0}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_1,`{${SpecialKeys.ALT}+1}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_2,`{${SpecialKeys.ALT}+2}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_3,`{${SpecialKeys.ALT}+3}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_4,`{${SpecialKeys.ALT}+4}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_5,`{${SpecialKeys.ALT}+5}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_6,`{${SpecialKeys.ALT}+6}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_7,`{${SpecialKeys.ALT}+7}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_8,`{${SpecialKeys.ALT}+8}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_CORRESPONDING_TOOL_WINDOW_9,`{${SpecialKeys.ALT}+9}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_SAVE_ALL,`{${SpecialKeys.CTRL}+S}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+${SpecialKeys.F12}}}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_INSPECT_CURRENT_FILE,`{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+i}}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_QUICK_SWITCH_CURRENT_SCHEME,`{${SpecialKeys.CTRL}+\`}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+s}}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_FIND_ACTION,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+a}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_OVER,`${SpecialKeys.F8}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_INTO,`${SpecialKeys.F7}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_SMART_STEP_INTO,`{${SpecialKeys.SHIFT}+${SpecialKeys.F7}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_OUT,`{${SpecialKeys.SHIFT}+${SpecialKeys.F8}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_RUN_TO_CURSOR,`{${SpecialKeys.ALT}+${SpecialKeys.F9}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_EVALUATE_EXPRESSION,`{${SpecialKeys.ALT}+${SpecialKeys.F8}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_RESUME,`${SpecialKeys.F9}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT,`{${SpecialKeys.CTRL}+${SpecialKeys.F8}}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_VIEW_BREAKPOINT,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+${SpecialKeys.F8}}}`),
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_SEARCH_EVERYWHERE,`{${SpecialKeys.SHIFT}+${SpecialKeys.SHIFT}}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND,`{${SpecialKeys.CTRL}+f}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_NEXT,`${SpecialKeys.F3}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS,`{${SpecialKeys.SHIFT}+${SpecialKeys.F3}}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE,`{${SpecialKeys.CTRL}+r}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_IN_PATH,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+f}}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE_IN_PATH,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+r}}`),
        new InternalExecution(CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_NEXT_OCCURENCE,`{${SpecialKeys.ALT}+j}`),
        new InternalExecution(CommandsDefinitions.IDE_MULTIPLE_CARETS_SELECT_ALL_OCCURENCES,`{${SpecialKeys.ALT}+{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+j}}}`),
        new InternalExecution(CommandsDefinitions.IDE_MULTIPLE_CARETS_UNSELECT_OCCURENCE,`{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}++j}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_BASIC_CODE_COMPLETION,`{${SpecialKeys.CTRL}+${SpecialKeys.SPACE}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_PARAMETER_INFO,`{${SpecialKeys.CTRL}+p}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_QUICK_DOCUMENTATION_LOOKUP,`{${SpecialKeys.CTRL}+q}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SHOW_DESCRIPTION_ERROR_OR_WARNING_AT_CARRET,`{${SpecialKeys.CTRL}+${SpecialKeys.F1}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SURROUND,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+t}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT,`{${SpecialKeys.CTRL}+${SpecialKeys.DIV}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+${SpecialKeys.DIV}}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_CONTEXT_INFO,`{${SpecialKeys.ALT}+q}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SHOW_INTENTION_ACTION_QUICK_FIXES,`{${SpecialKeys.ALT}+${SpecialKeys.RETURN}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_REFORMAT_CODE,`{${SpecialKeys.ALT}+{${SpecialKeys.CTRL}+l}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_AUTO_INDENT_LINE,`{${SpecialKeys.ALT}+{${SpecialKeys.CTRL}+i}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_INDENT_SELECTED_LINES,`${SpecialKeys.TAB}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_UNINDENT_SELECTED_LINES,`{${SpecialKeys.SHIFT}+${SpecialKeys.TAB}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_PASTE_FROM_RECENT_BUFFER,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+v}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_DUPLICATE_LINE,`{${SpecialKeys.CTRL}+d}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_START_NEW_LINES,`{${SpecialKeys.SHIFT}+${SpecialKeys.RETURN}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_TOGGLE_CASE_WORD,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+u}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_END,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+]}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_SELECT_TILL_CODE_BLOCK_START,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+[}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_DELETE_WORD_END,`{${SpecialKeys.CTRL}+${SpecialKeys.DELETE}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_DELETE_WORD_START,`{${SpecialKeys.CTRL}+${SpecialKeys.BACKSPACE}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_EXPAND_CODE_BLOCK,`{${SpecialKeys.CTRL}+${SpecialKeys.PLUS}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COLLAPSE_CODE_BLOCK,`{${SpecialKeys.CTRL}+${SpecialKeys.MINUS}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_EXPAND_ALL,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+${SpecialKeys.PLUS}}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COOLAPSE_ALL,`{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+${SpecialKeys.MINUS}}}`),
        new InternalExecution(CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB,`{${SpecialKeys.CTRL}+${SpecialKeys.F4}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_COPY,`${SpecialKeys.F5}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_MOVE,`${SpecialKeys.F6}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_SAFE_DELETE,`{${SpecialKeys.ALT}+${SpecialKeys.DELETE}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_RENAME,`{${SpecialKeys.SHIFT}+${SpecialKeys.F6}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_REFACTOR_THIS,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+{${SpecialKeys.SHIFT}+t}}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_CHANGE_FUNCTION_SIGNATURE,`{${SpecialKeys.CTRL}+${SpecialKeys.F6}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_INLINE_VARIABLE,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+n}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_EXTRACT_METHOD,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+m}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_EXTRACT_VARIABLE,`{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+v}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_EXTRACT_FIELD, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+f}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_EXTRACT_CONSTANT, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+c}}`),
        new InternalExecution(CommandsDefinitions.IDE_REFACTORING_EXTRACT_PARAMETER, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+p}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_CLASS, `{${SpecialKeys.CTRL}+n}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+n}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+{${SpecialKeys.ALT}+n}}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_EDITOR_TAB, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_RIGHT}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_EDITOR_TAB, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_LEFT}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION__GO_BACK_TO_PREVIOUS_TOOL_WINDOW, `${SpecialKeys.F12}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GO_TO_EDITOR, `${SpecialKeys.ESCAPE}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, `{${SpecialKeys.CTRL}+g}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_RECENT_FILES_POPUP, `{${SpecialKeys.CTRL}+e}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_BACK, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+{${SpecialKeys.CURSOR_LEFT}}}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_FORWARD, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+{${SpecialKeys.CURSOR_RIGHT}}}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_NAVIGATE_TO_LAST_EDIT_LOCATION, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+{${SpecialKeys.BACKSPACE}}}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_DECLARATION, `{${SpecialKeys.CTRL}+b}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+b}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_OPEN_QUICK_DEFINITION_LOOKUP, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+i}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_SUPER_METHOD_SUPER_CLASS, `{${SpecialKeys.CTRL}+u}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_NEXT_METHOD, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_UP}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_PREVIOUS_METHOD, `{${SpecialKeys.ALT}+${SpecialKeys.CURSOR_DOWN}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_MOVE_CODE_BLOCK_END, `{${SpecialKeys.CTRL}+]}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_MOVE_CODEBLOCK_START, `{${SpecialKeys.CTRL}+[}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_FILE_STRUCTURE_PIOPUP, `{${SpecialKeys.CTRL}+${SpecialKeys.F12}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_TYPE_HIERACHIY, `{${SpecialKeys.CTRL}+h}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_CALL_HIERACHY, `{${SpecialKeys.CTRL}+{${SpecialKeys.ALT}+h}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, `{${SpecialKeys.F2}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, `{${SpecialKeys.SHIFT}+${SpecialKeys.F2}}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOOMARK, `${SpecialKeys.F11}`),
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_TOGGLE_BOOKMARK_WITH_MNEMOCONIC, `{${SpecialKeys.CTRL}+${SpecialKeys.F11}}`),

        /**
         *
         * Go to numbered bookmark
         * Ctrl + #[0-9]
         *
         * Show bookmarks
         * Shift + F11
         *
         * COMPILE AND RUN
         *
         * Build project
         * Ctrl + F9
         *
         * Compile selected file, package or module
         * Ctrl + Shift + F9
         *
         * Select configuration and run / debug
         * Alt + Shift + F10 / F9
         *
         * Run /Debug
         * Shift + F10 / F9
         *
         * Run context configuration from editor
         * Ctrl + Shift + F10
         *
         * Run anything
         * Double Ctrl
         *
         * USAGE SEARCH
         *
         * Find usages /Find usages in file
         * Alt + F7 / Ctrl + F7
         *
         * Highlight usages in file
         * Ctrl + Shift + F7
         *
         * Show usages
         * Ctrl + Alt + F7
         *
         * VCS / LOCAL HISTORY
         *
         * Commit project to VCS
         * Ctrl + K
         *
         * Update project from VCS
         * Ctrl + T
         *
         * Push commits
         * Ctrl + Shift + K
         *
         * ‘VCS’ quick popup
         * Alt+BackQuote (`)
         *
         * LIVE TEMPLATES
         *
         * Surround with Live Template
         * Ctrl + Alt + J
         *
         * Insert Live Template
         * Ctrl +
         *
         * neue Commandos
         *
         * Synchronize
         * Ctrl + Alt + Y
         *
         * Open Project Structure dialog
         * Ctrl + Alt + Shift + S
         *
         * Smart code completion
         * Ctrl + Shift + Space
         *
         * Complete statement
         * Ctrl + Shift + Enter
         *
         * External Doc
         * Shift + F1
         *
         * Brief Info
         * Ctrl + mouse
         *
         * Generate code...
         * Alt + Insert
         *
         * Generate code...
         * Alt + Insert
         *
         * Implement methods
         * Ctrl + I
         *
         * Extend selection
         * Ctrl + W
         *
         * Shrink selection
         * Ctrl + Shift + W
         *
         * Optimize imports
         * Ctrl + Alt + O
         *
         * Cut current line to clipboard
         * Ctrl+X, Shift+Delete
         *
         * Copy current line to clipboard
         * Ctrl + C , Ctrl + Insert
         *
         * Paste from clipboard
         * Ctrl+V, Shift+Insert

         Delete line at caret
         Ctrl + Y

         Smart line join
         Ctrl + Shift + J

         Smart line split
         Ctrl + Enter

         Hide active or last active window
         Shift + Esc

         Recent locations popup
         Ctrl + Shift + E

         Select current file or symbol in any view
         Alt + F1

         Go to type declaration
         Ctrl + Shift + B

         Method hierarchy
         Ctrl + Shift + H

         Edit source /View source
         F4 / Ctrl + Enter

         Show navigation bar
         Alt + Home
         */

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

}