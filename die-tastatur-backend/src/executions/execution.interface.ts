import {Keyset} from "../keysets/keyset.interface";
import {Command} from "../commands/command.interface";

export interface Execution {

    id: string;

    keyset: Keyset;
    command: Command;

    executor: string;

}