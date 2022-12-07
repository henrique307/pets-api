import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Pet_DTO } from "src/Pets/dto/pet.dto";

class dono {
    @Prop({
        required: true,
    })
    nome:string

    @Prop({
        required:true
    })
    cep: string

    @Prop({
        required:true
    })
    email:string

    @Prop({
        required:true
    })
    password:string

    @Prop()
    pets: Pet_DTO[]
}

type donoDocument = HydratedDocument<dono>

const donoSchema = SchemaFactory.createForClass(dono);

export {donoSchema, dono, donoDocument};
