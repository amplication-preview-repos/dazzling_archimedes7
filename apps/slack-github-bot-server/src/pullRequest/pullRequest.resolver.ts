import * as graphql from "@nestjs/graphql";
import { PullRequestResolverBase } from "./base/pullRequest.resolver.base";
import { PullRequest } from "./base/PullRequest";
import { PullRequestService } from "./pullRequest.service";

@graphql.Resolver(() => PullRequest)
export class PullRequestResolver extends PullRequestResolverBase {
  constructor(protected readonly service: PullRequestService) {
    super(service);
  }
}
