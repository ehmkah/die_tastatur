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
        // good sice for prehkeytech-keyboard cabs
        const widthInMillimeter = 13;
        let result = "<html>";
        const letters = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        let rowCounter = 0;
        const constColumNumber = keyboardLayout.keys[0].length;
        let columnCounter = 0;
        while (columnCounter < constColumNumber) {
            result = result + `<span style="width: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${columnCounter}</span>`;
            columnCounter++;
        }
        for (const row of keyboardLayout.keys) {
            result = result + "<div/>";
            for (const key of row) {
                result = result + `<span style="width: ${widthInMillimeter}mm; height: ${widthInMillimeter}mm; border: 1px solid; display: inline-block; vertical-align: top">${key.execution.command.defaultKeyPrintText}</span>`;
                console.log(key.execution);
            }
            result = result + `<span style="height: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${letters[rowCounter]}</span>`
            rowCounter++;
        }
        columnCounter = columnCounter;
        result = result + "<div/>";
        while (columnCounter > 0) {
            result = result + `<span style="width: ${widthInMillimeter}mm; border: 1px solid; overflow: visible;display: inline-block">${columnCounter}</span>`;
            columnCounter--;
        }

        result = result + `<div>Keysize ${widthInMillimeter}mm</div>`;
        result = result + "</html>";
        return result;
    }


}
