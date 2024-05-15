import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PullRequestTitle } from "../pullRequest/PullRequestTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="pullRequest.id"
          reference="PullRequest"
          label="PullRequest"
        >
          <SelectInput optionText={PullRequestTitle} />
        </ReferenceInput>
        <SelectInput
          source="source"
          label="source"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
