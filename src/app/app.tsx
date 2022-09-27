import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, {useEffect, useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {getSession} from 'app/shared/reducers/authentication';
import {getProfile} from 'app/shared/reducers/application-profile';
import {setLocale} from 'app/shared/reducers/locale';
import {hasAnyAuthority} from 'app/shared/auth/private-route';
import {AUTHORITIES} from 'app/config/constants';
import * as Icon from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import { getMenus } from 'app/shared/layout/menus';
import { Translate } from 'react-jhipster';


const {Header, Content, Footer, Sider} = Layout;

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    dispatch(getSession());
    dispatch(getProfile());
  }, []);

  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);
  let authorities = useAppSelector(state => state.authentication.account.authorities);
  const menus = getMenus(authorities);

  return (
    <Layout id='components-layout'>
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        onBreakpoint={broken => {
          console.log(broken);
          setCollapsed(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {
          isInProduction === false ? (
            <div className='ribbon dev'>
              <a href=''>
                <Translate contentKey={`global.ribbon.${ribbonEnv}`}/>
              </a>
            </div>
          ) : null
        }
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={menus}
          onClick={menuInfo => navigate(menuInfo.key)}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className="site-layout-background" style={{padding: 0}}>
          {React.createElement(collapsed ? Icon['MenuUnfoldOutlined'] : Icon['MenuFoldOutlined'], {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content style={{margin: '24px 16px 0', overflow: 'auto'}}>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Daemon ©2022 Created by Old Fox</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
