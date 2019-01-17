import React from "react";
import Page from "../../components/page";

import logo from "../../assets/logo.jpg";

import Dashboard from "../../containers/Dashboard/Dashboard";

const Homepage = props => {
  console.log("homepage.props", props);
  return (
    <Page id="homepage">
      <p>Here's our homepage. All are welcome.</p>
      {/* <img src={logo} alt="Homepage" style={{ width: '400px' }} /> */}
      <Dashboard pageInfo={props.pageInfo} />
    </Page>
  );
};

export default Homepage;
