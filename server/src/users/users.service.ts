import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { error } from 'console';
import { UsersDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}

  find() {
    return this.usersRepo.find({
      relations: {
        likes: true,
        favorites: {
          music: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new error();
    }
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.usersRepo.findOne({
      where: { username: username },
      relations: {
        likes: true,
        favorites: {
          music: true,
        },
      },
    });
    if (!user) {
      throw new error();
    }
    return user;
  }

  async create(usersDto: UsersDto) {
    const user = await this.usersRepo.create(usersDto);

    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(usersDto.password, salt);

    return await this.usersRepo.save({ ...user, password: hash });
  }

  async remove(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new error();
    }
    return this.usersRepo.remove(user);
  }
}
