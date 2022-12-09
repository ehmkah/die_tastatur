import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeysetDefinitions} from "../keysets/keyset-definitions";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";
import {emptyKeyboardLayout} from "./empty-keyboard-layout";
import {CommandsDefinitions} from "../commands/commands-definitions";

export function linuxIntellijDeveloperLayoutFor96(keyboard: Keyboard, keyboardLayoutsService: KeyboardLayoutsService): KeyboardLayout {

    let keysetTerminal = KeysetDefinitions.TERMINAL_MACOSX;
    let keysetLinuxClassic = KeysetDefinitions.INTELLIJ_CLASSIC_LINUX;
    let board: Array<Array<KeyboardLayoutDetail>> = emptyKeyboardLayout(keyboard, keyboardLayoutsService).keys;

    return <KeyboardLayout>{
        id: 'Linux-intellij-developer-96',
        keyboard,
        name: 'Linux Intellij Developer Keyboard',
        description: 'Keyboardlayout for Intellij developers',
        keys: board
    };


}
