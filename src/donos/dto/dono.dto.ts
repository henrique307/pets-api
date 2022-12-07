import { IsEmail, IsString, Length, Matches } from "class-validator";

class DonoDto {
    @IsString()
    @Length(5, 20, {message:"nome deve ter entre 5 e 20 caracteres"})
    nome: string;

    @IsEmail({message: "Email inválido"})
    email: string;

    @Matches(/d{5}-d{3}/, {message: "cep inválido, o padrão deve ser xxxxx-xxx"})
    cep: string;

    @IsString()
    @Length(10, 50, {message: "Sua senha deve ter entre 10 e 50 caracteres"})
    password:string;
}

export {DonoDto}