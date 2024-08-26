import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { RolesApiMessage } from "src/common/consts/api-message.const";
import {
  BaseResponseMapper,
  createResponseMapper,
} from "src/common/mappers/base-response.mapper";
import { UserEntity } from "../entities/user.entity";

export class UserResponseMapper extends BaseResponseMapper<User> {
  @ApiProperty({
    description: "Response message",
    example: RolesApiMessage.CREATED,
    type: String,
  })
  public message: string;

  @ApiProperty({
    description: "Response data",
    type: UserEntity,
  })
  public data: UserEntity;

  public static map(message: string, data: User): UserResponseMapper {
    return createResponseMapper(UserResponseMapper, message, data);
  }
}
