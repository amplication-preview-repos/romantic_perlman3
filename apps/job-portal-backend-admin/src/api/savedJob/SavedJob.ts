import { Job } from "../job/Job";
import { User } from "../user/User";

export type SavedJob = {
  createdAt: Date;
  id: string;
  job?: Job | null;
  note: string | null;
  updatedAt: Date;
  user?: User | null;
};
