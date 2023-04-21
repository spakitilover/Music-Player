import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Get()
  find() {
    return this.likesService.find();
  }

  @Post('addlike/:id')
  addLike(@Param('id') id: number, @Body('musicId') musicId: number) {
    return this.likesService.addLike(id, musicId);
  }

  @Delete('unlike/:id')
  unlike(@Param('id') id: number) {
    return this.likesService.unlike(id);
  }
}
