import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PullRequestServiceBase } from "./base/pullRequest.service.base";

@Injectable()
export class PullRequestService extends PullRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
