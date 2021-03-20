import {NAME_SCREEN} from '../NameAction';

export const actShowEditProjectDetail = () => {
  return {
    type: NAME_SCREEN.GLOBAL.SHOW_EDIT_PROJECT_DETAIL_SCREENS,
  };
};

export const actHideEditProjectDetail = () => {
  return {
    type: NAME_SCREEN.GLOBAL.HIDE_EDIT_PROJECT_DETAIL_SCREENS,
  };
};

export const actShowLoading = () => {
  return {
    type: NAME_SCREEN.GLOBAL.SHOW_IS_LOADING,
  };
};

export const actHideLoading = () => {
  return {
    type: NAME_SCREEN.GLOBAL.HIDE_IS_LOADING,
  };
};

export const getUrl = (url) => {
  return {
    type: NAME_SCREEN.GLOBAL.GET_URL,
    payload: {url},
  };
};
