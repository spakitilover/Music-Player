import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entity/music.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  providers: [MusicService],
  controllers: [MusicController],
})
export class MusicModule {}
