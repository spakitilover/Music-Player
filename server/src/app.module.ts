import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { MusicModule } from './music/music.module';
import { Users } from './users/entity/users.entity';
import { Albums } from './albums/entity/albums.entity';
import { Music } from './music/entity/music.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0644758842kkk',
      database: 'music',
      entities: [Users, Albums, Music],
      synchronize: true,
    }),
    UsersModule,
    AlbumsModule,
    MusicModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
