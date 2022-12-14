import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
class Pet {

  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  vacinas: String[];

  @Prop()
  raca: string;

  // @Prop({
  //   ref:'donos',
  //   type: mongoose.Schema.Types.ObjectId
  // })
  // donoID: mongoose.Schema.Types.ObjectId;
  
}

type PetDocument = HydratedDocument<Pet>;

const PetSchema = SchemaFactory.createForClass(Pet);

export { PetDocument, Pet, PetSchema };