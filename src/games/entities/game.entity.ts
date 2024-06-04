import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class games{
    
    @PrimaryGeneratedColumn()
    id: number
    @Column ()
    name: string;

}
