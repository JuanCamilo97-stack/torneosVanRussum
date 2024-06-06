import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { GamesService } from './../service/games.service';

@Controller('api/games')
export class GamesController {
  constructor( private readonly gamesService: GamesService) {}

  @Get()
  async findAll() {
    return await this.gamesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    const game = await this.gamesService.findOne(id);
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    return game;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createGame: any) {
    return await this.gamesService.create(createGame);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateGame: any) {
    await this.gamesService.update(id, updateGame);
    return await this.gamesService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.gamesService.remove(id);
    return { deleted: true };
  }
}