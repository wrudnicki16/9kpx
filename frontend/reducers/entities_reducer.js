import { combineReducers } from 'redux';
import userReducer from './user/user_reducer';
// import photoReducer from './photo/photo_reducer';
// import followReducer from './follow/follow_reducer';
// import likeReducer from './like/like_reducer';

export default combineReducers({
  user: userReducer,
  // photo: photoReducer,
  // follow: followReducer,
  // lke: likeReducer
});