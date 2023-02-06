import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  // Breadcrumb,
  Layout
} from 'antd';
import Header from 'app/components/layout/Header';

const Body = styled.div`
  margin: 25px 0;
`;

const Container = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb> */}
        <Body>
          {children}
        </Body>
      </Content>
    </Layout>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
