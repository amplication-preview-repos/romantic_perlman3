import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { SavedJobTitle } from "../savedJob/SavedJobTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput
          label="experienceNeeded"
          multiline
          source="experienceNeeded"
        />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="savedJobs"
          reference="SavedJob"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SavedJobTitle} />
        </ReferenceArrayInput>
        <TextInput label="skillsNeeded" multiline source="skillsNeeded" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
