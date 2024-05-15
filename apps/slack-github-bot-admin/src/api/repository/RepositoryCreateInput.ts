import { PullRequestCreateNestedManyWithoutRepositoriesInput } from "./PullRequestCreateNestedManyWithoutRepositoriesInput";

export type RepositoryCreateInput = {
  name?: string | null;
  pullRequests?: PullRequestCreateNestedManyWithoutRepositoriesInput;
  webhookUrl?: string | null;
};
