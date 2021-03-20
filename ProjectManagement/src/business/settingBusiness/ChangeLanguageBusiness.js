import {DATA_STATUS} from '../../utils/configs';
import {ToEnglishERP, ToVietnameseERP} from '../../services/ResLangService';

function ToEnglishBusiness(uid, url) {
  return new Promise(async (res, rej) => {
    let language = await ToEnglishERP(uid, url);
    if (language.status == DATA_STATUS.SUCCESS) {
      res(language);
    } else {
      rej(language);
    }
  });
}

function ToVietnameseBusiness(uid, url) {
  return new Promise(async (res, rej) => {
    let language = await ToVietnameseERP(uid, url);
    if (language.status == DATA_STATUS.SUCCESS) {
      res(language);
    } else {
      rej(language);
    }
  });
}

export {ToEnglishBusiness, ToVietnameseBusiness};
