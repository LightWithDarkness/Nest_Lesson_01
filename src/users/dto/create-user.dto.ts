import { IsString, IsEmail, IsNotEmpty, IsEnum } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail({},{
        message: "Email must be a valid email address"
    })
    email: string;

    @IsEnum(["ADMIN", "INTERN", "ENGINEER"], {
        message: "Role must be one of these values: ADMIN, INTERN, ENGINEER"
    })
    role: "ADMIN" | "INTERN" | "ENGINEER";
    // All fields are required
}