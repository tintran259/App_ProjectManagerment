import { NAME_SCREEN } from '../NameAction';

export const actGetListProject = (listProject) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_LIST_PROJECT_SCREENS,
    payload: {
      listProject,
    },
  };
};

export const actGetItemsProjectDetail = (ItemsDetails, contactProject) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_PROJECT_DETAILS_ITEMS_SCREENS,
    payload: {
      ItemsDetails,
      contactProject,
    },
  };
};

export const actGetListUserManager = (ListManager) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_LIST_USER_MANAGER,
    payload: {
      ListManager,
    },
  };
};

export const actGetListUserAdd = (listUser) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_LIST_USER_ADD,
    payload: {
      listUser,
    },
  };
};

export const actAddItemsUser = (item) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_ITEMS_ADD_USER,
    payload: {
      item,
    },
  };
};

export const actDeleteItemsUser = (listUser) => {
  return {
    type: NAME_SCREEN.PROJECT.DELETE_ITEMS_USER,
    payload: {
      listUser
    }
  }
}

export const actGetListProjectType = (listProjectType) => {
  return {
    type: NAME_SCREEN.PROJECT.GET_LIST_PROJECT_TYPE,
    payload: {
      listProjectType
    }
  }
}
export const actUpdateProjectAfterEdit = (listProjectUpdate) => {
  return {
    type: NAME_SCREEN.PROJECT.UPDATE_PROJECT_AFTER_EDIT,
    payload: {
      listProjectUpdate,
    },
  };
};

export const actAddUserThenCancelCheck = (listUser) => {
  return {
    type: NAME_SCREEN.PROJECT.ADD_USERS_FROM_CHECKBOX,
    payload: {
      listUser
    }
  }
}

export const actListTaskProjectInProjectDetail = listTask => {
  return {
    type: NAME_SCREEN.PROJECT.LIST_TASK_IN_PROJECT_DETAIL,
    payload: {
      listTask
    }
  }
}
