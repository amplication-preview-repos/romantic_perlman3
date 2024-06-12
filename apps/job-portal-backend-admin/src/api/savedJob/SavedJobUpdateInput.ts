import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SavedJobUpdateInput = {
  job?: JobWhereUniqueInput | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
};
