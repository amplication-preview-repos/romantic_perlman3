import { Application } from "../application/Application";
import { JsonValue } from "type-fest";
import { SavedJob } from "../savedJob/SavedJob";

export type User = {
  applications?: Array<Application>;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  savedJobs?: Array<SavedJob>;
  skills: string | null;
  updatedAt: Date;
  username: string;
};
