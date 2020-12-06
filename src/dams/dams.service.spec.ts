import { Test, TestingModule } from '@nestjs/testing';
import { DamsService } from './dams.service';

describe('DamsService', () => {
  let service: DamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DamsService],
    }).compile();

    service = module.get<DamsService>(DamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
