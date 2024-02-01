import { Body, Controller, Post, HttpCode, HttpStatus, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '@x-clone/shared';

interface UserLogin {
    username: string;
    password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() userLogin: UserLogin) {
        return this.authService.login(userLogin.username, userLogin.password);
    }

    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user;
    }
}
