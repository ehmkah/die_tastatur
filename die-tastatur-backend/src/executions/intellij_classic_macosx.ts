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


        /**
         * SEARCH / REPLACE
         *
         * Search everywhere
         * Double Shift
         *
         * Find
         * Ctrl + F
         *
         * Find next / previous
         * F3 / Shift + F3
         *
         * Replace
         * Ctrl + R
         *
         * Find in path
         * Ctrl + Shift + F
         *
         * Replace in path
         * Ctrl + Shift + R
         *
         * Select next occurrence
         * Alt + J
         *
         * Select all occurrences
         * Ctrl + Alt + Shift + J
         *
         * Unselect occurrence
         * Alt + Shift + J
         *
         * EDITING
         *
         * Basic code completion
         * Ctrl + Space
         *
         * Smart code completion
         * Ctrl + Shift + Space
         *
         * Complete statement
         * Ctrl + Shift + Enter
         *
         * Parameter info
         * Ctrl + P
         *
         * Quick documentation lookup
         * Ctrl + Q
         *
         * External Doc
         * Shift + F1
         *
         * Brief Info
         * Ctrl + mouse
         *
         * Show descriptions of error at caret
         * Ctrl + F1
         *
         * Generate code...
         * Alt + Insert
         *
         * Override methods
         * Ctrl + O
         *
         * Implement methods
         * Ctrl + I
         *
         * Surround with...
         * Ctrl + Alt + T
         *
         * Comment / uncomment with line comment
         * Ctrl + /
         *
         * Comment / uncomment with block comment
         * Ctrl + Shift + /
         *
         * Extend selection
         * Ctrl + W
         *
         * Shrink selection
         * Ctrl + Shift + W
         *
         * Context info
         * Alt + Q
         *
         * Show intention actions and quick-fixes
         * Alt + Enter
         *
         * Reformat code
         * Ctrl + Alt + L
         *
         * Optimize imports
         * Ctrl + Alt + O
         *
         * Auto-indent line(s)
         * Ctrl + Alt + I
         *
         * Indent /unindent selected lines
         * Tab / Shift + Tab
         *
         * Cut current line to clipboard
         * Ctrl+X, Shift+Delete
         *
         * Copy current line to clipboard
         * Ctrl + C , Ctrl + Insert
         *
         * Paste from clipboard
         * Ctrl+V, Shift+Insert
         *
         * Paste from recent buffers...
         * Ctrl + Shift + V
         *
         * Duplicate current line
         * Ctrl + D
         *
         * Delete line at caret
         * Ctrl + Y
         *
         * Smart line join
         * Ctrl + Shift + J
         *
         * Smart line split
         * Ctrl + Enter
         *
         * Start new line
         * Shift + Enter
         *
         * Toggle case for word at caret or selected block Ctrl + Shift + U
         *
         * Select till code block end / start
         * Ctrl + Shift + ] / [
         *
         * Delete to word end
         * Ctrl + Delete
         *
         * Delete to word start
         * Ctrl + Backspace
         *
         * Expand /collapse code block
         * Ctrl + NumPad+ / -
         *
         * Expand al
         * Ctrl + Shift + NumPad+
         *
         * Collapse all
         * Ctrl + Shift + NumPad-
         *
         * Close active editor tab
         * Ctrl + F4
         *
         * REFACTORING
         *
         * Copy
         * F5
         *
         * Move
         * F6
         *
         * Safe Delete
         * Alt + Delete
         *
         * Rename
         * Shift + F6
         *
         * Refactor this
         * Ctrl + Alt + Shift + T
         *
         * Change Signature
         * Ctrl + F6
         *
         * Inline
         * Ctrl + Alt + N
         *
         * Extract Method
         * Ctrl + Alt + M
         *
         * Extract Variable
         * Ctrl + Alt + V
         *
         * Extract Field
         * Ctrl + Alt + F
         *
         * Extract Constant
         * Ctrl + Alt + C
         *
         * Extract Parameter
         * Ctrl + Alt + P
         *
         * NAVIGATION
         *
         * Go to class
         * Ctrl + N
         *
         * Go to file
         * Ctrl + Shift + N
         *
         * Go to symbol
         * Ctrl + Alt + Shift + N
         *
         * Go to next /previous editor tab
         * Alt + Right / Left
         *
         * Go back to previous tool window
         * F12
         *
         * Go to editor (from tool window)
         * Esc
         *
         * Hide active or last active window
         * Shift + Esc
         *
         * Go to line
         * Ctrl + G
         *
         * Recent files popup
         * Ctrl + E
         *
         * Recent locations popup
         * Ctrl + Shift + E
         *
         * Navigate back / forward
         * Ctrl + Alt + Left / Right
         *
         * Navigate to last edit location
         * Ctrl + Shift + Backspace
         *
         * Select current file or symbol in any view
         * Alt + F1
         *
         * Go to declaration
         * Ctrl+B, Ctrl+Click
         *
         * Go to implementation(s)
         * Ctrl + Alt + B
         *
         * Open quick definition lookup
         * Ctrl + Shift + I
         *
         * Go to type declaration
         * Ctrl + Shift + B
         *
         * Go to super-method / super-class
         * Ctrl + U
         *
         * Go to previous /next method
         * Alt + Up / Down
         *
         * Move to code block end / start
         * Ctrl + ] / [
         *
         * File structure popup
         * Ctrl + F12
         *
         * Type hierarchy
         * Ctrl + H
         *
         * Method hierarchy
         * Ctrl + Shift + H
         *
         * Call hierarchy
         * Ctrl + Alt + H
         *
         * Next /Previous highlighted error
         * F2 / Shift + F2
         *
         * Edit source /View source
         * F4 / Ctrl + Enter
         *
         * Show navigation bar
         * Alt + Home
         *
         * Toggle bookmark
         * F11
         *
         * Toggle bookmark with mnemonic
         * Ctrl + F11
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

    //[
    //   executionService.createExecution('1', CommandsDefinitions.JUMP_TO_PROJECT_VIEW, keyset, `{${SpecialKeys.LWIN}+1}`),


    //];
}