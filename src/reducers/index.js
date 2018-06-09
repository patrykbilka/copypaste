import { combineReducers } from 'redux';

import basic from './basicReducer';
import account from './accountReducer';
import errors from './errorsReducer';

export default combineReducers({
  basic,
  errors,
  account
});
