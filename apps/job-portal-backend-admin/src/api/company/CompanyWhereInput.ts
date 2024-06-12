import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type CompanyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
