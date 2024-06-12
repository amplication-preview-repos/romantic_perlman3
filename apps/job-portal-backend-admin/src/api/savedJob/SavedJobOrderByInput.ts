import { SortOrder } from "../../util/SortOrder";

export type SavedJobOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
