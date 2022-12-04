import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Pet_DTO } from './pet.dto';
import { Pet } from './pets.schema';
import { petsService } from './pets.service';

@Controller('pets')
class petsController {
  constructor(private readonly petsService: petsService) {}

  @Get()
  getPets(@Query() query: object): Promise<Error | Pet[]> {
    return this.petsService.getPets(query);
  }

  @Get(':id')
  getPet(@Param() { id = '' }): Promise<Error | Pet> {
    return this.petsService.getPet(id);
  }

  @Post()
  postPet(@Body() body: Pet_DTO): Promise<Pet> {
    return this.petsService.postPet(body);
  }

  @Put(':id')
  putPet(@Body() changes: object, @Param() { id = '' }) {
    return this.petsService.putPet(changes, id);
  }

  @Delete(':id')
  deletePet(@Param() { id = '' }) {
    return this.petsService.deletePet(id);
  }
}

export { petsController };
