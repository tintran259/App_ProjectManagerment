import {NAME_SCREEN} from '../NameAction';

const initState = {
  isEnglish: true,
  isVietnamese: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_SCREEN.SETTING_SCREEN.CHANGE_ENGLISH:
      return {
        isEnglish: true,
        isVietnamese: false,
      };

    case NAME_SCREEN.SETTING_SCREEN.CHANGE_VIETNAMESE:
      return {
        isEnglish: false,
        isVietnamese: true,
      };

    default:
      return state;
  }
};

export default reducer;
