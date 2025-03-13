import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(CreateUserDto) {
    // borrowed from CreateUserDto
    // // name?:string;
    // // email?:string;
    // // role?:"ADMIN" | "INTERN" | "ENGINEER"; 
    // All fields are optional
}