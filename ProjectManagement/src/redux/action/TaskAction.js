import {NAME_SCREEN} from '../NameAction';

export const getListTask = (listTask) => {
  return {
    type: NAME_SCREEN.TASK_SCREEN.GET_LIST_TASK,
    payload: {listTask},
  };
};

export const getTaskDetail = (taskDetail) => {
  return {
    type: NAME_SCREEN.TASK_DETAIL_SCREEN.GET_TASK_DETAIL,
    payload: {taskDetail},
  };
};

export const getListSprint = (listSprint) => {
  return {
    type: NAME_SCREEN.TASK_SCREEN.GET_LIST_SPRINT,
    payload: {listSprint},
  };
};

export const getListProjectType = (listProjectType) => {
  return {
    type: NAME_SCREEN.TASK_SCREEN.GET_LIST_PROJECTTYPE,
    payload: {listProjectType},
  };
};
