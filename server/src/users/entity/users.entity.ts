import { Albums } from 'src/albums/entity/albums.entity';
import { Music } from 'src/music/entity/music.entity';
import { LikesEntity } from 'src/likes/entity/likes.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => LikesEntity, (like) => like.users)
  like: LikesEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
