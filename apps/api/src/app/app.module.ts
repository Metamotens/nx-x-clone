import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from '@x-clone/users';
import { AuthGuard, AuthModule } from '@x-clone/auth';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    /* TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true,  // not in prod
    }), */
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule, AuthModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule { }
