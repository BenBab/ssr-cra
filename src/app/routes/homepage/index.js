import React from "react";
import Page from "../../components/page";

import Dashboard from "../../containers/Dashboard/Dashboard";

const Homepage = props => {
  console.log("homepage.props", props);
  return (
    <Page id="homepage">
      <Dashboard pageInfo={props.pageInfo} />
    </Page>
  );
};

export default Homepage;
