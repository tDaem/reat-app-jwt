import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import routeTables from 'app/config/routes';


const AppRoutes = () => {

  return (
    <div className='view-routes'>
      <ErrorBoundaryRoutes>
        {routeTables}
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
