import {Injectable} from '@nestjs/common';
import {Keyboard} from "./keyboard.interface";

@Injectable()
export class KeyboardsService {

    findAll(): Array<Keyboard> {
        return [
            <Keyboard>{id: 'Prekeytech 128', xSize: 16, ySize: 8},
            <Keyboard>{id: 'Prekeytech 96',  xSize: 16, ySize: 6}
        ]
    }

}
