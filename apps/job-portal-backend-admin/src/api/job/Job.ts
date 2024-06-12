import { Application } from "../application/Application";
import { Company } from "../company/Company";
import { SavedJob } from "../savedJob/SavedJob";

export type Job = {
  applications?: Array<Application>;
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  experienceNeeded: string | null;
  id: string;
  location: string | null;
  savedJobs?: Array<SavedJob>;
  skillsNeeded: string | null;
  title: string | null;
  updatedAt: Date;
};
