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
import { CommentCreateNestedManyWithoutPullRequestsInput } from "./CommentCreateNestedManyWithoutPullRequestsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { RepositoryWhereUniqueInput } from "../../repository/base/RepositoryWhereUniqueInput";

@InputType()
class PullRequestCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutPullRequestsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutPullRequestsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutPullRequestsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPullRequestsInput;

  @ApiProperty({
    required: false,
    type: () => RepositoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepositoryWhereUniqueInput)
  @IsOptional()
  @Field(() => RepositoryWhereUniqueInput, {
    nullable: true,
  })
  repository?: RepositoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { PullRequestCreateInput as PullRequestCreateInput };