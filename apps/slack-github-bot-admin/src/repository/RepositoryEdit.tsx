import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PullRequestTitle } from "../pullRequest/PullRequestTitle";

export const RepositoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="pullRequests"
          reference="PullRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PullRequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="webhookUrl" source="webhookUrl" />
      </SimpleForm>
    </Edit>
  );
};
