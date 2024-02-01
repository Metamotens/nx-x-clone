import { Module } from '@nestjs/common';

import { UsersModule } from '@x-clone/users';
import { AuthModule } from '@x-clone/auth';

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
    UsersModule, AuthModule
  ],
})
export class AppModule { }
