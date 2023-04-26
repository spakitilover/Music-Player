import { Injectable, BadRequestException } from '@nestjs/common';
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
        like: true,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id: id },
      relations: {
        like: {
          users: true,
          music: {
            albums: true,
          },
        },
      },
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
        like: {
          users: true,
          music: {
            albums: true,
          },
        },
      },
    });
    if (!user) {
      throw new error();
    }
    return user;
  }

  async create(usersDto: UsersDto) {
    /* const ExistingUser = await this.usersRepo.findOne({
      where: {
        username: usersDto.username,
        fullname: usersDto.fullname,
        email: usersDto.email,
      },
    });

    if (ExistingUser.username || ExistingUser.fullname || ExistingUser.email) {
      throw new BadRequestException();
    }*/

    const user = await this.usersRepo.create(usersDto);

    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(usersDto.password, salt);

    if (
      usersDto.username.length < 5 ||
      usersDto.fullname.length < 5 ||
      usersDto.password.length < 8 ||
      usersDto.email.length < 8
    ) {
      throw new BadRequestException();
    }

    return await this.usersRepo.save({ ...user, password: hash });
  }

  async createImage(id: number, image: string) {
    const user = await this.usersRepo.findOne({
      where: { id: id },
    });

    return await this.usersRepo.save({ ...user, image });
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
