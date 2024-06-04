import { Column, Entity, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn, JoinColumn} from "typeorm";
import { Player } from "src/players/entities/player.entity";

@Entity()
export class games{
    
    @PrimaryGeneratedColumn()
    id: number
    @Column ()
    name: string;

    @OneToMany(() => Player, player => player.games)
    @JoinColumn()
    players: Player[];

    @DeleteDateColumn()
    deletedAt: Date;

}
