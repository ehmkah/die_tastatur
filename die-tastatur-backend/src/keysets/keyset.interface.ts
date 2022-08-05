import {Tool} from "../tools/tools.interface";
import {OperatingSystem} from "../operating_systems/operating_system.interface";
import {KeysetDefinitions} from "./keyset-definitions";

export interface Keyset {
    id: string;
    tool: Tool;
    operatingSystem: OperatingSystem;
    description: string;
    name: KeysetDefinitions
}