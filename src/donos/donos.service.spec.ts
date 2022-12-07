import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { donoDocument } from './donos.schema';
import { DonosService } from './donos.service';

describe('DonosService', () => {
  let service: DonosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonosService],
    }).compile();

    service = module.get<DonosService>(DonosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
