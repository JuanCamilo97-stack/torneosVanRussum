import { Module } from '@nestjs/common';
import { GamesService } from './service/games.service';
import { GamesController } from './controllers/games.controller';

@Module({
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
