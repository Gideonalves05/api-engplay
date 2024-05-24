// courses.service.ts
import { Injectable } from '@nestjs/common';
import { courses } from './courses.data';

@Injectable()
export class CoursesService {
  findCoursesByTag(arg0: string): any[] | PromiseLike<any[]> {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  findAll(): any[] {
    return courses;
  }

  findOne(id: number): any {
    return courses.find(course => course.id === id);
  }


  async recommendCourses(tags: string[]): Promise<any[]> {
    return courses.filter(course => course.tags.some(tag => tags.includes(tag)));
  }
}
