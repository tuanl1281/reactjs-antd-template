import React from 'react';
import styled from 'styled-components';

import { FiLogIn, FiInfo } from 'react-icons/fi';
import { Card, Divider, Form, Input, Button } from 'antd';

import packageJson from '../../../package.json';

const StyledCard = styled(Card)`
  width: 450px !important;
  position: absolute !important;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
  & .ant-card-body {
    padding-bottom: 14px !important;
  }
`;

const VersionWrapper = styled.div`
  color: rgba(0,0,0,.4);  
`;
const IconWrapper = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`;

const LoginPage = () => {
  return (
    <StyledCard bordered>
      <Form layout="vertical">
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">Login</Button>
        </Form.Item>
      </Form>
      <Divider style={{ marginTop: '10px', marginBottom: '14px' }} />
      <VersionWrapper>
        <IconWrapper>
          <FiInfo />
        </IconWrapper>
        {packageJson.version}
      </VersionWrapper>
    </StyledCard>
  )
}

export default LoginPage;