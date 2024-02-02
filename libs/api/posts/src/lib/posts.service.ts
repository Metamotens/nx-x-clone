import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PrismaService } from '@x-clone/prisma';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    getPosts(userId: number): Promise<PostModel[]> {
        return this.prisma.post.findMany({ where: { authorId: userId, published: true } });
    }

    getPostById(postId: string): Promise<PostModel | null> {
        return this.prisma.post.findUnique({ where: { id: Number(postId) } });
    }

    createPost(userId: number, post: PostModel): Promise<PostModel> {
        return this.prisma.post.create({ data: { ...post, published: true, authorId: Number(userId) } });
    }

    deletePost(postId: string): void {
        this.prisma.post.delete({ where: { id: Number(postId) } });
    }
}
