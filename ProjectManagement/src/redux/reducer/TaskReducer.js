import {NAME_SCREEN} from '../NameAction';

const initState = {
  listTask: [],
  listSprint: [],
  listProjectType: [],
  taskDetail: [],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_SCREEN.TASK_SCREEN.GET_LIST_TASK:
      return {
        ...state,
        listTask: action.payload.listTask,
      };

    case NAME_SCREEN.TASK_DETAIL_SCREEN.GET_TASK_DETAIL:
      return {
        ...state,
        taskDetail: action.payload.taskDetail,
      };

    case NAME_SCREEN.TASK_SCREEN.GET_LIST_SPRINT:
      return {
        ...state,
        listSprint: action.payload.listSprint,
      };

    case NAME_SCREEN.TASK_SCREEN.GET_LIST_PROJECTTYPE:
      return {
        ...state,
        listProjectType: action.payload.listProjectType,
      };

    default:
      break;
  }
  return state;
};

export default Reducer;
