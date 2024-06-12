import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SavedJobUpdateManyWithoutUsersInput } from "./SavedJobUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUsersInput;
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  savedJobs?: SavedJobUpdateManyWithoutUsersInput;
  skills?: string | null;
  username?: string;
};
