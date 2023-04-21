import { Albums } from 'src/albums/entity/albums.entity';
import { Users } from 'src/users/entity/users.entity';
import { LikesEntity } from 'src/likes/entity/likes.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => LikesEntity, (likes) => likes.music, {
    onDelete: 'CASCADE',
  })
  like: LikesEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
