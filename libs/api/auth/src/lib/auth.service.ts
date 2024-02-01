import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@x-clone/users';
import { UsersService } from 'libs/api/users/src/lib/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async login(username: string, pass: string): Promise<User> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) throw new UnauthorizedException();
        return { password: user.password, ...user.result };
    }
}
