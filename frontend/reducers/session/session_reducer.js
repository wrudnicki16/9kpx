import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser
      return merge({}, { currentUser });
    default:
      return state;
  }
}

export default sessionReducer;