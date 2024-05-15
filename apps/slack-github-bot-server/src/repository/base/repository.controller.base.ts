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
import { RepositoryService } from "../repository.service";
import { RepositoryCreateInput } from "./RepositoryCreateInput";
import { Repository } from "./Repository";
import { RepositoryFindManyArgs } from "./RepositoryFindManyArgs";
import { RepositoryWhereUniqueInput } from "./RepositoryWhereUniqueInput";
import { RepositoryUpdateInput } from "./RepositoryUpdateInput";
import { PullRequestFindManyArgs } from "../../pullRequest/base/PullRequestFindManyArgs";
import { PullRequest } from "../../pullRequest/base/PullRequest";
import { PullRequestWhereUniqueInput } from "../../pullRequest/base/PullRequestWhereUniqueInput";

export class RepositoryControllerBase {
  constructor(protected readonly service: RepositoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Repository })
  async createRepository(
    @common.Body() data: RepositoryCreateInput
  ): Promise<Repository> {
    return await this.service.createRepository({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        webhookUrl: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Repository] })
  @ApiNestedQuery(RepositoryFindManyArgs)
  async repositories(@common.Req() request: Request): Promise<Repository[]> {
    const args = plainToClass(RepositoryFindManyArgs, request.query);
    return this.service.repositories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        webhookUrl: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async repository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    const result = await this.service.repository({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        webhookUrl: true,
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
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRepository(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() data: RepositoryUpdateInput
  ): Promise<Repository | null> {
    try {
      return await this.service.updateRepository({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          webhookUrl: true,
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
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRepository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    try {
      return await this.service.deleteRepository({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          webhookUrl: true,
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

  @common.Get("/:id/pullRequests")
  @ApiNestedQuery(PullRequestFindManyArgs)
  async findPullRequests(
    @common.Req() request: Request,
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<PullRequest[]> {
    const query = plainToClass(PullRequestFindManyArgs, request.query);
    const results = await this.service.findPullRequests(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pullRequests")
  async connectPullRequests(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: PullRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pullRequests: {
        connect: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pullRequests")
  async updatePullRequests(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: PullRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pullRequests: {
        set: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pullRequests")
  async disconnectPullRequests(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: PullRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pullRequests: {
        disconnect: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }
}
