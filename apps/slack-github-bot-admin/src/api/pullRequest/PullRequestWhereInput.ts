import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PullRequestWhereInput = {
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  repository?: RepositoryWhereUniqueInput;
  title?: StringNullableFilter;
};
