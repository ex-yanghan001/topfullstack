import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Course
})
@Controller('courses')
@ApiUseTags('课程')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>){}

  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        { prop: 'name', label: '课程名称', row: true },
        { prop: 'cover', label: '课程封面', type: 'upload', listType: 'picture-img', action: '/upload' },
      ]
    }
  }
}
