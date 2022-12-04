import { Contains, IsArray, IsInt, IsString, Length, Matches, Max } from "class-validator";

class Pet_DTO {

    @IsString({message:"nome precisa ser do tipo string"})
    @Length(1, 20, {message:"nome precisa ter entre 1 e 20 caracteres"})
    nome: string;

}

export {Pet_DTO}