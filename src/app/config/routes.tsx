import Login from 'app/modules/login/login';
import Logout from 'app/modules/login/logout';
import App from 'app/app';
import Home from 'app/modules/home/home';
import { AUTHORITIES } from 'app/config/constants';
import Loadable from 'react-loadable';
import PageNotFound from 'app/shared/error/page-not-found';
import { Route } from 'react-router-dom';
import PrivateRoute from 'app/shared/auth/private-route';
import React from 'react';

const routes = [
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
    children: [
      {
        index: true,
        element: <Home />,
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      },
      {
        path: 'admin/*',
        element: Loadable({
          loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
          loading: () => <div>loading ...</div>
        }),
        hasAnyAuthorities: [AUTHORITIES.ADMIN]
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

const routeTables = (routes) => {
  return routes.map((item, i) => {
    return (
      <Route
        key={i}
        index={item.index}
        path={item.path}
        element={
          item.hasAnyAuthorities ?
            <PrivateRoute hasAnyAuthorities={item.hasAnyAuthorities}>
              {item.element}
            </PrivateRoute> : item.element
        }>
        {item.children && routeTables(item.children)}
      </Route>
    );
  });
};


export default routeTables(routes);

