import { IsArray, IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { Existe } from "src/validators/existeValidator";

class Pet_DTO {

    @IsString({message:"nome precisa ser do tipo string"})
    @Length(1, 20, {message:"nome precisa ter entre 1 e 20 caracteres"})
    readonly nome: string;

    @IsArray({message: "campo vacinas precisa ser do tipo array"})
    readonly vacinas: string[] = [];

    @IsInt({message: "idade precisa ser um valor inteiro"})
    idade: number = 0

    @IsString({message: "campo raça precisa ser da tipo string"})
    readonly raca: string = "indefinida";

    // @IsString({message:"campo donoID precisa ser da tipo string"})
    // @IsNotEmpty({message: "o ID do dono não pode ser nulo"})
    // @Existe({message:"Este id não existe no nosso banco de dados"})
    // readonly donoId: string;
}


export {Pet_DTO}