import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SavedJobWhereInput = {
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  note?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
