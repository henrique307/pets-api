import { Test, TestingModule } from '@nestjs/testing';
import { DonosController } from './donos.controller';
import { DonosService } from './donos.service';

describe('DonosController', () => {
  let controller: DonosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonosController],
      providers: [DonosService],
    }).compile();

    controller = module.get<DonosController>(DonosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
