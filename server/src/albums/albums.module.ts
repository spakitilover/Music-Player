import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from './entity/albums.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Albums])],
  providers: [AlbumsService],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
