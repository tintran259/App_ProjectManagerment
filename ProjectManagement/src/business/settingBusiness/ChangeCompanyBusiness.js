import {DATA_STATUS} from '../../utils/configs';
import {XbossERP, KeyTechERP} from '../../services/ResCompanyService';

function XbossBusiness(uid, url) {
  return new Promise(async (res, rej) => {
    let company = await XbossERP(uid, url);
    if (company.status == DATA_STATUS.SUCCESS) {
      res(company);
    } else {
      rej(company);
    }
  });
}

function KeyTechBusiness(uid, url) {
  return new Promise(async (res, rej) => {
    let company = await KeyTechERP(uid, url);
    if (company.status == DATA_STATUS.SUCCESS) {
      res(company);
    } else {
      rej(company);
    }
  });
}

export {XbossBusiness, KeyTechBusiness};
