import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { PlayersService } from './../service/players.service';
import { CreatePlayerDto } from './../dto/create.player.dto';
// import { UpdatePlayerDto } from './../dto/update.player.dto';

@Controller('api/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() createPlayerDto: CreatePlayerDto) {
  return this.playersService.create(createPlayerDto);
}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  // @Patch(':id')
  // @HttpCode(HttpStatus.OK)
  // update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
  //   return this.playersService.update(+id, updatePlayerDto);
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
