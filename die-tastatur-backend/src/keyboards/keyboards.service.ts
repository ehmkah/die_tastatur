import {Injectable} from '@nestjs/common';
import {Keyboard} from "./keyboard.interface";

export enum KeyboardIds {
    PREHKEYTECH_128 = 'Prekeytech 128',
    PREHKEYTECH_96 = 'Prekeytech 96',
}

@Injectable()
export class KeyboardsService {


    findAll(): Array<Keyboard> {
        return [
            <Keyboard>{id: KeyboardIds.PREHKEYTECH_128, xSize: 16, ySize: 8},
            <Keyboard>{id: KeyboardIds.PREHKEYTECH_96, xSize: 16, ySize: 6}
        ]
    }

    findById(keyboardId: KeyboardIds) {
        const keyboards = this.findAll();
        const result = keyboards.find(value => value.id === keyboardId);

        return result;
    }

}
