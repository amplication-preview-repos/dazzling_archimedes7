import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RepositoryList } from "./repository/RepositoryList";
import { RepositoryCreate } from "./repository/RepositoryCreate";
import { RepositoryEdit } from "./repository/RepositoryEdit";
import { RepositoryShow } from "./repository/RepositoryShow";
import { PullRequestList } from "./pullRequest/PullRequestList";
import { PullRequestCreate } from "./pullRequest/PullRequestCreate";
import { PullRequestEdit } from "./pullRequest/PullRequestEdit";
import { PullRequestShow } from "./pullRequest/PullRequestShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SlackGithubBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Repository"
          list={RepositoryList}
          edit={RepositoryEdit}
          create={RepositoryCreate}
          show={RepositoryShow}
        />
        <Resource
          name="PullRequest"
          list={PullRequestList}
          edit={PullRequestEdit}
          create={PullRequestCreate}
          show={PullRequestShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
