import {CommandsDefinitions} from "./commands-definitions";

export interface Command {
    // id
    id: string

    // long description what the command does in general
    description: string;

    // name of command
    name: CommandsDefinitions;

    // short value for keyboard
    defaultKeyPrintText: string;

}