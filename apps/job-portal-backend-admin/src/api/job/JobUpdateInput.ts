import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { SavedJobUpdateManyWithoutJobsInput } from "./SavedJobUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  experienceNeeded?: string | null;
  location?: string | null;
  savedJobs?: SavedJobUpdateManyWithoutJobsInput;
  skillsNeeded?: string | null;
  title?: string | null;
};
