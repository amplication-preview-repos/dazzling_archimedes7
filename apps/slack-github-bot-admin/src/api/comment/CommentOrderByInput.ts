import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pullRequestId?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};
