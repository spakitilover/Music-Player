import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  find() {
    return this.usersService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Get()
  findByUsername(@Body('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  @Post('create')
  create(@Body() usersDto: UsersDto) {
    return this.usersService.create(usersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Patch('create/image/:id')
  createImage(
    @Param('id') id: number,
    @UploadedFile('image') image: Express.Multer.File,
  ) {}
}
