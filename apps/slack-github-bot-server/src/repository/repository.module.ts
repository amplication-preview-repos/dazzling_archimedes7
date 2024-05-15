import { Module } from "@nestjs/common";
import { RepositoryModuleBase } from "./base/repository.module.base";
import { RepositoryService } from "./repository.service";
import { RepositoryController } from "./repository.controller";
import { RepositoryResolver } from "./repository.resolver";

@Module({
  imports: [RepositoryModuleBase],
  controllers: [RepositoryController],
  providers: [RepositoryService, RepositoryResolver],
  exports: [RepositoryService],
})
export class RepositoryModule {}
