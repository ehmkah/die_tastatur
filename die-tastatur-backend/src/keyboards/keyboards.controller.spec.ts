import { Test, TestingModule } from '@nestjs/testing';
import { KeyboardsController } from './keyboards.controller';
import {KeyboardsService} from "./keyboards.service";

describe('KeyboardsController', () => {
  let controller: KeyboardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyboardsController],
      providers: [KeyboardsService]
    }).compile();

    controller = module.get<KeyboardsController>(KeyboardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
