import { PullRequestWhereUniqueInput } from "../pullRequest/PullRequestWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  pullRequest?: PullRequestWhereUniqueInput | null;
  source?: "Option1" | null;
};
