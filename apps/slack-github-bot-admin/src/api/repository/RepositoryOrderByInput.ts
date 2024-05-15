import { SortOrder } from "../../util/SortOrder";

export type RepositoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  webhookUrl?: SortOrder;
};
