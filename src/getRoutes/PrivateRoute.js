import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthSelectors } from '../redux/auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: AuthSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(PrivateRoute);
