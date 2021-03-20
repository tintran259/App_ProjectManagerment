import {
  GetListProjectERP,
  GetListUserContactERP,
  GetEditProjectScreen,
  GetListUserManagerERP,
  GetListUserAddERP,
  GetProjectTypeERP,
  GetFavoriteProjectScreen,
  GetListTaskProjectDetailERP
} from '../services/ResListProjectScreens';

import { DATA_STATUS } from '../utils/configs';

export const GetListProjectBusiness = (url) => {
  try {
    return new Promise(async (res, rej) => {
      let listProject = await GetListProjectERP(url);
      if (listProject.status === DATA_STATUS.SUCCESS) {
        res({
          data: listProject.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listProject);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetListContactUserBusiness = (members) => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetListUserContactERP(members);
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetListTaskProjectDetailBusiness = (projectID) => {
  try {
    return new Promise(async (res, rej) => {
      let listTaskProjectDetail = await GetListTaskProjectDetailERP(projectID);
      if (listTaskProjectDetail.status === DATA_STATUS.SUCCESS) {
        res({
          data: listTaskProjectDetail.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listTaskProjectDetail);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetEditProjectBusiness = ({
  id,
  nameProject,
  id_Project,
  members,
}) => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetEditProjectScreen({
        id,
        nameProject,
        id_Project,
        members,
      });
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetFavoriteProjectScreenBusiness = ({ id_Project, isFavorite }) => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetFavoriteProjectScreen({
        id_Project,
        isFavorite,
      });
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetUserManagerBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetListUserManagerERP();
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetAddUserBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetListUserAddERP();
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export const GetProjectTypeBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let listUserContact = await GetProjectTypeERP();
      if (listUserContact.status === DATA_STATUS.SUCCESS) {
        res({
          data: listUserContact.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listUserContact);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};
