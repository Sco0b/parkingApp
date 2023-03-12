import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  num: number;

  @Column({ default: false })
  isLock: boolean;
}
