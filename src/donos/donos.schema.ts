import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Model } from "mongoose";
import { Pet_DTO } from "src/Pets/dto/pet.dto";

@Schema()
class dono {
    @Prop()
    nome:string

    @Prop()
    cep: string

    @Prop({
        unique:true
    })
    email:string

    @Prop()
    senha:string

    @Prop()
    pets: Pet_DTO[]
}

type donoDocument = HydratedDocument<dono>

const donoSchema = SchemaFactory.createForClass(dono);

export {donoSchema, dono, donoDocument};
