import { Comment } from "../comment/Comment";
import { Repository } from "../repository/Repository";

export type PullRequest = {
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  repository?: Repository | null;
  title: string | null;
  updatedAt: Date;
};
