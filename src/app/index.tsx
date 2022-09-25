import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import getStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import setupAxiosInterceptors from 'app/config/axios-interceptor';
import { clearAuthentication } from 'app/shared/reducers/authentication';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { loadIcons } from 'app/config/icon-loader';
import { toast, ToastContainer } from 'react-toastify';
import AppRoutes from 'app/routes';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const store = getStore();
registerLocale(store);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

loadIcons();

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
const baseHref = document.querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '');


const render = Component =>
  root.render(
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          <BrowserRouter basename={baseHref}>
            <ToastContainer position={toast.POSITION.TOP_CENTER} className='toastify-container'
                            toastClassName='toastify-toast' />
            <ErrorBoundary>
              <Component />
            </ErrorBoundary>
          </BrowserRouter>
        </div>
      </Provider>
    </ErrorBoundary>
  );

render(AppRoutes);
