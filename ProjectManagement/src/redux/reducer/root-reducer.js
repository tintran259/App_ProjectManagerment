import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ProjectReducer from './ProjectReducer';
import GlobalReducer from './GlobalReducer';
import SettingReducer from './SettingReducer';
import TaskReducer from './TaskReducer';

const myReducer = combineReducers({
  LoginReducer,
  GlobalReducer,
  ProjectReducer,
  SettingReducer,
  TaskReducer,
});

export default myReducer;
