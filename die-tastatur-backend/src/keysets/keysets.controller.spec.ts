import { Test, TestingModule } from '@nestjs/testing';
import { KeysetsController } from './keysets.controller';

describe('KeysetController', () => {
  let controller: KeysetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeysetsController],
    }).compile();

    controller = module.get<KeysetsController>(KeysetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
