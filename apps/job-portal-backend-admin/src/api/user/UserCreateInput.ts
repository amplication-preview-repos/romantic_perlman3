import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SavedJobCreateNestedManyWithoutUsersInput } from "./SavedJobCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  savedJobs?: SavedJobCreateNestedManyWithoutUsersInput;
  skills?: string | null;
  username: string;
};
