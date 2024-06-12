import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { SavedJobCreateNestedManyWithoutJobsInput } from "./SavedJobCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  experienceNeeded?: string | null;
  location?: string | null;
  savedJobs?: SavedJobCreateNestedManyWithoutJobsInput;
  skillsNeeded?: string | null;
  title?: string | null;
};
