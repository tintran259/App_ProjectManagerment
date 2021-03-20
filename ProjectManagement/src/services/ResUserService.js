import Services from './Services';
import {DATA_STATUS} from '../utils/configs';

const LoginERP = (url, username, password) => {
  const db = 'xboss_uat';
  const urlFull = `${url}/web/session/authenticate`;
  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        db: db,
        login: username,
        password: password,
      },
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const LogoutERP = () => {
  const urlLogout = 'https://uat.xboss.com/web/session/destroy';

  return new Promise((res, rej) => {
    Services(urlLogout, {})
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const ChangePassword = (url, username) => {
  return new Promise((res, rej) => {
    Services(url, {
      params: {username: username},
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export {LoginERP, LogoutERP, ChangePassword};
