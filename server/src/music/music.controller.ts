import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  Req,
  Res,
  Patch,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { diskStorage } from 'multer';

@Controller('music')
export class MusicController {
  constructor(private musicService: MusicService) {}

  @Get()
  find() {
    return this.musicService.find();
  }

  @Get(':songPath')
  getSongs(@Param('songPath') song, @Res() res) {
    return res.sendFile(song, { root: './uploads' });
  }

  @Post(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname;

          cb(null, name);
        },
      }),
    }),
  )
  create(
    @Param('id') id: number,
    @Body('image') image: string,
    @UploadedFile('file') file: Express.Multer.File,
  ) {
    return this.musicService.create(id, file.filename, image);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body('image') image: string) {
    return this.musicService.update(id, image);
  }
}
