import isEmpty from 'lodash/isEmpty';
import * as types from '../actions/actionTypes';

const initialState = {
  authErrors: {}
};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_ERROR:
      return Object.assign({}, state, { authErrors: action.payload })
    default:
      return state;
  }
}
