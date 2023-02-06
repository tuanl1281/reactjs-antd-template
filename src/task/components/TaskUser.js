import React, { useMemo } from 'react';
import styled from 'styled-components';

import { UserOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar as AvatarANTD } from 'antd';

import packageJson from '../../../package.json';

const Avatar = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  > div {
    height: 44px;
    display: flex;
    align-items: center;
    padding-block: 8px;
    padding-inline: 8px;
    line-height: 44px;
    border-radius: 6px;
    color: #000000;
  }
`;

const TaskUser = () => {
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
          <AvatarANTD size={40} icon={<UserOutlined />} />
        </div>
      </Avatar>
    </Dropdown>
  );
};

export default TaskUser;
