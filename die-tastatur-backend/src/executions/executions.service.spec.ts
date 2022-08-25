import {Test, TestingModule} from '@nestjs/testing';
import {ExecutionsService} from './executions.service';
import {KeysetsService} from "../keysets/keysets.service";
import {CommandsService} from "../commands/commands.service";
import {ToolsService} from "../tools/tools.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {CommandsDefinitions} from "../commands/commands-definitions";
import {KeysetDefinitions} from "../keysets/keyset-definitions";

describe('ExecutionsService', () => {
    let service: ExecutionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExecutionsService, KeysetsService, CommandsService, ToolsService, OperatingSystemsService],
        }).compile();

        service = module.get<ExecutionsService>(ExecutionsService);
    });

    it('check that parantheses are fine', () => {
        const actual = service.findAll();
        for (const execution of actual) {
            const numberOfOpeningBrackets = execution.executor.split("{").length;
            const numberOfClosingBrackets = execution.executor.split("}").length;
            if(numberOfOpeningBrackets!=numberOfClosingBrackets) {
                console.log(execution.id);
                expect(numberOfOpeningBrackets).toEqual(numberOfClosingBrackets);
            }
        }
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('findByCommandAndKeysetWorks',
        () => {
            expect(service.findByCommandIDAndKeysetId(null, null)).toBeUndefined();
        });

    it('findByCommandAndKeysetWorks2',
        () => {
            expect(service.findByCommandIDAndKeysetId(CommandsDefinitions.IDE_RUNNING_RUN, KeysetDefinitions.INTELLIJ_CLASSIC_MACOSX).executor).toBeDefined();
        })

    it('findByCommandAndKeysetWorksNotFound',
        () => {
            expect(service.findByCommandIDAndKeysetId(CommandsDefinitions.IDE_RUNNING_DEBUG, KeysetDefinitions.INTELLIJ_ECLIPSE_MACOSX)).toBeUndefined();
        })
});
