import axios from 'axios';
import * as types from './actionTypes';
import API_URL from '../env';
const queryString = require('query-string');

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const headers = {
  'Content-Type' : 'application/x-www-form.urlencoded'
}

function setAccountErrors(data) {
  return {
    type: types.AUTH_ERROR,
    payload: data
  }
}

function setAuthUser(token) {
  return {
    type: types.SET_CURRENT_USER,
    payload: token
  }
}

export function registerAction(params) {
  const url = `${API_URL}register`;

  const requestParams = {
    url,
    method: 'post',
    headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Accept' : 'application/json' },
    data: queryString.stringify(params),
  }

  return dispatch => {
    return axios(requestParams).then((response) => {
      const { access_token, expires_in, refresh_token, token_type } = response.data;

      dispatch(setAuthUser(access_token));
      localStorage.setItem('o_auth_token', access_token);
      localStorage.setItem('expires_in', expires_in);
      localStorage.setItem('refresh_token', refresh_token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }, (error) => {
      const status = error.response.status;
      if (status === 422) {
        dispatch(setAccountErrors(error.response.data.errors));
      }

      return Promise.reject(error.response.status);
    });
  }
};

export function loginAction(params) {
  const url = `${API_URL}login`;
  
  const requestParams = {
    url,
    method: 'post',
    headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Accept' : 'application/json' },
    data: queryString.stringify(params),
  }

  return dispatch => {
    return axios(requestParams).then((response) => {
      const { access_token, expires_in, refresh_token, token_type } = response.data;

      dispatch(setAuthUser(access_token));
      localStorage.setItem('o_auth_token', access_token);
      localStorage.setItem('expires_in', expires_in);
      localStorage.setItem('refresh_token', refresh_token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }, (error) => {
      const status = error.response.status;
      if (status === 422) {
        dispatch(setAccountErrors(error.response.data.errors));
      }

      if (status === 401) {
        console.log(error.response)
        dispatch(setAccountErrors({ message: error.response.data.message }))
      }
      return Promise.reject(error.response.status);
    });
  }
};

export function logoutAction() {
  return dispatch => {
    dispatch(setAuthUser(false));
  }
}