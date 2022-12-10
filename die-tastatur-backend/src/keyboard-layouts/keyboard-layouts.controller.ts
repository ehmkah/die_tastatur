import {Controller, Get, Param} from '@nestjs/common';
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {mapToMC128} from "../keyboards/mci128.template";
import {Keyboard} from "../keyboards/keyboard.interface";
import {KeyboardIds} from "../keyboards/keyboards.service";
import {mapToMC96} from "../keyboards/mci96.template";
import {mapToMC84} from "../keyboards/mci84.template";

@Controller('keyboard-layouts')
export class KeyboardLayoutsController {

    constructor(private keyboardLayoutsService: KeyboardLayoutsService) {
    }

    @Get()
    findAll(): Array<KeyboardLayout> {
        return this.keyboardLayoutsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): KeyboardLayout {
        return this.keyboardLayoutsService.findById(id);
    }

    @Get(':id/file')
    getFile(@Param('id') id: string): string {
        const keyboardLayout = this.keyboardLayoutsService.findById(id);
        if (KeyboardIds.PREHKEYTECH_128 === keyboardLayout.keyboard.id) {
            return mapToMC128(keyboardLayout);
        }
        if (KeyboardIds.PREHKEYTECH_96 === keyboardLayout.keyboard.id) {
            return mapToMC96(keyboardLayout);
        }
        if (KeyboardIds.PREHKEYTECH_84 === keyboardLayout.keyboard.id) {
            return mapToMC84(keyboardLayout);
        }
    }

    @Get(':id/html')
    getHtml(@Param('id') id: string): string {
        let keyboardLayout = this.keyboardLayoutsService.findById(id);

        return this.mapToHTML(keyboardLayout);
    }

    // wokrs only on chrome
    mapToHTML(keyboardLayout: KeyboardLayout) {
        // good sice for prehkeytech-keyboard cabs
        const widthInMillimeter = 12;
        const paddingInMillimeter = 0.5;
        const fontSize = '10px';
        let result = "<html>";
        result = result + `<h2>${keyboardLayout.name}</h2>`;
        const letters = this.getLetters(keyboardLayout.keyboard);
        let rowCounter = 0;
        const columNumber = keyboardLayout.keyboard.xSize;
        let columnCounter = 0;
        while (columnCounter < columNumber) {
            result = result + `<span style="font-size: ${fontSize}; padding: ${paddingInMillimeter}mm; width: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${columnCounter}</span>`;
            columnCounter++;
        }
        for (var i = 0; i < keyboardLayout.keyboard.ySize; i++) {
            const row = keyboardLayout.keys[i];
            result = result + "<div/>";
            result = result + "<div/>";
            for(var x = 0; x < keyboardLayout.keyboard.xSize; x++) {
                const key = row[x];
                if (key === undefined || key.execution.command === undefined) {
                    console.log("A good breakpoint to find wrong configured boards ");
                }
                result = result + `<span style="font-size: ${fontSize};padding: ${paddingInMillimeter}mm; width: ${widthInMillimeter}mm; height: ${widthInMillimeter}mm; border: 1px solid; display: inline-block; vertical-align: top">${key.execution.command.defaultKeyPrintText}</span>`;
            }
            result = result + `<span style="font-size: ${fontSize};padding: ${paddingInMillimeter}mm; height: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${letters[rowCounter]}</span>`
            rowCounter++;
        }
        result = result + "<div/>";
        while (columnCounter > 0) {
            result = result + `<span style="font-size: ${fontSize};padding: ${paddingInMillimeter}mm; width: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${columnCounter}</span>`;
            columnCounter--;
        }


        result = result + `<div>Keysize ${widthInMillimeter + paddingInMillimeter}mm</div>`;
        result = result + `<div>Fontsize ${fontSize}</div>`;
        result = result + `<div>Copyright Michael Krauße - <a href="https://github.com/ehmkah/die_tastatur">Die Tastatur</a> 2022</div>`;
        result = result + "</html>";
        return result;
    }


    getLetters(keyboard: Keyboard) {
        if (8 === keyboard.ySize) {
            return ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        }
        if (7 == keyboard.ySize) {
            return ['H', 'G', 'F', 'E', 'D', 'C', 'B'];
        }
        if (6 === keyboard.ySize) {
            return ['H', 'G', 'F', 'E', 'D', 'C'];
        }

    }
}
