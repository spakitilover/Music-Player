import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  find() {
    return this.albumService.find();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.albumService.create(name);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.albumService.remove(id);
  }
}
