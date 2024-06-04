import {Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, DeleteDateColumn, JoinColumn} from "typeorm";
import { games } from "src/games/entities/game.entity";
import {Result} from "src/results/entitie/result.entity"


@Entity()
export class Player{
    
    @PrimaryGeneratedColumn()
    id: number
    @Column ()
    name: string;

    @OneToOne(() => Result, result => result.score)
    @JoinColumn()
    result: Result;

    @ManyToOne(() => games, games => games.players)
    @JoinColumn({name: 'tournamentId'})
    games: games;

    @DeleteDateColumn()
    deletedAt: Date;


}
