import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={() => <h1>Home</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
);

export default Routes;