export const signup = (userInfo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: userInfo }
  });
}

export const login = (userInfo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: userInfo }
  });
}

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
}