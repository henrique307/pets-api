import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class Pet {
  @Prop({
    required: true,
  })
  nome: string;

  @Prop()
  idade: number;

  @Prop([String])
  vacinas: string[];

  @Prop()
  raca: string;
}

type PetDocument = HydratedDocument<Pet>;

const PetSchema = SchemaFactory.createForClass(Pet);

export { PetDocument, Pet, PetSchema };
