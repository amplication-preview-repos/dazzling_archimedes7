import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PullRequestListRelationFilter } from "../pullRequest/PullRequestListRelationFilter";

export type RepositoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  pullRequests?: PullRequestListRelationFilter;
  webhookUrl?: StringNullableFilter;
};
