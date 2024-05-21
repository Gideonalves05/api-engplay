import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    private users: User[] = [
        {
          id: 1,
          firstName: 'Gideon',
          lastName: 'Ipiranga',
          username: 'GideonAlves',
          email: 'gideon@example.com',
          password: 'acb@123'
        },
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User ID ${id} not found`);
        }
        return user;
    }

    create(createUserDTO: any) {
        this.users.push(createUserDTO);
        return createUserDTO;
    }

    update(id: number, updateUserDTO: any) {
        const existingUser = this.findOne(id);
        if (existingUser) {
            const index = this.users.findIndex(user => user.id === id);
            this.users[index] = {
                id,
                ...updateUserDTO,
            };
        }
    }

    remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
}
