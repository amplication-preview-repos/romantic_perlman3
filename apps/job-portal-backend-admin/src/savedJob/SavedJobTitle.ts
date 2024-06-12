import { SavedJob as TSavedJob } from "../api/savedJob/SavedJob";

export const SAVEDJOB_TITLE_FIELD = "id";

export const SavedJobTitle = (record: TSavedJob): string => {
  return record.id?.toString() || String(record.id);
};
