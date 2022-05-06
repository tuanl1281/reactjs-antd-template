import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoute from './AppRoute';
import routes from './routes';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({
        component: Component,
        layout: Layout,
        path,
        exact,
        isPrivate,
      }) => (
        <Route
          key={path || '404'}
          path={path}
          exact={exact}
          element={
            <AppRoute isPrivate={isPrivate} layout={Layout}>
              <Component />
            </AppRoute>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
