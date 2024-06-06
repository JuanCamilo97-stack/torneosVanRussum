import {  IsNotEmpty, IsString } from "class-validator";

export class createGameDto {
    @IsString()
    @IsNotEmpty()
    name: string;     
}
