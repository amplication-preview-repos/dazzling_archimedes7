import { PullRequest as TPullRequest } from "../api/pullRequest/PullRequest";

export const PULLREQUEST_TITLE_FIELD = "title";

export const PullRequestTitle = (record: TPullRequest): string => {
  return record.title?.toString() || String(record.id);
};
