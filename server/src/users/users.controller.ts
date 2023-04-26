import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  find() {
    return this.usersService.find();
  }

  @Get(':image')
  imagesRoot(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './uploadsImages' });
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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadsImages',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtention = file.originalname.split('.')[1];
          const newFileName =
            name.split('').join('_') + '_' + Date.now() + '.' + fileExtention;
          cb(null, newFileName);
        },
      }),
    }),
  )
  createImage(
    @Param('id') id: number,
    @UploadedFile('file') image: Express.Multer.File,
  ) {
    return this.usersService.createImage(id, image.filename);
  }
}
