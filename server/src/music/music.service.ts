import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Music } from './entity/music.entity';
import { Repository } from 'typeorm';
import { Albums } from 'src/albums/entity/albums.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music) private musicRepo: Repository<Music>,
    @InjectRepository(Albums) private albumRepo: Repository<Albums>,
  ) {}

  async find() {
    return await this.musicRepo.find({
      relations: {
        albums: true,
        like: {
          users: true,
          music: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const music = await this.musicRepo.findOne({
      where: { id: id },
      relations: {
        albums: true,
        like: {
          users: true,
          music: true,
        },
      },
    });

    return music;
  }

  async update(id: number, image: string) {
    const music = await this.musicRepo.findOne({
      where: { id: id },
    });

    return await this.musicRepo.save({ ...music, image });
  }

  async create(id: number, file: string, image: string) {
    const album = await this.albumRepo.findOne({
      where: { id: id },
    });

    await this.albumRepo.save(album);

    const music = await this.musicRepo.create({ song: file, image: image });

    music.albums = album;

    return this.musicRepo.save(music);
  }
}
