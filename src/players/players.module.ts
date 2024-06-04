import { Module } from '@nestjs/common';
import { PlayersService } from './service/players.service';
import { PlayersController } from './controllers/players.controller';

@Module({
  providers: [PlayersService],
  controllers: [PlayersController]
})
export class PlayersModule {}
