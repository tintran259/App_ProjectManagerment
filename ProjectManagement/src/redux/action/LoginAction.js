import {NAME_SCREEN} from '../NameAction';

export const screenSwitching = () => {
  return {
    type: NAME_SCREEN.SPLASH_SCREEN.TO_LOGIN_SCREEN,
  };
};

export const login = (userInfo) => {
  return {
    type: NAME_SCREEN.LOGIN_SCREEN.LOGIN_SUCCESS,
    payload: {
      userInfo,
    },
  };
};

export const logout = () => {
  return {
    type: NAME_SCREEN.DRAWER_SCREEN.LOGOUT_SUCCESS,
  };
};
