import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { Frontload } from "react-frontload";
import { ConnectedRouter } from "connected-react-router";
import createStore from "./store";

import { fireBaseConfig } from "./App_config";
import firebase from "firebase/app";
import "firebase/storage";

import App from "./app/app";
import "./index.css";

// Create a store and get back itself and its history object
const { store, history } = createStore();

firebase.initializeApp(fireBaseConfig);
export var storageRef = firebase.storage().ref();

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
