import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`/`}
          component={asyncComponent(() => import('../dashboard'))}
        />
        <Route
          exact
          path={`/feeds`}
          component={asyncComponent(() => import('../dashboard'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
