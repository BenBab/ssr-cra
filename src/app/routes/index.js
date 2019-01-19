import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../components/authenticated-route";
import UnauthenticatedRoute from "../components/unauthenticated-route";
import Loadable from "react-loadable";

import NotFound from "./not-found";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./homepage"),
  loading: () => null,
  modules: ["homepage"]
});

const Auth_Admin = Loadable({
  loader: () => import(/* webpackChunkName: "authAdmin" */ "./authAdmin"),
  loading: () => null,
  modules: ["authAdmin"]
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "admin" */ "./admin"),
  loading: () => null,
  modules: ["admin"]
});

const Admin_TEST = Loadable({
  loader: () => import(/* webpackChunkName: "admin" */ "./adminTest"),
  loading: () => null,
  modules: ["adminTest"]
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./about"),
  loading: () => null,
  modules: ["about"]
});

const MyProfile = Loadable({
  loader: () => import(/* webpackChunkName: "myProfile" */ "./myProfile"),
  loading: () => null,
  modules: ["myProfile"]
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ "./login"),
  loading: () => null,
  modules: ["login"]
});

const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ "./logout"),
  loading: () => null,
  modules: ["logout"]
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./profile"),
  loading: () => null,
  modules: ["profile"]
});

export default props => {
  console.log("route props", props);

  let routesState = [{ value: "/" }];
  let dynamicRoutes = [];

  const { navigationItems } = props.data;

  if (navigationItems) {
    dynamicRoutes = Object.keys(navigationItems).map((key, i) => {
      const item = navigationItems[key];

      if (!item.dropdownPages) {
        routesState = [...routesState, { value: "/" + item.route }];
        return (
          <Route
            key={i}
            path={"/" + item.route}
            render={() => <Homepage pageInfo={item} />}
          />
        );
      } else {
        return Object.keys(item.dropdownPages).map((key, i) => {
          const dropDownItem = item.dropdownPages[key];
          routesState = [
            ...routesState,
            { value: "/pages/" + dropDownItem.route }
          ];
          return (
            <Route
              key={i}
              path={"/pages/" + dropDownItem.route}
              render={props => <Homepage pageInfo={dropDownItem} />}
            />
          );
        });
      }
    });

    props.storeRoutes(routesState);
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Homepage pageInfo={props.data.home} />}
      />
      <Route exact path="/admin" component={Admin_TEST} />
      <Route exact path="/about" component={About} />

      {dynamicRoutes}

      <Route exact path="/profile/:id" component={Profile} />

      <AuthenticatedRoute exact path="/myProfile" component={MyProfile} />

      <UnauthenticatedRoute exact path="/login" component={Login} />
      <AuthenticatedRoute exact path="/logout" component={Logout} />

      <Route component={NotFound} />
    </Switch>
  );
};

// <Route exact path="/:id" component={Homepage} pageInfo={'props.data'}/>
// <Route exact path="/pages/:id" component={Homepage} pageInfo={props.data}/>

// <Route exact path="/pages/:parentId/sub/:id" component={Homepage} />
