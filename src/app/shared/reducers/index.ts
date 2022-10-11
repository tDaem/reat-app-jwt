import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale from './locale';
import authentication from './authentication';
import applicationProfile from './application-profile';

import administration from 'app/modules/administration/administration.reducer';
import entitiesReducers from 'app/entities/reducers';
import menu from 'app/shared/reducers/menu';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer: ReducersMapObject = {
  authentication,
  locale,
  applicationProfile,
  administration,
  loadingBar,
  menu,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  ...entitiesReducers,
};

export default rootReducer;
