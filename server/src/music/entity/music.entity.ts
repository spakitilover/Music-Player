import { Albums } from 'src/albums/entity/albums.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  song: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Albums, (albums) => albums.music)
  albums: Albums;

  @ManyToMany(() => Users, (users) => users.likes)
  likes: Music[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
