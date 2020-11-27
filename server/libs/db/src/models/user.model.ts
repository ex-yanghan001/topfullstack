import { ApiModelProperty } from '@nestjs/swagger'
import { modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class User {
  @ApiModelProperty({description: '用户名', example: 'user1'})
  @prop()
  username: string
  @ApiModelProperty({ description: '密码', example: 'pass1' })
  @prop()
  password: string
}