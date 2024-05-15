import { Module } from "@nestjs/common";
import { PullRequestModuleBase } from "./base/pullRequest.module.base";
import { PullRequestService } from "./pullRequest.service";
import { PullRequestController } from "./pullRequest.controller";
import { PullRequestResolver } from "./pullRequest.resolver";

@Module({
  imports: [PullRequestModuleBase],
  controllers: [PullRequestController],
  providers: [PullRequestService, PullRequestResolver],
  exports: [PullRequestService],
})
export class PullRequestModule {}
