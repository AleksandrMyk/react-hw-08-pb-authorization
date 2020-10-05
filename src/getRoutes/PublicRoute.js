import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthSelectors } from '../redux/auth';
import routes from '../routes';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: AuthSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
