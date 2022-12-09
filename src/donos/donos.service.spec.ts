import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { dono } from './donos.schema';
import { DonosService } from './donos.service';

describe('DonosService', () => {
  let service: DonosService;
  let mockDonoModel = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DonosService,
        {
          provide: getModelToken("dono"),
          useValue: mockDonoModel
        }
      ],
    }).compile();

    service = module.get<DonosService>(DonosService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});
