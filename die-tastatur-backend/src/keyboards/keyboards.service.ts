import {Injectable} from '@nestjs/common';
import {Keyboard} from "./keyboard.interface";

@Injectable()
export class KeyboardsService {

    findAll(): Array<Keyboard> {
        return [
            <Keyboard>{id: '1', name: 'Prekeytech 128', xSize: 16, ySize: 8}
        ]
    }

}
