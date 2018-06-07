import { combineReducers } from 'redux';

import basic from './basicReducer';
import account from './accountReducer';

export default combineReducers({
  basic,
  account
});
