import { PullRequestWhereInput } from "./PullRequestWhereInput";
import { PullRequestOrderByInput } from "./PullRequestOrderByInput";

export type PullRequestFindManyArgs = {
  where?: PullRequestWhereInput;
  orderBy?: Array<PullRequestOrderByInput>;
  skip?: number;
  take?: number;
};
