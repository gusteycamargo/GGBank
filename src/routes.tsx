import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from './pages/Login';
import Home from "./pages/Home";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => (
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
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
);

export default Routes;