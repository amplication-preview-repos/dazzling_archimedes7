import { PullRequest } from "../pullRequest/PullRequest";

export type Repository = {
  createdAt: Date;
  id: string;
  name: string | null;
  pullRequests?: Array<PullRequest>;
  updatedAt: Date;
  webhookUrl: string | null;
};
