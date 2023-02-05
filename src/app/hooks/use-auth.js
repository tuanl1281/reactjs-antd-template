import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setToken,
  login as li,
  logout as lo,
  getUserInfo
} from 'app/actions/auth';
import { TOKEN, REFRESH_TOKEN, EXPIRED_TIME } from 'app/utils/constants';

const useAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * Return a Promise which resolve when login successfully
   * @param {string} username Username
   * @param {string} password Password
   * @param {boolean} remember Option to remember password
   * @returns {Promise} Resolve if login successfully and reject if login failed
   */
  const login = useCallback((username, password, remember = true) =>
    new Promise((resolve, reject) => {
      dispatch(li(username, password))
        .then((response) => {
          const { token, refreshToken, expiresIn } = response;
          if (remember) {
            localStorage.setItem(TOKEN, token);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
            localStorage.setItem(EXPIRED_TIME, new Date(expiresIn));
          } else {
            sessionStorage.setItem(TOKEN, token);
            sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
            sessionStorage.setItem(EXPIRED_TIME, new Date(expiresIn));
          }

          dispatch(getUserInfo(token));
          resolve();
        })
        .catch(reject);
    }), [dispatch]);

  /**
   * Logout and delete token from localStorage
   */
  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(EXPIRED_TIME);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.removeItem(EXPIRED_TIME);
    dispatch(lo());
  }, [dispatch]);

  /**
   * Check and handle token from localStorage and return if the token is still validate
   * @returns {boolean} token validate status
   */
  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem(TOKEN) || sessionStorage.getItem(TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN) || sessionStorage.getItem(REFRESH_TOKEN);

    if (token && refreshToken) {
      const tokenExpired = new Date(localStorage.getItem(EXPIRED_TIME) || sessionStorage.getItem(EXPIRED_TIME));
      if (tokenExpired > new Date()) {
        /* Set token to redux */
        dispatch(setToken(token, refreshToken, tokenExpired, undefined));
        /* Get info user */
        dispatch(getUserInfo(token))
          .catch(() => {
            /* Logout */
            logout();
            /* Redisrect to login page */
            history.push('/');
          });
        /* Return */
        return true;
      }
    }

    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(EXPIRED_TIME);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.removeItem(EXPIRED_TIME);
    dispatch(lo());
    return false;
  }, [dispatch, history, logout]);

  return {
    isAuthenticated,
    login
  };
};

export default useAuth;
