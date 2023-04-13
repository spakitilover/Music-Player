import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

@Controller('music')
export class MusicController {
  constructor(private musicService: MusicService) {}

  @Get()
  find() {
    return this.musicService.find();
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

    @UploadedFile('file') file: Express.Multer.File,
  ) {
    return this.musicService.create(id, file.filename);
  }
}
