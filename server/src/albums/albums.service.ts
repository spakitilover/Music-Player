import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Albums } from './entity/albums.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Albums) private albumRepo: Repository<Albums>,
  ) {}

  find() {
    return this.albumRepo.find({
      relations: {
        music: {
          like: {
            users: true,
            music: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const album = await this.albumRepo.findOne({
      where: { id: id },
      relations: {
        music: {
          like: {
            users: true,
            music: true,
          },
        },
      },
    });
    if (!album) {
      throw new NotFoundException();
    }
    return album;
  }

  async create(name: string) {
    const album = await this.albumRepo.create({ name });
    return this.albumRepo.save(album);
  }

  /*async update(id: number, image: string) {
    const album = await this.albumRepo.findOne({
      where: { id: id },
    });

    return await this.albumRepo.save({ ...album, image });
  }
*/
  async remove(id: number) {
    const album = await this.albumRepo.findOne({
      where: { id: id },
    });
    if (!album) {
      throw new NotFoundException();
    }
    return await this.albumRepo.remove(album);
  }
}
