import {Controller, Get, Param, Res, StreamableFile} from '@nestjs/common';
import {KeyboardLayout} from "./keyboard-layout.interface";
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {createReadStream} from "fs";
import {join} from 'path';
import type {Response} from 'express';
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
        const widthInMillimeter = 5;
        let result = '<table style="border: 1px solid black;border-collapse: collapse;">';
        //result = result + `<tr><td>0</td></tr>
        const letters=['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        let rowCounter = 0;
        const constColumNumber = keyboardLayout.keys[0].length;
        let columnCounter = 0;
        result = result + '<tr style="border: 1px solid black;border-collapse: collapse;"><td></td>';
        while(columnCounter < constColumNumber) {
            result = result + `<td style="border: 1px solid black;border-collapse: collapse;">${columnCounter}</td>`
            columnCounter++;
        }
        result = result + '</tr>';
        for (const row of keyboardLayout.keys) {
            result = result + `'<tr style="border: 1px solid black;border-collapse: collapse;height:${widthInMillimeter}mm; max-height: ${widthInMillimeter}mm;">`;
            result = result + `<td style="width: ${widthInMillimeter}mm;max-width: ${widthInMillimeter}mm;height: ${widthInMillimeter}mm; max-height: ${widthInMillimeter}mm;">${rowCounter}</td>`
            for (const key of row) {
                result = result + `<td style="border: 1px solid black;border-collapse: collapse;width: ${widthInMillimeter}mm;max-width: ${widthInMillimeter}mm;height: ${widthInMillimeter}mm; max-height: ${widthInMillimeter}mm;padding: 0;">`;
                result = result + key.execution.command.defaultKeyPrintText;
                result = result + "</td>";
                console.log(key.execution);
            }
            result = result + `<td>${letters[rowCounter]}</td>`;
            result = result + "</tr>";
            rowCounter++;
        }
        columnCounter = columnCounter;
        result = result + '<tr style="border: 1px solid black;border-collapse: collapse;"><td></td>';
        while(columnCounter > 0) {
            result = result + `<td style="border: 1px solid black;border-collapse: collapse;">${columnCounter}</td>`
            columnCounter--;
        }
        result = result + '</table>';

        result = result + `Keysize ${widthInMillimeter}mm`;
        return result;
    }


}
