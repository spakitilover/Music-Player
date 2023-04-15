import { Music } from 'src/music/entity/music.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Music, (music) => music.albums)
  music: Music;

  @ManyToMany(() => Users, (users) => users.albums)
  users: Users[];

  @ManyToMany(() => Users, (users) => users.albums)
  favorites: Users[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
