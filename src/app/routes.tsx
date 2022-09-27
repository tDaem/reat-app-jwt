import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import { routes } from 'app/config/routes';
import { Route } from 'react-router-dom';
import PrivateRoute from 'app/shared/auth/private-route';

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

const AppRoutes = () => {

  return (
    <div className='view-routes'>
      <ErrorBoundaryRoutes>
        {routeTables(routes)}
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
