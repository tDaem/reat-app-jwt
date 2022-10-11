import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import { getMenus } from 'app/shared/layout/menus';
import { useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
  useMediaQuery
} from '@mui/material';
import Header from 'app/shared/layout/header';
import { openDrawer } from 'app/shared/reducers/menu';
import Drawer from 'app/shared/layout/drawer';


export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));



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
  const authorities = useAppSelector(state => state.authentication.account.authorities);
  const { drawerOpen } = useAppSelector((state) => state.menu);

  const menus = getMenus(authorities);

  // drawer togger
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header open={open} handleDrawerToggle={handleDrawerToggle} />
        <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar />
          {/*<Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />*/}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
