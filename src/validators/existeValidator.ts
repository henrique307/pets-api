import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isEmail, registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Model } from "mongoose";
import { dono, donoDocument } from "src/donos/donos.schema";
import { DonosService } from "src/donos/donos.service";

@Injectable()
@ValidatorConstraint({async: true})
class ExisteConstraint implements ValidatorConstraintInterface {

    constructor (@InjectModel(dono.name) private readonly donoModel: Model<donoDocument>) {}

    async validate(valor: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const existe = await this.donoModel.findOne({__v:2}).exec()
        
        if(isEmail(valor)) {
            console.log(existe)
            return !!!existe
        }

        return !!existe
    }

    defaultMessage (validationArguments?: ValidationArguments): string {
        return `${validationArguments.value} já está em uso`
    }
}

function Existe(ValidationOptions?:ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: ValidationOptions,
            constraints: [],
            validator: ExisteConstraint,
        })
    }
}

export { ExisteConstraint, Existe }