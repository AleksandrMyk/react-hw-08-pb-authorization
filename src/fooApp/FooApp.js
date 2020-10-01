import React from 'react';
import { connect } from 'react-redux';
import { AuthSelectors } from '../redux/auth';
import FooBar from '../fooBar/FooBar';
import UserMenu from '../userMenu/UserMenu';

const FooApp = ({ isAuthenticated }) => (
  <>{isAuthenticated ? <UserMenu /> : <FooBar />}</>
);

const mapStateToProps = state => ({
  isAuthenticated: AuthSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(FooApp);
