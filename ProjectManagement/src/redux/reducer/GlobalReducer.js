import {NAME_SCREEN} from '../NameAction';

const initialState = {
  isShowEditProjectDetailScreen: false,
  isLoading: false,
  url: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_SCREEN.GLOBAL.SHOW_EDIT_PROJECT_DETAIL_SCREENS:
      return {
        ...state,
        isShowEditProjectDetailScreen: true,
      };
    case NAME_SCREEN.GLOBAL.HIDE_EDIT_PROJECT_DETAIL_SCREENS:
      return {
        ...state,
        isShowEditProjectDetailScreen: false,
      };
    case NAME_SCREEN.GLOBAL.SHOW_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NAME_SCREEN.GLOBAL.HIDE_IS_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case NAME_SCREEN.GLOBAL.GET_URL:
      return {
        ...state,
        url: action.payload.url,
      };
    default:
      return state;
  }
};
export default reducer;
