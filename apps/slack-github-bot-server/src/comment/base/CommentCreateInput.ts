/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { PullRequestWhereUniqueInput } from "../../pullRequest/base/PullRequestWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumCommentSource } from "./EnumCommentSource";

@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => PullRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PullRequestWhereUniqueInput)
  @IsOptional()
  @Field(() => PullRequestWhereUniqueInput, {
    nullable: true,
  })
  pullRequest?: PullRequestWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumCommentSource,
  })
  @IsEnum(EnumCommentSource)
  @IsOptional()
  @Field(() => EnumCommentSource, {
    nullable: true,
  })
  source?: "Option1" | null;
}

export { CommentCreateInput as CommentCreateInput };
