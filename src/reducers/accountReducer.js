import * as types from '../actions/actionTypes';
const initialState = {
  isAuth: false,
  authErrors: {}
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_ERROR:
      return Object.assign({}, state, { authErrors: action.payload.data.errors})
    default:
      return state;
  }
}
