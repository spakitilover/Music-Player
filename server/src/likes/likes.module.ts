import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesEntity } from './entity/likes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikesEntity])],
  providers: [LikesService],
  controllers: [LikesController],
})
export class LikesModule {}
