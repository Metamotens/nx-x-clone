import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type User = any; //TODO

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            username: 'meta',
            password: '1234',
        }
    ];

    async findOne(username: string): Promise<User> {
        return this.users.find(user => user.username === username);
    }

}
