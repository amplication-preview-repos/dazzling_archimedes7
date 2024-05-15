import { PullRequestUpdateManyWithoutRepositoriesInput } from "./PullRequestUpdateManyWithoutRepositoriesInput";

export type RepositoryUpdateInput = {
  name?: string | null;
  pullRequests?: PullRequestUpdateManyWithoutRepositoriesInput;
  webhookUrl?: string | null;
};
