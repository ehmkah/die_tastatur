import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardsController } from './keyboards.controller';

describe('KeyboardsController', () => {
  let controller: KeyboardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyboardsController],
    }).compile();

    controller = module.get<KeyboardsController>(KeyboardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
