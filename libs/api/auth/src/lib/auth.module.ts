import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '@x-clone/users';

@Module({
  imports: [UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env['JWT_SECRET'],
      signOptions: { expiresIn: '3600s' },
    })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
