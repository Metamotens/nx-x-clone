import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@x-clone/users';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(email: string, pass: string): Promise<{ accessToken: string }> {
        const user = await this.usersService.findByMail(email);

        if (user?.password !== pass) throw new UnauthorizedException();

        const payload = { sub: user.id, username: user.name };

        return { accessToken: await this.jwtService.signAsync(payload) };
    }
}
