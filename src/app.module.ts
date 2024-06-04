import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        retryDelay: 3000,
        retryAttempts: 10,
      }),
    }),
    GamesModule, 
    PlayersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
