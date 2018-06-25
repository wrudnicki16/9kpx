import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/errors_reducer';
import userErrorsReducer from './user/user_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer
});