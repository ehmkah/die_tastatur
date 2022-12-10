import {Test, TestingModule} from '@nestjs/testing';
import {KeyboardIds, KeyboardsService} from './keyboards.service';

describe('KeyboardsService', () => {
    let service: KeyboardsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [KeyboardsService],
        }).compile();

        service = module.get<KeyboardsService>(KeyboardsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('shouldFindById', () => {
        expect(service.findById(KeyboardIds.PREHKEYTECH_96).id).toEqual(KeyboardIds.PREHKEYTECH_96);
    });

});
