import {  IsNotEmpty, IsString } from "class-validator";

export class createGameDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;     
}
