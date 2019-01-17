// The basics
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

// Action creators and helpers
import { establishCurrentUser } from "../modules/auth";
import { isServer } from "../store";
import * as actions from "../store/actions/index";

import Header from "./header";
import Routes from "./routes";

import "./app.css";

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      this.props.onEstablishCurrentUser();
    }
  }

  componentDidMount() {
    this.props.onInitWebsiteState();
  }

  render() {
    console.log("isServer", isServer);
    console.log(
      typeof window !== "undefined" && window.document ? "client" : "server"
    );
    console.log("app Props", this.props);

    return (
      <div id="app">
        <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        />
        <div id="content">
          <Routes
            data={this.props}
            current={this.props.location.pathname}
            storeRoutes={this.props.onStoreRoutes}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  home: state.mainState.home,
  navigationItems: state.mainState.navigationItems,
  template: state.mainState.template,
  plugins: state.mainState.plugins
});

const mapDispatchToProps = dispatch => {
  return {
    onInitWebsiteState: () => dispatch(actions.initWebsiteState()),
    onStoreRoutes: routesState => dispatch(actions.storeRoutes(routesState)),

    onEstablishCurrentUser: () => dispatch(establishCurrentUser())
  };
};
// bindActionCreators({ establishCurrentUser }, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
