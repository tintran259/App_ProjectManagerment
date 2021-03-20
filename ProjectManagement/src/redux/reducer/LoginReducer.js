import {NAME_SCREEN} from '../NameAction';
import {DATA_STATUS} from '../../utils/configs';

const initState = {
  isLogin: false,
  isSplash: true,
  userInfo: {
    id: 0,
    name: '',
    sessionId: '',
    userContext: {lang: '', tz: ''},
    companyId: 0,
    currentCompany: '',
    allowedCompanies: [],
    email: '',
    photo: '',
  },
  status: DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_SCREEN.SPLASH_SCREEN.TO_LOGIN_SCREEN:
      return {
        ...state,
        isSplash: false,
      };

    case NAME_SCREEN.LOGIN_SCREEN.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_SCREEN.DRAWER_SCREEN.LOGOUT_SUCCESS:
      return {
        isLogin: false,
        isSplash: true,
        userInfo: {
          id: 0,
          name: '',
          sessionId: '',
          userContext: {lang: '', tz: ''},
          companyId: 0,
          currentCompany: '',
          allowedCompanies: [],
          email: '',
          photo: '',
        },
        status: DATA_STATUS.NONE,
      };
    default:
      return state;
  }
};

export default reducer;
