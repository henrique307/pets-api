import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet_DTO } from './pet.dto';
import { Pet, PetDocument, PetSchema } from './pets.schema';

@Injectable()
class petsService {
  constructor(
    @InjectModel(Pet.name) private readonly PetModel: Model<PetDocument>,
  ) {}

  async getPets(Query: object): Promise<Pet[] | Error> {
    return this.PetModel.find(Query, '-idade -__v').exec();
  }

  async getPet(id: string): Promise<Error | Pet> {
    return this.PetModel.findById(id, '-idade -__v').exec();
  }

  async postPet(pet_DTO: Pet_DTO): Promise<Pet> {
    const pet = new this.PetModel(pet_DTO);

    return pet.save();
  }

  async putPet(changes: object, id: string) {
    return this.PetModel.findByIdAndUpdate(id, changes).exec();
  }

  async deletePet(id: string) {
    return this.PetModel.findByIdAndDelete(id).exec();
  }
}

export { petsService };
