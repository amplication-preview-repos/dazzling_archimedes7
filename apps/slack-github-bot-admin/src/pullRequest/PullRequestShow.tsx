import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PULLREQUEST_TITLE_FIELD } from "./PullRequestTitle";
import { REPOSITORY_TITLE_FIELD } from "../repository/RepositoryTitle";

export const PullRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Repository"
          source="repository.id"
          reference="Repository"
        >
          <TextField source={REPOSITORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="pullRequestId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="author" source="author" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PullRequest"
              source="pullrequest.id"
              reference="PullRequest"
            >
              <TextField source={PULLREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="source" source="source" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
