import React from "react";
import Page from "../../components/page";

import Admin from "../../containers/Admin/Admin";

const Admin_TEST = props => {
  console.log("admin_TEST.props", props);
  return (
    <Page id="admin" title="Admin" noCrawl>
      <Admin />
    </Page>
  );
};

export default Admin_TEST;
