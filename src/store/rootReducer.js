import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import usersReducer from './users/reducer'
import skillsReducer from "./skills/reducer";

const rootReducer = combineReducers({
  authReducer : authReducer,
  usersReducer: usersReducer,
  skillsReducer: skillsReducer
});

export default rootReducer;