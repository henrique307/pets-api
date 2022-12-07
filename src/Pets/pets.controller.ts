import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Pet_DTO } from './dto/pet.dto';
import { Pet } from './pets.schema';
import { petsService } from './pets.service';

@Controller('pets')
class petsController {
  constructor(private readonly petsService: petsService) {}

  @Get()
  getPets(@Query() query: object): Promise<Pet[] | Error> {
    return this.petsService.getPets(query);
  }

  @Get(':id')
  getPet(@Param() params: { id:string }):Promise<NotFoundException | Pet> {
    return this.petsService.getPet(params.id);
  }

  @Post()
  postPet(@Body() body: Pet_DTO): Promise<object | Error> {
    return this.petsService.postPet(body);
  }

  @Put(':id')
  putPet(@Body() changes: Pet_DTO, @Param() params: { id:string }):Promise<NotFoundException | object> {
    return this.petsService.putPet(params.id, changes);
  }

  @Delete(':id')
  deletePet(@Param() params: { id:string }):Promise<object | NotFoundException> {
    return this.petsService.deletePet(params.id);
  }

  @Delete() 
  deletaAll() {
    return this.petsService.deletaTudo()
  }
}

export { petsController };
