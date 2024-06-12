import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SavedJobListRelationFilter } from "../savedJob/SavedJobListRelationFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  experienceNeeded?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  savedJobs?: SavedJobListRelationFilter;
  skillsNeeded?: StringNullableFilter;
  title?: StringNullableFilter;
};
