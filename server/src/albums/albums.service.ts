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
    return this.albumRepo.find();
  }

  async create(name: string) {
    const album = await this.albumRepo.create({ name });
    return this.albumRepo.save(album);
  }

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
