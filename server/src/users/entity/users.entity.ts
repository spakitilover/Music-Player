import { Albums } from 'src/albums/entity/albums.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
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

  @Column()
  password: string;

  @ManyToMany(() => Albums, (albums) => albums.users)
  @JoinTable({ name: 'userAlbums' })
  albums: Albums[];

  @ManyToMany(() => Albums, (albums) => albums.users)
  @JoinTable({ name: 'favorites' })
  favorites: Albums[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
