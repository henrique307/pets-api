import { Module } from '@nestjs/common';
import { DonosService } from './donos.service';
import { DonosController } from './donos.controller';

@Module({
  controllers: [DonosController],
  providers: [DonosService]
})
export class DonosModule {}
