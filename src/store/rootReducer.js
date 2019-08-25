import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  authReducer : authReducer,
  usersReducer: usersReducer,
});

export default rootReducer;