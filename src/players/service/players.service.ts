import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './../dto/create.player.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './../entities/player.entity'; 
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) 
    private readonly playerRepository: Repository<Player>
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = new Player();
    Object.assign(player, createPlayerDto);
    return await this.playerRepository.save(player);
  }

  async findAll(page: number = 1, limit: number = +process.env.LIMIT): Promise<Player[]> {
    const skip = (page - 1) * limit;
    return this.playerRepository.find({
      skip,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playerRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`Jugador con ID ${id} no encontrado`);
    }
    return player;
  }

  async update(id: number, UpdatePlayerDto: Partial<Player>): Promise<Player> {
    const result = await this.playerRepository.update(id, UpdatePlayerDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Jugador con ID ${id} no encontrado`);
    }
    return this.playerRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    const player = await this.playerRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException('Jugador no encontrado');
    }
    await this.playerRepository.softRemove(player);
  }
}

