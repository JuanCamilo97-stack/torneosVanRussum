import { Controller, Get, Param, Body, Post, Put, Delete, ParseIntPipe } from '@nestjs/common';
import {Games} from './../entities/game.entity'
import {GamesService} from './../service/games.service';


@Controller('api/games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Get()
    async getAll(): Promise<Games[]> {
        return this.gamesService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Games> {
        return this.gamesService.findOne(id);
    }

    @Post()
    async create(@Body() gameData: Partial<Games>): Promise<Games> {
        return this.gamesService.create(gameData);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: Partial<Games>): Promise<Games> {
        return this.gamesService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.gamesService.remove(id)
    }

}