import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class Pet {

  _id:Number

  @Prop({
    required: true,
  })
  nome: string;

  @Prop({
    required:true,
    default: "Não especificado"
  })
  idade: number;

  @Prop({
    default: [],
    type: [String],
    required:false
  })
  vacinas: string[];

  @Prop({
    default:"indefinido",
    required:false
  })
  raca: string;
}

type PetDocument = HydratedDocument<Pet>;

const PetSchema = SchemaFactory.createForClass(Pet);

export { PetDocument, Pet, PetSchema };
