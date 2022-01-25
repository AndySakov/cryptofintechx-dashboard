import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store";


const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Signin = lazy(() => import('./pages/Signin'))
const Signup = lazy(() => import('./pages/Signup'))
const Page404 = lazy(() => import('./pages/Page404'))


export class AppRoutes extends Component {
  render() {
    return (
      <Provider store={store} >
      <Suspense fallback="">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="*" component={ Page404 }  />
        </Switch>
      </Suspense>
      </Provider>
    );
  }
}

export default AppRoutes
