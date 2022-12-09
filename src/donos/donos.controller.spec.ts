import { Test, TestingModule } from '@nestjs/testing';
import { DonosController } from './donos.controller';
import { DonosService } from './donos.service';

describe('DonosController', () => {
  let controller: DonosController;
  const mockDonosService = {

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonosController],
      providers: [DonosService],
    })
    .overrideProvider(DonosService)
    .useValue(mockDonosService)
    .compile();

    controller = module.get<DonosController>(DonosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
