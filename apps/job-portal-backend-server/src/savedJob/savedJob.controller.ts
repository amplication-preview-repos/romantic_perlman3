import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SavedJobService } from "./savedJob.service";
import { SavedJobControllerBase } from "./base/savedJob.controller.base";

@swagger.ApiTags("savedJobs")
@common.Controller("savedJobs")
export class SavedJobController extends SavedJobControllerBase {
  constructor(
    protected readonly service: SavedJobService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
