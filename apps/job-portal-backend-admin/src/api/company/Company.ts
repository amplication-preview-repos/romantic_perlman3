import { Job } from "../job/Job";

export type Company = {
  createdAt: Date;
  description: string | null;
  id: string;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
  website: string | null;
};
