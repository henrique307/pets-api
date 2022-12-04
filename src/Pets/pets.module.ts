import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { petsController } from './pets.controller';
import { Pet, PetSchema } from './pets.schema';
import { petsService } from './pets.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  controllers: [petsController],
  providers: [petsService],
})
class petsModule {}

export { petsModule };
