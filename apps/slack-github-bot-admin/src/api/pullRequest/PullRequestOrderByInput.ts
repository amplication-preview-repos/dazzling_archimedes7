import { SortOrder } from "../../util/SortOrder";

export type PullRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  repositoryId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
