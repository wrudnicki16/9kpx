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

export const login = (userInfo) => dispatch => {
  return SessionAPIUtil.login(userInfo)
    .then((curUserInfo) => dispatch(receiveCurrentUser(curUserInfo))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const signup = (userInfo) => dispatch => {
  return SessionAPIUtil.signup(userInfo)
    .then((curUserInfo) => dispatch(receiveCurrentUser(curUserInfo))
          , err => dispatch(receiveErrors(err.responseJSON)));
}

export const clearErrors = errors => dispatch => {
  return dispatch(receiveErrors([]));
}