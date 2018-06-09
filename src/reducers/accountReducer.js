import isEmpty from 'lodash/isEmpty';
import * as types from '../actions/actionTypes';

const initialState = {
  isAuth: false,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return Object.assign({}, state, { isAuth: !isEmpty(action.payload), authErrors: {} })
    default:
      return state;
  }
}
