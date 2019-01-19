import React from "react";
import Page from "../../components/page";

import Auth from '../../containers/Auth/Auth'

const AdminAuth = props => (
  <Page id="adminlogin" title="adminLogin" description="We need to log in to stuff.">
      <Auth/>
  </Page>
);

export default AdminAuth;
