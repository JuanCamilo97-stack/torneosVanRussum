import { Controller, Get, Param, Body, Post, Put, Delete, ParseIntPipe } from '@nestjs/common';
import {games} from './../entities/game.entity'
import {GamesService} from './../service/games.service';


@Controller('api/games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Get('all')
    async getAll(): Promise<games[]> {
        return await this.gamesService.findAll();
    }

    @Get(':_id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<games> {
        return await this.gamesService.findOne(id);
    }

    @Post()
    async create(@Body() gameData: Partial<games>): Promise<games> {
        return await this.gamesService.create(gameData);
    }

    @Put(':_id')
    async update(
        @Param('_id', ParseIntPipe) id: number,
        @Body() updateData: Partial<games>): Promise<games> {
        return await this.gamesService.update(id, updateData);
    }

    @Delete(':_id')
    async delete(@Param('_id', ParseIntPipe) id: number): Promise<boolean> {
    return await this.gamesService.remove(id)
    }

}