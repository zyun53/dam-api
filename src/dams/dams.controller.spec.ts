import { Test, TestingModule } from '@nestjs/testing';
import { DamsController } from './dams.controller';

describe('DamsController', () => {
  let controller: DamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DamsController],
    }).compile();

    controller = module.get<DamsController>(DamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
