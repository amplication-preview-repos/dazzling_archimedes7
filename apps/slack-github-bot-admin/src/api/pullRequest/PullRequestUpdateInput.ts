import { CommentUpdateManyWithoutPullRequestsInput } from "./CommentUpdateManyWithoutPullRequestsInput";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type PullRequestUpdateInput = {
  comments?: CommentUpdateManyWithoutPullRequestsInput;
  repository?: RepositoryWhereUniqueInput | null;
  title?: string | null;
};
