import { PartialType } from '@nestjs/mapped-types';
import { createGameDto } from './create.game.dto';

export class updateGameDto extends PartialType(createGameDto) {}
