import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'app/hooks';

const AppRoute = ({
  component: Component,
  layout: Layout,
  path,
  exact,
  isPrivate,
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      key={path || '404'}
      path={path}
      exact={exact}
      render={() => {
        /* Authentication */
        if (isPrivate && !isAuthenticated()) return <Redirect to="/" />;
        /* Return */
        if (Layout) {
          return (
            <Layout>
              <Component />
            </Layout>
          );
        }

        return <Component />;
      }}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType,
  path: PropTypes.string,
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
};

AppRoute.defaultProps = {
  layout: null,
  path: undefined,
  exact: false,
  isPrivate: false,
};

export default AppRoute;
