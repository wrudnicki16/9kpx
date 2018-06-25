export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  });
}

export const signin = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/session'
  });
}

export const signout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
}