import { CommentCreateNestedManyWithoutPullRequestsInput } from "./CommentCreateNestedManyWithoutPullRequestsInput";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type PullRequestCreateInput = {
  comments?: CommentCreateNestedManyWithoutPullRequestsInput;
  repository?: RepositoryWhereUniqueInput | null;
  title?: string | null;
};
