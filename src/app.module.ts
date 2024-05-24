import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { FormModule } from './form/form.module';
import { CoursesController } from './courses/courses.controller';
import { FormController } from './form/form.controller';
import { CoursesService } from './courses/courses.service';
import { FormService } from './form/form.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gideonfame94:GidsDev%4003122004@cluster0.jywljhv.mongodb.net/'),
    CoursesModule,
    FormModule,
    UsersModule,
  ],

  controllers:[CoursesController, FormController],
  providers:[CoursesService, FormService]
})
export class AppModule {}
