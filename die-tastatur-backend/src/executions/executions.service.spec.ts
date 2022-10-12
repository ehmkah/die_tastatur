import {Test, TestingModule} from '@nestjs/testing';
import {ExecutionsService} from './executions.service';
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {ToolsService} from "../tools/tools.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

describe('ExecutionsService', () => {
    let sut: ExecutionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExecutionsService, KeysetsService, CommandsService, ToolsService, OperatingSystemsService],
        }).compile();

        sut = module.get<ExecutionsService>(ExecutionsService);
    });

    it('check that parantheses are fine', () => {
        const actual = sut.findAll();
        for (const execution of actual) {
            const numberOfOpeningBrackets = execution.executor.split("{").length;
            const numberOfClosingBrackets = execution.executor.split("}").length;
            if (numberOfOpeningBrackets != numberOfClosingBrackets) {
                console.log(execution.id);
                console.log(execution.keyset.name);
                console.log(execution.command.name);
                expect(numberOfOpeningBrackets).toEqual(numberOfClosingBrackets);
            }
        }
    });

    it('should be defined', () => {
        expect(sut).toBeDefined();
    });

    it('findByCommandAndKeysetWorks',
        () => {
            expect(sut.findByCommandIDAndKeysetId(null, null)).toBeUndefined();
        });

    it('findByCommandAndKeysetWorks2',
        () => {
            expect(sut.findByCommandIDAndKeysetId(CommandsDefinitions.IDE_RUNNING_RUN, KeysetDefinitions.WEBSTORM_CLASSIC_MACOSX).executor).toBeDefined();
        })

    it('findByCommandAndKeysetWorksNotFound',
        () => {
            expect(sut.findByCommandIDAndKeysetId(CommandsDefinitions.IDE_RUNNING_DEBUG, KeysetDefinitions.INTELLIJ_ECLIPSE_MACOSX)).toBeUndefined();
        })

    it('testOneIntellijShortcuts', () => {
        const actual = sut.findByCommandIDAndKeysetId(CommandsDefinitions.IDE_SEARCH_AND_REPLACE_FIND, KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX );
        expect(actual.command.name).toEqual('ide_search_and_replace_find');
    })
});
