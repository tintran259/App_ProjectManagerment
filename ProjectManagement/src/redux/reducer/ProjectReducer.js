import { NAME_SCREEN } from '../NameAction'

const initState = {
   listProject: [],
   projectDetails: {
      inforProject: [],
      contactProject: {}
   },
   listManager: [],
   listProjectType: null,
   listUserAdd: [],
   listTask: []
}

const Reducer = (state = initState, action) => {
   switch (action.type) {
      case NAME_SCREEN.PROJECT.GET_LIST_PROJECT_SCREENS:
         return {
            ...state,
            listProject: action.payload.listProject
         }
      case NAME_SCREEN.PROJECT.GET_PROJECT_DETAILS_ITEMS_SCREENS:
         return {
            ...state,
            projectDetails: {
               inforProject: action.payload.ItemsDetails,
               contactProject: action.payload.contactProject
            }
         }
      case NAME_SCREEN.PROJECT.GET_LIST_USER_MANAGER:
         return {
            ...state,
            listManager: action.payload.ListManager
         }
      case NAME_SCREEN.PROJECT.GET_LIST_USER_ADD:
         return {
            ...state,
            listUserAdd: action.payload.listUser
         }

      case NAME_SCREEN.PROJECT.GET_ITEMS_ADD_USER:
         return {
            ...state,
            projectDetails: {
               ...state.projectDetails,
               contactProject: [
                  ...state.projectDetails.contactProject,
                  action.payload.item
               ]
            }
         }
      case NAME_SCREEN.PROJECT.ADD_USERS_FROM_CHECKBOX:
         return {
            ...state,
            projectDetails: {
               ...state.projectDetails,
               contactProject: action.payload.listUser
            }
         }
      case NAME_SCREEN.PROJECT.DELETE_ITEMS_USER:
         return {
            ...state,
            projectDetails: {
               ...state.projectDetails,
               contactProject: action.payload.listUser
            }
         }
      case NAME_SCREEN.PROJECT.GET_LIST_PROJECT_TYPE:
         return {
            ...state,
            listProjectType: action.payload.listProjectType
         }

      case NAME_SCREEN.PROJECT.UPDATE_PROJECT_AFTER_EDIT:
         return {
            ...state,
            listProject: action.payload.listProjectUpdate
         }
      case NAME_SCREEN.PROJECT.LIST_TASK_IN_PROJECT_DETAIL:
         return {
            ...state,
            listTask: action.payload.listTask
         }

      default:
         return state;
   }

}

export default Reducer