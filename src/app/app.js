// The basics
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme";

// Action creators and helpers
//import { establishCurrentUser } from "../modules/auth";
import { isServer } from "../store";
import * as actions from "../store/actions/index";

import Layout from "./components/Layout/Layout";
import Header from "./header";
import Routes from "./routes";

import "./styles/app.css";
import firebase from "firebase/app";
import "firebase/storage";
require('dotenv').config()

console.log('SiteName', process.env.REACT_APP_SITENAME)

const fireBaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGEING_ID
};

firebase.initializeApp(fireBaseConfig);

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      // this.props.onEstablishCurrentUser();
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

    let theme = mainTheme;

    if (this.props.template) {
      theme = Object.assign({}, mainTheme, {
        navLightTheme: this.props.template.navLightTheme
      });
    }

    return (
      <ThemeProvider theme={theme}>
        {/* <Header
            isAuthenticated={this.props.isAuthenticated}
            current={this.props.location.pathname}
          /> */}
        <Layout template={this.props.template}>
          <Routes
            data={this.props}
            current={this.props.location.pathname}
            storeRoutes={this.props.onStoreRoutes}
          />
        </Layout>
      </ThemeProvider>
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
  };
};
// bindActionCreators({ establishCurrentUser }, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
