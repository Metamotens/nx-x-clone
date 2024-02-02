import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@x-clone/prisma';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findByMail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }
}
