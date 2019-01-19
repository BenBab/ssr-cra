import React from "react";
import { connect } from "react-redux";
import Page from "../../components/page";

import Admin from "../../containers/Admin/Admin";

const AdminRoute = ({ currentUser }) => (
  <Page id="admin" title="Admin" noCrawl>
    <Admin />
  </Page>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  null
)(AdminRoute);
