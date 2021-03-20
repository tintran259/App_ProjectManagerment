import {DATA_STATUS, DATA_STORAGE} from '../utils/configs';
import {
  GetListTaskERP,
  CreateTaskERP,
  GetListSprintERP,
  GetListProjectTypeERP,
  EditTaskERP,
} from '../services/ResListTaskService';

const nam = DATA_STORAGE.USER;

function GetListTaskBusiness(uid, url) {
  try {
    return new Promise(async (res, rej) => {
      let listTask = await GetListTaskERP(uid, url);
      if (listTask.status == DATA_STATUS.SUCCESS) {
        res({
          data: listTask.data.data.result,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(listTask);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
}

function CreateTaskBusiness(
  url,
  uid,
  nameTask,
  deadline,
  priority,
  projectIdCV,
  typeIdCV,
  sprintIdCV,
) {
  try {
    return new Promise(async (res, rej) => {
      let createTask = await CreateTaskERP(
        url,
        uid,
        nameTask,
        deadline,
        priority,
        projectIdCV,
        typeIdCV,
        sprintIdCV,
      );
      if (createTask.status == DATA_STATUS.SUCCESS) {
        if (createTask.data.data.error) {
          alert('Sai thông tin');
          res({
            status: DATA_STATUS.FAILED,
          });
        } else {
          res({
            data: createTask.data,
            status: DATA_STATUS.SUCCESS,
          });
        }
      } else {
        rej(createTask);
      }
    });
  } catch (error) {
    resolve({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
}

function GetListSprintBusiness(url) {
  return new Promise(async (res, rej) => {
    let listSprint = await GetListSprintERP(url);
    if (listSprint.status == DATA_STATUS.SUCCESS) {
      res({
        data: listSprint.data.data.result,
        status: DATA_STATUS.SUCCESS,
      });
    } else {
      rej(listSprint);
    }
  });
}

function GetListProjecTypeBusiness(url) {
  return new Promise(async (res, rej) => {
    let listProjecType = await GetListProjectTypeERP(url);
    if (listProjecType.status == DATA_STATUS.SUCCESS) {
      res({
        data: listProjecType.data.data.result,
        status: DATA_STATUS.SUCCESS,
      });
    } else {
      rej(listProjecType);
    }
  });
}

function EditTaskBusiness(url, id, nameTask, deadline, sprintID) {
  return new Promise(async (res, rej) => {
    let editTask = await EditTaskERP(url, id, nameTask, deadline, sprintID);
    if (editTask.status == DATA_STATUS.SUCCESS) {
      res(editTask);
    } else {
      rej(editTask);
    }
  });
}

export {
  GetListTaskBusiness,
  CreateTaskBusiness,
  GetListSprintBusiness,
  GetListProjecTypeBusiness,
  EditTaskBusiness,
};
