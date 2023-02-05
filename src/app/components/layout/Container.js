import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb, Layout } from 'antd';
import Header from 'app/components/layout/Header';

const Container = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        {children}
      </Content>
    </Layout>
  );
};

Container.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Container;
