import axios from 'axios';

import { types } from 'app/actions';
import { httpClient, apiLinks } from 'app/utils';

const setToken = (token, refreshToken, tokenExpired, userInfo) => ({
  type: types.SET_TOKEN,
  payload: {
    token,
    refreshToken,
    tokenExpired,
    userInfo,
  },
});

const loginRequest = () => ({ type: types.LOG_IN_REQUEST });
const loginSuccess = (response) => ({
  type: types.LOG_IN_SUCCESS,
  payload: response,
});
const loginFailure = (error) => ({ type: types.LOG_IN_FAILURE, payload: error });

const login = (username, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(loginRequest());
    httpClient
      .callApi({
        method: 'POST',
        url: apiLinks.login,
        data: { username, password },
      })
      .then((response) => {
        dispatch(loginSuccess(response.data?.data ?? {}));
        resolve(response.data?.data ?? {});
      })
      .catch((error) => {
        dispatch(loginFailure(error));
        reject(error);
      });
  });

const logout = () => ({ type: types.LOG_OUT });

const getUserInfoRequest = () => ({ type: types.GET_USER_INFO_REQUEST });
const getUserInfoSuccess = (response) => ({
  type: types.GET_USER_INFO_SUCCESS,
  payload: response,
});
const getUserInfoFailure = (error) => ({
  type: types.GET_USER_INFO_FAILURE,
  payload: error,
});

const getUserInfo = (token) => (dispatch) =>
  new Promise((resolve, reject) => {
    const headerToken = token ? { Authorization: `bearer ${token}` } : null;
    dispatch(getUserInfoRequest());
    axios({
      method: 'GET',
      url: apiLinks.getUserInfo,
      headers: { ...headerToken },
    })
      .then((response) => {
        const data = response?.data?.data ?? {};
        dispatch(getUserInfoSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(getUserInfoFailure(response));
        reject(response);
      });
  });

export {
  setToken,
  login,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  getUserInfo,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
};

export default {
  setToken,
  login,
  loginRequest,
  loginSuccess,
  loginFailure,
  getUserInfo,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
};
