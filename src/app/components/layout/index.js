/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';

import Container from 'app/components/layout/Container';

const AppLayout = ({ children }) => (
  <>
    <Container>
      {children}
    </Container>
  </>
  );

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

AppLayout.defaultProps = {
};

export default AppLayout;
