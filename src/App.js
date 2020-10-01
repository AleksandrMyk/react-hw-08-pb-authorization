import React, { Component, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthOperations } from './redux/auth';
import FooApp from './fooApp/FooApp';
import Header from './header/Header';
import routes from './routes';
import PrivateRoute from './getRoutes/PrivateRoute';
import PublicRoute from './getRoutes/PublicRoute';
import Alert from './contacts/alert/Alert';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Alert />}>
            <Switch>
              {routes.map(route => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                );
              })}
            </Switch>
          </Suspense>
          <FooApp />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: AuthOperations.getCurrentUser,
})(App);

// <BrowserRouter>
//   <Header />
//   <main>
//     <Switch>
//       <PublicRoute path="/" exact component={HomePage} />
//       <PrivateRoute path="/contacts" exact component={ContactApp} />
//       <PublicRoute
//         path="/login"
//         exact
//         component={Login}
//         restricted={routes.restricted}
//       />
//       <PublicRoute
//         path="/register"
//         exact
//         component={Register}
//         restricted={routes.restricted}
//       />
//     </Switch>
//   </main>
//   <FooApp />
// </BrowserRouter>
