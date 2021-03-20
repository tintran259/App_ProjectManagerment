import Services from './Services';
import {DATA_STATUS} from '../utils/configs';

function ToEnglishERP(uid, url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'res.users',
        method: 'write',
        args: [
          [uid],
          {
            lang: 'en_US',
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

function ToVietnameseERP(uid, url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'res.users',
        method: 'write',
        args: [
          [uid],
          {
            lang: 'vi_VN',
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

export {ToEnglishERP, ToVietnameseERP};
