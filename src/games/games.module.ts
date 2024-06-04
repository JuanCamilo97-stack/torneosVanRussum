import { Module } from '@nestjs/common';
import { GamesService } from './service/games.service';
import { GamesController } from './controllers/games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Games} from './entities/game.entity'


@Module({
  imports: [
    TypeOrmModule.forFeature([Games]),
  ],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
