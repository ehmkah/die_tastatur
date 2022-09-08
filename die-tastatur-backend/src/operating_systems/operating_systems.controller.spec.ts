import { Test, TestingModule } from '@nestjs/testing';
import { OperatingSystemsController } from './operating_systems.controller';

describe('OperatingSystemsController', () => {
  let controller: OperatingSystemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperatingSystemsController],
    }).compile();

    controller = module.get<OperatingSystemsController>(OperatingSystemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
