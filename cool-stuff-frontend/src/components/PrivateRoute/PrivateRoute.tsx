import React from 'react'
import { Route, Redirect } from 'react-router';
import { AuthConsumer } from '../Auth/Auth';

type PrivateRouteProps = {
  exact: boolean,
  path: string,
  component: React.ComponentType,
}

const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) =>
  <AuthConsumer>
    {
      ({ isAuthenticated }) =>
        <Route {...rest} render={() =>
          !isAuthenticated() ? <Redirect to='/' /> : React.createElement(component, {})
        }/>
    }
  </AuthConsumer>

export default PrivateRoute;
