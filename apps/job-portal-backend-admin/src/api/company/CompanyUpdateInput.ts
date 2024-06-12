import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  description?: string | null;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
