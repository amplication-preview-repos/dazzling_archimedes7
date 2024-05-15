import { PullRequest } from "../pullRequest/PullRequest";

export type Comment = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  pullRequest?: PullRequest | null;
  source?: "Option1" | null;
  updatedAt: Date;
};
