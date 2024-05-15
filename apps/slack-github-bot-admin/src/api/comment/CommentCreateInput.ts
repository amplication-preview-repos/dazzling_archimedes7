import { PullRequestWhereUniqueInput } from "../pullRequest/PullRequestWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  pullRequest?: PullRequestWhereUniqueInput | null;
  source?: "Option1" | null;
};
