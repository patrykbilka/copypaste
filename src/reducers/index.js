import { combineReducers } from 'redux';

import basic from './basicReducer';
import account from './accountReducer';
import errors from './errorsReducer';
import loading from './loadingReducer';

export default combineReducers({
  basic,
  errors,
  loading,
  account
});
