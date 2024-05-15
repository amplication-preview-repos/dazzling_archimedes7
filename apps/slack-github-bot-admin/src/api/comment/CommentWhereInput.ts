import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PullRequestWhereUniqueInput } from "../pullRequest/PullRequestWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  pullRequest?: PullRequestWhereUniqueInput;
  source?: "Option1";
};
