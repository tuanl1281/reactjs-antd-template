import React, { useMemo } from 'react';
import styled from 'styled-components';

import { FiInfo } from 'react-icons/fi';
import { Alert, Card, Divider, Form, Input, Button } from 'antd';

import { useAuth } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

import logo from 'app/assets/images/logo.png';
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

const ImageWrapper = styled.div`
  height: 250px;
  > img {
    padding-top: 25px;
  }
`;
const VersionWrapper = styled.div`
  color: rgba(0, 0, 0, .4);  
`;
const IconWrapper = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`;

const LoginPage = () => {
  const {
    control,
    errors,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();

  const { login } = useAuth();
  const history = useHistory();

  const { loginLoading } = useSelector((_) => _.auth);

  const loading = loginLoading;

  const defaultValue = useMemo(() => ({
    username: '',
    password: '',
  }), []);

  const rules = useMemo(() => ({
    username: { required: true },
    password: { required: true },
  }), []);

  const onSubmit = (payload) => {
    const { username, password } = payload;

    login(username, password, false)
      .then(() => setTimeout(() => history.push('/home'), 300))
      .catch((error) => {
        setError('invalid', error ?? { type: '', message: '' });
      });
  };

  return (
    <StyledCard bordered>
      <ImageWrapper>
        <img src={logo} alt="logo" />
      </ImageWrapper>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={rules.username}
          defaultValue={defaultValue.username}
          render={({ onChange, onBlur, value }) => (
            <Form.Item name="username">
              <Input
                placeholder="Username"
                value={value}
                onChange={(event) => {
                  clearErrors('invalid');
                  onChange(event);
                }}
                onBlur={onBlur}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={rules.password}
          defaultValue={defaultValue.password}
          render={({ onChange, onBlur, value }) => (
            <Form.Item name="password">
              <Input
                type="password"
                placeholder="Password"
                value={value}
                onChange={(event) => {
                  clearErrors('invalid');
                  onChange(event);
                }}
                onBlur={onBlur}
              />
            </Form.Item>
          )}
        />
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      {errors.invalid && (
        <Alert
          showIcon
          type="error"
          message={errors.invalid.message || 'The Username or Password is Incorrect'}
        />
      )}
      <Divider style={{ marginTop: '10px', marginBottom: '14px' }} />
      <VersionWrapper>
        <IconWrapper>
          <FiInfo />
        </IconWrapper>
        {packageJson.version}
      </VersionWrapper>
    </StyledCard>
  );
};

export default LoginPage;
