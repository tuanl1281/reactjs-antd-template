import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'app/hooks';

const AppRoute = ({ layout: Layout, children, isPrivate }) => {
  const { isAuthenticated } = useAuth();
  /* Validate */
  if (isPrivate && !isAuthenticated())
    return <Navigate to='/' />
  /* For layout */
  if (Layout) {
    return (
      <Layout>
        {children}
      </Layout>
    );
  }

  return children;
};

AppRoute.propTypes = {
  layout: PropTypes.elementType,
  isPrivate: PropTypes.bool,
};

AppRoute.defaultProps = {
  layout: null,
  isPrivate: false,
};

export default AppRoute;
