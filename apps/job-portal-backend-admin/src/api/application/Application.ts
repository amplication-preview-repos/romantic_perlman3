import { Job } from "../job/Job";
import { User } from "../user/User";

export type Application = {
  createdAt: Date;
  id: string;
  job?: Job | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
