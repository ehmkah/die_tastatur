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
        let result = '<table style="border: 1px solid black;border-collapse: collapse;">';
        for (const row of keyboardLayout.keys) {
            result = result + '<tr style="border: 1px solid black;border-collapse: collapse;">';
            for (const key of row) {
                result = result + '<td style="border: 1px solid black;border-collapse: collapse;">';
                result = result + key.execution.command.defaultKeyPrintText;
                result = result + "</td>";
            }
            result = result + "</tr>";
        }
        result = result + '</table>';
        return result;
    }


}
