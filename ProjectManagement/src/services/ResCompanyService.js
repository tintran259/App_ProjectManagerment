import Services from './Services';
import {DATA_STATUS} from '../utils/configs';

function XbossERP(uid, url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'res.users',
        method: 'write',
        args: [
          [uid],
          {
            company_id: 3,
          },
        ],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'vi_VN',
        },
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
}

function KeyTechERP(uid, url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'res.users',
        method: 'write',
        args: [
          [uid],
          {
            company_id: 2,
          },
        ],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'vi_VN',
        },
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
}

export {XbossERP, KeyTechERP};
