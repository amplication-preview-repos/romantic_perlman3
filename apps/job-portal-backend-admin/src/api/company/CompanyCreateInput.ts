import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  description?: string | null;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
