import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SavedJobModuleBase } from "./base/savedJob.module.base";
import { SavedJobService } from "./savedJob.service";
import { SavedJobController } from "./savedJob.controller";
import { SavedJobResolver } from "./savedJob.resolver";

@Module({
  imports: [SavedJobModuleBase, forwardRef(() => AuthModule)],
  controllers: [SavedJobController],
  providers: [SavedJobService, SavedJobResolver],
  exports: [SavedJobService],
})
export class SavedJobModule {}
