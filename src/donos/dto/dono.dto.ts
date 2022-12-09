import { IsEmail, IsString, Length, Matches } from "class-validator";
import { Existe } from "src/validators/existeValidator";

class DonoDto {
    @IsString({message: "campo nome precisa ser da tipo string"})
    @Length(5, 20, {message:"nome deve ter entre 5 e 20 caracteres"})
    readonly nome: string;

    @IsEmail({message: "Email inválido"})
    @Existe()
    readonly email: string;

    @Matches(/^[0-9]{5}-[0-9]{3}$/, {message: "cep inválido, o padrão deve ser xxxxx-xxx"})
    readonly cep: string;

    @IsString({message: "campo senha precisa ser da tipo string"})
    @Length(10, 50, {message: "Sua senha deve ter entre 10 e 50 caracteres"})
    readonly senha:string;
}

export {DonoDto}