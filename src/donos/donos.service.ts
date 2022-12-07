import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { dono, donoDocument } from './donos.schema';
import { DonoDto } from './dto/dono.dto';

@Injectable()
export class DonosService {

  constructor(@InjectModel(dono.name) public donoModel: Model<donoDocument> ) {}

  async findAllTemp(Query:object):Promise<dono[] | Error> {
    const resultado = await this.donoModel.find(Query, '-__v').exec()

    if(!resultado) throw new Error("Não sei o que aconteceu... tenta de novo mais tarde =)")

    return resultado
  }
  
  async findOne(id: string):Promise<dono | NotFoundException> {
    const resultado = await this.donoModel.findById(id, '-__v -password').exec()

    if(!resultado) throw new NotFoundException("Usuário não existe no banco de dados")

    return resultado
  }

  async criarDono(dono_DTO:DonoDto):Promise<object | NotFoundException> { 
    const novoDono = new this.donoModel(dono_DTO)

    const resultado = await novoDono.save()

    if(!resultado) throw new Error("Não sei o que aconteceu... tenta de novo mais tarde =)")

    return {message: "Usuário criado com sucesso!", usuario: resultado}
  } 

  async update(id: string, mudancas:DonoDto):Promise<object | NotFoundException> {
    const resultado = await this.donoModel.findByIdAndUpdate(id, mudancas).exec()

    if(!resultado) throw new NotFoundException("Usuário nao existe no banco de dados")

    return {message:"usuário modificado com sucesso!", mudancas: resultado.overwrite(mudancas)}
  }

  async remove(id: string): Promise<object> {
    const resultado = await this.donoModel.findByIdAndDelete(id).exec()

    if(!resultado) throw new NotFoundException("Usuário nao existe no banco de dados")

    return {message:"usuário deletado com sucesso!"}
  }

}
