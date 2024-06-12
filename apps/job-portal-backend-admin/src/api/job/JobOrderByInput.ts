import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  experienceNeeded?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  skillsNeeded?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
