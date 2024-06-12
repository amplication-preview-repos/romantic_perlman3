import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SavedJobListRelationFilter } from "../savedJob/SavedJobListRelationFilter";

export type UserWhereInput = {
  applications?: ApplicationListRelationFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  savedJobs?: SavedJobListRelationFilter;
  skills?: StringNullableFilter;
  username?: StringFilter;
};
