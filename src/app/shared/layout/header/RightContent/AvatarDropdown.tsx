import React, { useCallback } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined, AntDesignOutlined, BankTwoTone } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import './index.scss'
import HeaderDropdown from 'app/shared/layout/header/HeaderDropdown';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';

export type HeaderRightProps = {
  menu?: boolean;
};


const AvatarDropdown = ({menu}) => {

  const navigate = useNavigate();

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        navigate('logout')
        return;
      }
    },
    [],
  );

  const loading = (
    <span className='action account'>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  const menuHeaderDropdown = (
    <Menu className='menu' selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className='action account'>
        <Avatar size="large" className='avatar' src='https://img2.baidu.com/it/u=3728042108,3864890977&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=509&amp;h=500' alt="avatar" />
        <span className='name anticon'>管理员</span>
      </span>
    </HeaderDropdown>
  );

}

export default AvatarDropdown;
