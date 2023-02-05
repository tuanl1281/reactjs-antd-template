import types from 'app/actions/types';

const INITIAL_STATE = {
  userInfo: null,
  token: null,
  refreshToken: null,
  tokenExpired: null,
  loginLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_TOKEN: {
      const { userInfo, token, refreshToken, tokenExpired } = payload;

      return {
        ...state,
        userInfo,
        token,
        tokenExpired,
        refreshToken
      };
    }
    case types.LOG_IN_REQUEST: {
      return {
        ...state,
        loginLoading: true,
      };
    }
    case types.LOG_IN_SUCCESS: {
      const { token, refreshToken, expiresIn } = payload;
      return {
        ...state,
        token,
        refreshToken,
        tokenExpired: new Date(expiresIn),
        loginLoading: false,
      };
    }
    case types.LOG_IN_FAILURE: {
      return {
        ...state,
        loginLoading: false,
      };
    }
    case types.LOG_OUT: {
      return {
        ...state,
        token: null,
        refreshToken: null,
        tokenExpired: null,
      };
    }
    case types.GET_USER_INFO_REQUEST: {
      return {
        ...state,
        getUserInfoLoading: true,
      };
    }
    case types.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: payload,
        getUserInfoLoading: false,
      };
    }
    case types.GET_USER_INFO_FAILURE: {
      return {
        ...state,
        getUserInfoLoading: false,
      };
    }
    default:
      return state;
  }
}
