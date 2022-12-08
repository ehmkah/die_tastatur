import {Controller, Get, Param} from '@nestjs/common';
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {mapToMC128} from "../keyboards/mci128.template";

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
        let keyboardLayout = this.keyboardLayoutsService.findById(id);

        return mapToMC128(keyboardLayout);
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
        const letters = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        let rowCounter = 0;
        const constColumNumber = keyboardLayout.keys[0].length;
        let columnCounter = 0;
        while (columnCounter < constColumNumber) {
            result = result + `<span style="font-size: ${fontSize}; padding: ${paddingInMillimeter}mm; width: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${columnCounter}</span>`;
            columnCounter++;
        }
        for (const row of keyboardLayout.keys) {
            result = result + "<div/>";
            result = result + "<div/>";
            for (const key of row) {
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
        result = result + `<div>Coypright Michael Krauße - die Tastatur 2022</div>`;
        result = result + "</html>";
        return result;
    }


}
