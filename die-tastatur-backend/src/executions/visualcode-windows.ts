import {ExecutionsService} from "./executions.service";
import {KeysetsService} from "../keysets/keysets.service";
import {Execution} from "./execution.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {SpecialKeys} from "./special_keys";

export function visualstudioLinuxExecutions(executionService: ExecutionsService, keysetService: KeysetsService): Array<Execution> {
    class InternalExecution {
        command: CommandsDefinitions;
        executor: string;


        constructor(command: CommandsDefinitions, executor: string) {
            this.command = command;
            this.executor = executor;
        }
    }

    let keyset = keysetService.findByName(KeysetDefinitions.VISUAL_STUDIO_LINUX);

    const executions = [

        //Ctrl+Shift+P, F1   Show Command Palette
        //Ctrl+P   Quick Open, Go to File...
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, `{${SpecialKeys.CTRL}+p}`),
        // Ctrl+Shift+N   New window/instance
        // Ctrl+Shift+W   Close window/instance
        // Ctrl+,   User Settings
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_OPEN_PREFERENCES, `{${SpecialKeys.CTRL}+,}`),
        // Ctrl+K Ctrl+S   Keyboard Shortcuts
        //
        // Ctrl+X   Cut line (empty selection)
        // Ctrl+C   Copy line (empty selection)
        // Alt+ ↑ / ↓   Move line up/down
        // Shift+Alt + ↓ / ↑   Copy line up/down
        // Ctrl+Shift+K   Delete line
        new InternalExecution(CommandsDefinitions.IDE_EDITING_DELETE_LINE, `{${SpecialKeys.CTRL}+{${SpecialKeys.CTRL}+k}}`),
        // Ctrl+Enter   Insert line below
        // Ctrl+Shift+Enter   Insert line above
        // Ctrl+Shift+\   Jump to matching bracket
        // Ctrl+] / [   Indent/outdent line
        // Home / End   Go to beginning/end of line
        // Ctrl+Home   Go to beginning of file
        // Ctrl+End   Go to end of file
        // Ctrl+↑ / ↓   Scroll line up/down
        // Alt+PgUp / PgDn   Scroll page up/down
        // Ctrl+Shift+[   Fold (collapse) region
        // Ctrl+Shift+]   Unfold (uncollapse) region
        // Ctrl+K Ctrl+[   Fold (collapse) all subregions
        // Ctrl+K Ctrl+]   Unfold (uncollapse) all subregions
        // Ctrl+K Ctrl+0   Fold (collapse) all regions
        // Ctrl+K Ctrl+J   Unfold (uncollapse) all regions
        // Ctrl+K Ctrl+C   Add line comment Ctrl+K Ctrl+U   Remove line comment
        // Ctrl+/   Toggle line comment
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COMMENT_OR_UNCOMMENT, `{${SpecialKeys.CTRL}+k}`),
        // Shift+Alt+A   Toggle block comment
        new InternalExecution(CommandsDefinitions.IDE_EDITING_COMMENT_WITH_BLOCK, `{${SpecialKeys.SHIFT}+{${SpecialKeys.ALT}+a}}`),
        // Alt+Z   Toggle word wrap
        // Ctrl+T   Show all Symbols
        // Ctrl+G   Go to Line...
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GO_TO_LINE, `{${SpecialKeys.CTRL}+g}`),
        // Ctrl+Shift+O   Go to Symbol...
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_SYMBOL, `{${SpecialKeys.CTRL}+{${SpecialKeys.SHIFT}+o}}`),
        // Ctrl+Shift+M   Show Problems panel
        // F8   Go to next error or warning#
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_NEXT_HIGHLIGHTED_ERROR, `${SpecialKeys.F8}`),
        // Shift+F8   Go to previous error or warning
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_PREVIOUS_HIGHLIGHTED_ERROR, `{${SpecialKeys.SHIFT}+${SpecialKeys.F8}}`),
        // Ctrl+Shift+Tab   Navigate editor group history
        // Alt+ ← / →   Go back / forward
        // Ctrl+M Toggle Tab moves focus
        // Ctrl+F   Find
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_FIND_ACTION, `{${SpecialKeys.CTRL}+f}`),
        // Ctrl+H   Replace
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_REPLACE, `{${SpecialKeys.CTRL}+h}`),
        // F3 / Shift+F3   Find next/previous
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_NEXT, `${SpecialKeys.F3}`),
        new InternalExecution(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND_PREVIOUS, `{${SpecialKeys.SHIFT}+${SpecialKeys.F3}}`),
        // Alt+Enter   Select all occurences of Find match
        // Ctrl+D   Add selection to next Find match
        // Ctrl+K Ctrl+D   Move last selection to next Find match
        // Alt+C / R / W   Toggle case-sensitive / regex / whole word
        // Alt+Click  Insert cursor
        // Ctrl+Alt+ ↑ / ↓  Insert cursor above / below
        // Ctrl+U  Undo last cursor operation
        // Shift+Alt+I  Insert cursor at end of each line selected
        // Ctrl+L  Select current line
        // Ctrl+Shift+L  Select all occurrences of current selection
        // Ctrl+F2  Select all occurrences of current word
        // Shift+Alt+→  Expand selection
        // Shift+Alt+←  Shrink selection
        // Shift+Alt + (drag mouse)  Column (box) selection
        // Ctrl+Shift+Alt +PgUp/PgDn  Column (box) selection page up/down
        // Ctrl+Shift+Alt Column (box) selection + (arrow key)
        //
        // Ctrl+Space, Ctrl+I  Trigger suggestion
        // Ctrl+Shift+Space  Trigger parameter hints
        // Shift+Alt+F  Format document
        // Ctrl+K Ctrl+F  Format selection
        // F12  Go to Definition
        // Alt+F12  Peek Definition
        // Ctrl+K F12  Open Definition to the side
        // Ctrl+.  Quick Fix
        // Shift+F12  Show References
        // F2  Rename Symbol
        // Ctrl+K Ctrl+X  Trim trailing whitespace
        // Ctrl+K M  change file language
        //
        // Close editor
        // Ctrl+F4, Ctrl+W
        // Close folder
        // Ctrl+K F
        // Split editor
        // Ctrl+\
        // Focus into 1st, 2nd or 3rd editor group
        // Ctrl+ 1 / 2 / 3
        // Focus into previous/next editor group
        // Ctrl+K Ctrl+ ←/→
        // Ctrl+Shift+PgUp/PgDn Moveeditorleft/right
        // Ctrl+K ← / → Move active editor group
        //
        // Ctrl+N  New File
        new InternalExecution(CommandsDefinitions.IDE_CREATE_NEW_FILE, `{${SpecialKeys.CTRL}+n}`),
        // Ctrl+O  Open File...
        new InternalExecution(CommandsDefinitions.IDE_NAVIGATION_GOTO_FILE, `{${SpecialKeys.CTRL}+o}`),
        // Ctrl+S  Save
        // Ctrl+Shift+S    Save As...
        // Ctrl+K S    Save All
        // Ctrl+F4 Close
        new InternalExecution(CommandsDefinitions.IDE_EDITING_CLOSE_ACTIVE_EDITOR_TAB, `{${SpecialKeys.CTRL}+${SpecialKeys.F4}}`),
        // Ctrl+K Ctrl+W   Close ALl
        // Ctrl+Shift+T    Reopen closed editor
        // Ctrl+K Enter    Keep preview mode editor open
        // Ctrl+Tab    Open next
        // Ctrl+Shift+Tab  Open previous
        // Ctrl+K P    Copy path of active file
        // Ctrl+K R    Reveeal active file in explorer
        // Ctrl+K O    Show active file in new window/instance
        //
        // F11     Toggle full screen
        new InternalExecution(CommandsDefinitions.IDE_GENERAL_TOGGLE_MAXIMIZE_WINDOW, `${SpecialKeys.F11}`),
        // Shift+Alt+0 toggle editor layout (horizontal/ vertical)
        // CTRL+ =/-   Zoom in / out
        // Ctrl+B  Toggle side bar visibility
        // CTRL+SHIFT+E    Show explorer/ Toggle focus
        // Ctrl+Shift+F    Show search
        // CTRL+Shift+G    Show Source Control
        // CTRL+shift+D    Show debug
        // CTRL+Shift+X    Show extensions
        // Ctrl+Shift+h    Replace in files
        // ctrl+shift+j    toggle search details
        // ctrl+shift+u   show output panel
        // ctrl+shift+v   open markdown preview
        // ctrl+K v   open markdown preview to the side
        // ctrl+k z   zen mode (ESC ESC to exit)
        //
        // F9 Toggle breakpoint
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_TOGGLE_BREAKPOINT, `${SpecialKeys.F9}`),
        // F5 Start/Continue
        new InternalExecution(CommandsDefinitions.IDE_RUNNING_DEBUG, `${SpecialKeys.F5}`),
        // Shift+F5   Stop
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STOP, `{${SpecialKeys.SHIFT}+${SpecialKeys.F5}}`),
        // F11/ Shift+F11 step into/out
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_INTO, `${SpecialKeys.F11}`),
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_OUT, `{${SpecialKeys.SHIFT}+${SpecialKeys.F11}}`),
        // F10    Step over
        new InternalExecution(CommandsDefinitions.IDE_DEBUG_STEP_OVER, `${SpecialKeys.F10}`),
        // Ctrl+K Ctrl +I Show hover
        //
        // ctrl+  show integrated terminal
        // ctrl+shift+    craete new terminal
        // ctrl+c copy selection
        // ctrl+v paste into active terminal
        // ctrl+UP/Down   scroll up/ down
        // ctrl+HOME/END  scroll to top/bottom
        // **/


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
