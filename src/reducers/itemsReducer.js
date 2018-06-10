import isEmpty from 'lodash/isEmpty';
import * as types from '../actions/actionTypes';

const initialState = [];

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ITEMS:
      return Object.assign({}, state, action.payload.data.items )
    default:
      return state;
  }
}
