import { Module } from '@nestjs/common';
import { GamesService } from './service/games.service';
import { GamesController } from './controllers/games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {games} from './entities/game.entity'


@Module({
  imports: [
    TypeOrmModule.forFeature([games]),
  ],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
