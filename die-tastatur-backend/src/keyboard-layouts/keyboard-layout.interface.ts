import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardLayoutDetail} from "./keyboard-layout-detail.interface";

export interface KeyboardLayout {

    id: string;
    keyboard: Keyboard;
    name: string;
    description: string;

    keys: Array<Array<KeyboardLayoutDetail>>;

}