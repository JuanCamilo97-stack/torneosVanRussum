import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Games{
    
    @PrimaryGeneratedColumn()
    id: number
    @Column ()
    name: string;

}