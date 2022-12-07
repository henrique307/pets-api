import { IsArray, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

class Pet_DTO {

    @IsString({message:"nome precisa ser do tipo string"})
    @Length(1, 20, {message:"nome precisa ter entre 1 e 20 caracteres"})
    readonly nome: string;

    @IsArray()
    readonly vacinas: string[] = [];

    @IsInt({message: "idade precisa ser um valor inteiro"})
    idade: number = 0

    @IsString()
    readonly raca: string = "indefinida";

    @IsString()
    @IsNotEmpty({message: "o ID do dono não pode ser nulo"})
    readonly donoId: string;
}


export {Pet_DTO}