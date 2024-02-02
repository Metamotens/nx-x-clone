import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from '@x-clone/users';
import { AuthGuard, AuthModule } from '@x-clone/auth';
import { APP_GUARD } from '@nestjs/core';
import { PostsModule } from '@x-clone/posts';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule, AuthModule, PostsModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule { }
