import React, { useMemo } from 'react';
import styled from 'styled-components';

import { UserOutlined, LogoutOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {
  Layout,
  Avatar as AvatarANTD,
  Menu as MenuANTD,
  Dropdown
} from 'antd';

import { useSelector } from 'react-redux';
import packageJson from '../../../../package.json';

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 0 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;

const Menu = styled.div`
  min-width: 0;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  margin: 0 24px 0 24px;

  & .ant-menu-dark {
    > .ant-menu-item {
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:focus {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    > .ant-menu-item-selected {
      background-color: rgba(255, 255, 255, 0.1);

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:focus {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

const Actions = styled.div`
  height: 100%;
`;

const Avatar = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  
  > div {
    height: 44px;
    display: flex;
    align-items: center;
    padding-block: 8px;
    padding-inline: 8px;
    line-height: 44px;
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.65);
  }

  &:hover {
    > div {
      background: rgba(255, 255, 255, 0.08);
    }

    & .name {
      color: #FFFFFF;
    }
  }

  & .name {
    margin-inline-start: 8px;
    color: rgba(255, 255, 255, 0.65);
  }
`;

const User = () => {
  const { userInfo } = useSelector((_) => _.auth);
  const name = useMemo(() => userInfo?.name, [userInfo]);

  const items = useMemo(() => ([
    {
      key: '1',
      icon: <LogoutOutlined />,
      label: 'Sign out'
    },
    {
      type: 'divider'
    },
    {
      key: '2',
      icon: <InfoCircleOutlined />,
      label: packageJson.version,
      disabled: true,
    }
  ]), []);

  return (
    <Dropdown placement="bottomRight" menu={{ items }}>
      <Avatar>
        <div>
          <AvatarANTD size={26} icon={<UserOutlined />} />
          <span className="name">{name}</span>
        </div>
      </Avatar>
    </Dropdown>
  );
};

const Header = () => {
  const { Header: HeaderANTD } = Layout;
  return (
    <HeaderANTD>
      <Wrapper>
        <Logo />
        <Menu>
          <MenuANTD
            theme="dark"
            mode="horizontal"
            items={[]}
          />
        </Menu>
        <Actions>
          <User />
        </Actions>
      </Wrapper>
    </HeaderANTD>
  );
};

export default Header;
