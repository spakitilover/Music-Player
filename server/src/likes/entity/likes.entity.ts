import { Music } from 'src/music/entity/music.entity';
import { Users } from 'src/users/entity/users.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LikesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (users) => users.like)
  users: Users;

  @ManyToOne(() => Music, (music) => music.like, { onDelete: 'CASCADE' })
  music: Music;
}
