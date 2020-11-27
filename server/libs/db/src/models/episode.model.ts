import { ApiModelProperty } from '@nestjs/swagger'
import { modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @ApiModelProperty({ description: '课时名称' })
  @prop()
  name: string
  @ApiModelProperty({ description: '文件' })
  @prop()
  file: string

}