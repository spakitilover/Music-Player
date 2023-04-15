import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  find() {
    return this.albumService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.albumService.findOne(id);
  }

  @Post()
  create(@Body('name') name: string) {
    return this.albumService.create(name);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.albumService.remove(id);
  }

  /* @Patch(':id')
  update(@Param('id') id: number, @Body('image') image: string) {
    return this.albumService.update(id, image);
  }*/
}
