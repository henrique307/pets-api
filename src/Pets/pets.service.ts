import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet_DTO } from './dto/pet.dto';
import { Pet, PetDocument } from './pets.schema';

@Injectable()
class petsService {
  constructor(@InjectModel(Pet.name) private readonly PetModel: Model<PetDocument>) {}

  async getPets(Query: object): Promise<Pet[] | Error> {
    const resultado = await this.PetModel.find(Query, '-__v')
               .populate('dono', '-__v -pets -cep')
               .exec();

    if(!resultado) throw new Error("Usuário nao existe no banco de dados")

    return resultado
  }

  async getPet(id: string): Promise<Pet | NotFoundException> {
    const resultado = await this.PetModel.findById(id, '-__v')
      .populate('dono', '-__v')
      .exec();

    if(!resultado) throw new NotFoundException("ID não existe no banco de dados")

    return resultado
  }

  async postPet(pet_DTO: Pet_DTO): Promise<object | Error> {

    const petCriado = new this.PetModel(pet_DTO);

    const resultado = await petCriado.save();

    if(!resultado) {
      throw new Error("Não foi possivel criar o pet no banco de dados, tente novamente mais tarde")
    }

    return {message: "Pet criado com sucesso!"}
  }

  async putPet(id:string, changes: Pet_DTO):Promise<NotFoundException | object> {
    
    const resultado = await this.PetModel.findByIdAndUpdate(id, changes).exec()

    if(!resultado) throw new NotFoundException("ID não existe no banco de dados");

    return {message: "Pet modificado com sucesso!", mudancas: resultado.overwrite(changes)}
  }

  async deletePet(id: string):Promise<object | NotFoundException> {
    const resultado = await this.PetModel.findByIdAndDelete(id).exec();

    if(!resultado) throw new NotFoundException("ID não existe no banco de dados");

    return {message:"Pet deletado do banco com sucesso!"}
  }

  async deletaTudo() {
    return await this.PetModel.deleteMany({}).exec()
  }
}

export { petsService };