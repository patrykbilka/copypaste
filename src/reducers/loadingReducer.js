import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LOADING:
      return Object.assign({}, state, { isLoading: true });
    case types.HIDE_LOADING:
      return Object.assign({}, state, { isLoading: false })
    default:
      return state;
  }
}
