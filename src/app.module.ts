import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gideonfame94:GidsDev%4003122004@cluster0.jywljhv.mongodb.net/'), UsersModule],

  
  controllers: [],
  providers: [],
})
export class AppModule {}

