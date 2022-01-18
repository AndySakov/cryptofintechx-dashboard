import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Dashboard = lazy(() => import('./dashboard/Dashboard'))

const Profile = lazy(() => import('./general-pages/Profile'))
// const Invoice = lazy(() => import('./general-pages/Invoice'))
const Signin = lazy(() => import('./general-pages/Signin'))
const Signup = lazy(() => import('./general-pages/Signup'))
// const Page404 = lazy(() => import('./general-pages/Page404'))


export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/user/profile" component={ Profile } />
          <Route exact path="/login" component={ Signin } />
          <Route exact path="/signup" component={ Signup } />
          {/* <Route exact path="/not-found" component={ Page404 } />
          <Route path="*">
            <Redirect to="/not-found"></Redirect>
          </Route> */}

        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
