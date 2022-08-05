import {Injectable} from '@nestjs/common';
import {OperatingSystem} from "./operating_system.interface";

@Injectable()
export class OperatingSystemsService {
    findAll(): Array<OperatingSystem> {
        return [<OperatingSystem>{id: '1', name: 'MacOsX'}];
    }
}
