export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/username`,
    error: err => console.log(err)
  });
}
// export const fetchUsers = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/users`,
//     error: err => console.log(err)
//   });
// }

// fetch user for profile pages?

export const updateUserInfo = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/username`, // is this right?
    error: err => console.log(err)
  });
}