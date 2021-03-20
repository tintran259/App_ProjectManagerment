import {LoginERP, LogoutERP} from '../services/ResUserService';
import {LoginGoogleService} from '../services/AuthenticationService';
import {DATA_STATUS} from '../utils/configs';

const LoginBusiness = (url, username, password) => {
  try {
    return new Promise(async (res, rej) => {
      let userInfo = await LoginERP(url, username, password);

      if (userInfo.status === DATA_STATUS.SUCCESS) {
        if (userInfo.data.data.error) {
          alert('Sai tài khoản hoặc mật khẩu');
        } else {
          let customData = {
            uid:
              userInfo.data.data.result.uid != undefined
                ? userInfo.data.data.result.uid
                : 0,
            name:
              userInfo.data.data.result.name != undefined
                ? userInfo.data.data.result.name
                : '',
            sessionId:
              userInfo.data.data.result.session_id != undefined
                ? userInfo.data.data.result.session_id
                : '',
            userContext:
              userInfo.data.data.result.user_context != undefined
                ? userInfo.data.data.result.user_context
                : {lang: '', tz: ''},
            companyId:
              userInfo.data.data.result.session_id != undefined
                ? userInfo.data.data.result.company_id
                : 0,
            currentCompany:
              userInfo.data.data.result.user_companies.current_company !=
              undefined
                ? userInfo.data.data.result.user_companies.current_company[1]
                : '',
            allowedCompanies:
              userInfo.data.data.result.user_companies.allowed_companies !=
              undefined
                ? userInfo.data.data.result.user_companies.allowed_companies
                : [],
          };

          res({
            data: customData,
            status: DATA_STATUS.SUCCESS,
          });
        }
      } else {
        rej(userInfo);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const LogoutBusiness = () => {
  return new Promise(async (res, rej) => {
    let userInfo = await LogoutERP();
    if (userInfo.status == DATA_STATUS.SUCCESS) {
      res(userInfo);
    } else {
      rej(userInfo);
    }
  });
};

const LoginGoogleBusiness = () => {
  return new Promise(async (res, rej) => {
    let userInfo = await LoginGoogleService().catch((error) => {
      console.log(`Login Google catched error: `, error);
      reject(error);
    });
    if (userInfo.status == DATA_STATUS.SUCCESS) {
      let customData = {
        sessionId:
          userInfo.data.user.id != undefined ? userInfo.data.user.id : 0,

        userContext: {tz: 'Asia/Ho_Chi_Minh', lang: 'vi_VN'},
        name:
          userInfo.data.user.name != undefined ? userInfo.data.user.name : '',
        email:
          userInfo.data.user.email != undefined ? userInfo.data.user.email : '',
        photo:
          userInfo.data.user.photo != undefined ? userInfo.data.user.photo : '',
      };
      res({
        data: customData,
        status: DATA_STATUS.SUCCESS,
      });
    } else {
      rej(userInfo);
    }
  });
};

export {LoginBusiness, LogoutBusiness, LoginGoogleBusiness};
