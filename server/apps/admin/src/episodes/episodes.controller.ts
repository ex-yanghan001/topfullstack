import { Episode } from '@libs/db/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Episode
})
@Controller('episodes')
@ApiUseTags('课时')
export class EpisodesController {
  constructor(@InjectModel(Episode) private readonly model){}

  @Get('option')
  option() {
    return {
      title: '课时管理',
      column: [
        {prop: 'name', label: '课时名称'},
        {prop: 'file', label: '课时', type: 'upload'},
      ]
    }
  }
}
