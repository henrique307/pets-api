import { Module } from '@nestjs/common';
import { DonosService } from './donos.service';
import { DonosController } from './donos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { dono, donoSchema } from './donos.schema';
import { ExisteConstraint } from 'src/validators/existeValidator';

@Module({
  imports: [MongooseModule.forFeature([{ name: dono.name, schema: donoSchema }])],
  controllers: [DonosController],
  providers: [
    DonosService,
    ExisteConstraint
  ]
})
export class DonosModule {}
