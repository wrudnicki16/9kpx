import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const login = (user) => {
  return SessionAPIUtil.login(user)
    .then((user1) => dispatch(receiveCurrentUser(user1))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const logout = () => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const signup = (user) => {
  return SessionAPIUtil.signup(user)
    .then((user1) => dispatch(receiveCurrentUser(null))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const clearErrors = errors => dispatch => {
  return dispatch(receiveErrors([]));
}