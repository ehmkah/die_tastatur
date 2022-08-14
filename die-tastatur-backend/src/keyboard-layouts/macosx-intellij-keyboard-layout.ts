import {KeyboardLayout} from "./keyboard-layout.interface";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

export function macosxIntellijKeyboardLayout(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let intelliJClassicKeyset = KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX;
    let terminalDefaultKeyset = KeysetDefinitions.TERMINAL_MACOSX;
    let board: Array<Array<KeyboardLayoutDetail>> = [Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16), Array(16)];



    return <KeyboardLayout>{
        id: '2',
        keyboard,
        name: 'Linux Default Dev',
        keys: board
    };


}

