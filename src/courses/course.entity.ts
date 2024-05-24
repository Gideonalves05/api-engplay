// courses/schemas/course.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  tags: string[];

  // Adicione outros campos conforme necessário
}

export const CourseSchema = SchemaFactory.createForClass(Course);
