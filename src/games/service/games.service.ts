import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {games} from './../entities/game.entity'

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(games) private gamesRepo: Repository<games>
    ) {}

    findAll() {
        return this.gamesRepo.find();
    }

    async findOne(id: number) {
        return this.gamesRepo.findOne({ where: { id } });
    }

    async create(gameData: Partial<games>) {
        const newGame = this.gamesRepo.create(gameData);
        return this.gamesRepo.save(newGame);
    }

    async update(id: number, updateData: Partial<games>) {
        await this.gamesRepo.update(id, updateData);
        return this.gamesRepo.findOne({ where: { id } });
    }

    async remove(id: number) {
        const game = await this.gamesRepo.findOne({ where: { id } });
        if (game) {
            await this.gamesRepo.remove(game);
            return true;
        }
        return false;
    }
}