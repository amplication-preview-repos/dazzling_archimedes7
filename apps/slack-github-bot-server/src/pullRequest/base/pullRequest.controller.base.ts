/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PullRequestService } from "../pullRequest.service";
import { PullRequestCreateInput } from "./PullRequestCreateInput";
import { PullRequest } from "./PullRequest";
import { PullRequestFindManyArgs } from "./PullRequestFindManyArgs";
import { PullRequestWhereUniqueInput } from "./PullRequestWhereUniqueInput";
import { PullRequestUpdateInput } from "./PullRequestUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class PullRequestControllerBase {
  constructor(protected readonly service: PullRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PullRequest })
  async createPullRequest(
    @common.Body() data: PullRequestCreateInput
  ): Promise<PullRequest> {
    return await this.service.createPullRequest({
      data: {
        ...data,

        repository: data.repository
          ? {
              connect: data.repository,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        repository: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PullRequest] })
  @ApiNestedQuery(PullRequestFindManyArgs)
  async pullRequests(@common.Req() request: Request): Promise<PullRequest[]> {
    const args = plainToClass(PullRequestFindManyArgs, request.query);
    return this.service.pullRequests({
      ...args,
      select: {
        createdAt: true,
        id: true,

        repository: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PullRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pullRequest(
    @common.Param() params: PullRequestWhereUniqueInput
  ): Promise<PullRequest | null> {
    const result = await this.service.pullRequest({
      where: params,
      select: {
        createdAt: true,
        id: true,

        repository: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PullRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePullRequest(
    @common.Param() params: PullRequestWhereUniqueInput,
    @common.Body() data: PullRequestUpdateInput
  ): Promise<PullRequest | null> {
    try {
      return await this.service.updatePullRequest({
        where: params,
        data: {
          ...data,

          repository: data.repository
            ? {
                connect: data.repository,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          repository: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PullRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePullRequest(
    @common.Param() params: PullRequestWhereUniqueInput
  ): Promise<PullRequest | null> {
    try {
      return await this.service.deletePullRequest({
        where: params,
        select: {
          createdAt: true,
          id: true,

          repository: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: PullRequestWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,

        pullRequest: {
          select: {
            id: true,
          },
        },

        source: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: PullRequestWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updatePullRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: PullRequestWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updatePullRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: PullRequestWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updatePullRequest({
      where: params,
      data,
      select: { id: true },
    });
  }
}