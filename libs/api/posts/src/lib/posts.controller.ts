import { Body, Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CustomRequest } from '@x-clone/shared';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get('/')
    async getPosts(@Request() req: CustomRequest): Promise<PostModel[]> {
        return this.postsService.getPosts(req.user.sub);
    }

    @Get('/:id')
    async getPostById(@Param('id') id: string): Promise<PostModel | null> {
        return this.postsService.getPostById(id);
    }

    @Post('/')
    async createPost(@Request() req: CustomRequest, @Body() post: PostModel): Promise<PostModel> {
        return this.postsService.createPost(req.user.sub, post);
    }

    @Delete('/:id')
    async deletePost(@Param('id') id: string): Promise<void> {
        this.postsService.deletePost(id);
    }
}
