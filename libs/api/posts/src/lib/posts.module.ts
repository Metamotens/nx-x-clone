import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaModule } from '@x-clone/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [],
})
export class PostsModule {}
