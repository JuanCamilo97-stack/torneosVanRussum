import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'juandevlop',
      password: 'secret1234',
      database: 'db_games',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay:3000,
      retryAttempts:10
    }),
    
    GamesModule, PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
