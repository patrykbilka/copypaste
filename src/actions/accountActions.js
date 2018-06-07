import axios from 'axios';
import * as types from './actionTypes';
import API_URL from '../env';

function setAccountErrors(data) {
  return {
    type: types.AUTH_ERROR,
    payload: data
  }
}

export function registerAction(params) {
  const url = `${API_URL}register`;

  return dispatch => {
    return axios.post(url, params).then((response) => {
      console.log(response);
    }).catch((error) => {
      dispatch(setAccountErrors(error.response));
    });
  }
};