import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SavedJobServiceBase } from "./base/savedJob.service.base";

@Injectable()
export class SavedJobService extends SavedJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
