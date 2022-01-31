import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { store } from "./redux/store";
import { flashMessage } from "./redux/features/messageSlice";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Page404 = lazy(() => import("./pages/Page404"));

export class AppRoutes extends Component {
  protectedRouteHandler(route, page) {
    if (window.location.pathname === route) {
      if (store.getState().auth.isAuthenticated) {
        return page;
      } else {
        // if(this.props.)
        store.dispatch(
          flashMessage({
            message: "You need to be logged in to view this page",
            type: "warning",
          })
        );
        return <Redirect to={`/login?rdr=${route}`}></Redirect>;
      }
    }
  }
  render() {
    return (
      <Suspense fallback="">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route exact path="/home">
            {this.protectedRouteHandler("/home", <Dashboard />)}
          </Route>
          <Route exact path="/user/profile">
            {this.protectedRouteHandler("/user/profile", <Profile />)}
          </Route>
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="*" component={Page404} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
