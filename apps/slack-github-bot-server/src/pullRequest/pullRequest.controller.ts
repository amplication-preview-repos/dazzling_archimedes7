import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PullRequestService } from "./pullRequest.service";
import { PullRequestControllerBase } from "./base/pullRequest.controller.base";

@swagger.ApiTags("pullRequests")
@common.Controller("pullRequests")
export class PullRequestController extends PullRequestControllerBase {
  constructor(protected readonly service: PullRequestService) {
    super(service);
  }
}
