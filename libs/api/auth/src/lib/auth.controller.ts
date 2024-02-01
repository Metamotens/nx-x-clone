import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

interface UserLogin {
    username: string;
    password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() userLogin: UserLogin) {
        console.log('login', userLogin);
        return this.authService.login(userLogin.username, userLogin.password);
    }

}
