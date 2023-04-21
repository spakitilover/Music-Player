import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikesEntity } from './entity/likes.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(LikesEntity) private likesRepo: Repository<LikesEntity>,
  ) {}

  find() {
    return this.likesRepo.find({
      relations: {
        music: {
          albums: true,
        },
        users: true,
      },
    });
  }

  async addLike(id: number, musicId: number) {
    const rest = await this.likesRepo
      .createQueryBuilder('likes')
      .insert()
      .into('likes_entity')
      .values({
        users: id,
        music: musicId,
      })
      .execute();
    const AfterInsertId = rest.raw.find((item) => item.id);
    const like = await this.likesRepo.findOne({
      where: { id: AfterInsertId.id },
      relations: {
        music: {
          albums: true,
        },
        users: true,
      },
    });
    return like;
  }

  async unlike(id: number) {
    const rest = await this.likesRepo.findOne({
      where: { id: id },
      relations: {
        music: {
          albums: true,
        },
        users: true,
      },
    });

    return await this.likesRepo.remove(rest);
  }
}
