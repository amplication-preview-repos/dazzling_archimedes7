import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PULLREQUEST_TITLE_FIELD } from "../pullRequest/PullRequestTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
