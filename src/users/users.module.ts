import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule implements Prisma.UserCreateInput{
  id: string;
  firstName: string;
  lastLame: string;
  username: string;
  password: string;
  
}
