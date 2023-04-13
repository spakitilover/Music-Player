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
        likes: true,
        albums: true,
      },
    });
  }

  async findOne(id: number) {
    const music = await this.musicRepo.findOne({
      where: { id: id },
    });

    return music;
  }

  async create(id: number, file: string) {
    const album = await this.albumRepo.findOne({
      where: { id: id },
    });

    await this.albumRepo.save(album);

    const music = await this.musicRepo.create({ song: file });

    music.albums = album;

    return this.musicRepo.save(music);
  }
}
