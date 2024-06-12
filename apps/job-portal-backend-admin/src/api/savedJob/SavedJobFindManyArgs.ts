import { SavedJobWhereInput } from "./SavedJobWhereInput";
import { SavedJobOrderByInput } from "./SavedJobOrderByInput";

export type SavedJobFindManyArgs = {
  where?: SavedJobWhereInput;
  orderBy?: Array<SavedJobOrderByInput>;
  skip?: number;
  take?: number;
};
