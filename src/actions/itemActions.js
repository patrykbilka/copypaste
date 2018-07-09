import axios from 'axios';
import * as types from './actionTypes';
import { showLoading, hideLoading } from './loadingActions';
import API_URL from '../env';

const queryString = require('query-string');

export function setItems(data) {
  return {
    type: types.SET_ITEMS,
    payload: data
  }
}

export function createItem(params) {
  return dispatch => {
    dispatch(showLoading());
    const url = `${API_URL}item/new`;
    const authStr = `Bearer ${localStorage.getItem('o_auth_token')}`;
    const requestParams = {
      url,
      method: 'post',
      headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Accept' : 'application/json', 'Authorization':authStr},
      data: queryString.stringify(params),
    }
    return axios(requestParams).then(
      (response) => {
        dispatch(hideLoading());
      },
      (err) => {
        dispatch(hideLoading());
      }
    )
  }
}

export function getItems(params) {
  return dispatch => {
    dispatch(showLoading());
    const url = `${API_URL}items`;
    const authStr = `Bearer ${localStorage.getItem('o_auth_token')}`;
    const requestParams = {
      url,
      method: 'get',
      headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Accept' : 'application/json', 'Authorization':authStr},
    }
    return axios(requestParams).then(
      (res) => {
        dispatch(setItems(res));
        dispatch(hideLoading());
      },
      (err) => {
        dispatch(hideLoading());
      }
    )
  }
}