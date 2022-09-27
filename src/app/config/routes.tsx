import Login from 'app/modules/login/login';
import Logout from 'app/modules/login/logout';
import App from 'app/app';
import Home from 'app/modules/home/home';
import Logs from 'app/modules/administration/logs/logs';
import Health from 'app/modules/administration/health/health';
import Metrics from 'app/modules/administration/metrics/metrics';
import Configuration from 'app/modules/administration/configuration/configuration';
import Docs from 'app/modules/administration/docs/docs';
import { AUTHORITIES } from 'app/config/constants';
import PageNotFound from 'app/shared/error/page-not-found';
import React from 'react';

export const routes = [
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'logout',
    element: <Logout />
  },
  {
    path: '',
    element: <App />,
    children: [{ index: true, element: <Home />, hasAnyAuthorities: [AUTHORITIES.USER] }, {
      path: 'home',
      element: <Home />,
      hasAnyAuthorities: [AUTHORITIES.USER]
    },
      {
        path: 'admin/health', element: <Health />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      }, {
        path: 'admin/metrics',
        element: <Metrics />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      },
      {
        path: 'admin/configuration',
        element: <Configuration />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      },
      {
        path: 'admin/logs',
        element: <Logs />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      },
      {
        path: 'admin/docs',
        element: <Docs />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];
