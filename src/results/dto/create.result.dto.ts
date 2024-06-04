import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateResultDto {
    @IsString()
    @IsNotEmpty()
    score: string;    

    @IsInt()
    @IsNotEmpty()
    playerId: number;    
}
