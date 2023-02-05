import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import routes from './routes';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({
        component,
        layout,
        path,
        exact,
        isPrivate,
      }) => (
        <AppRoute
          key={path || '404'}
          component={component}
          layout={layout}
          path={path}
          exact={exact}
          isPrivate={isPrivate}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
