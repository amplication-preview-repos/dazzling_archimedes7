import * as graphql from "@nestjs/graphql";
import { RepositoryResolverBase } from "./base/repository.resolver.base";
import { Repository } from "./base/Repository";
import { RepositoryService } from "./repository.service";

@graphql.Resolver(() => Repository)
export class RepositoryResolver extends RepositoryResolverBase {
  constructor(protected readonly service: RepositoryService) {
    super(service);
  }
}
