import { ApiModelProperty } from '@nestjs/swagger'
import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {
  @ApiModelProperty({ description: '课程名称' })
  @prop()
  name: string
  @ApiModelProperty({ description: '封面图'})
  @prop()
  cover: string

  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[]
}