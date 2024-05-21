import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
