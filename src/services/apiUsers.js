import axios from 'axios';

import UserType from '../type/UserType.jsx';

const url = 'http://localhost:8080/users';

export async function createUser(user) {
  return axios
    .post(url, user)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error('Error while creating user');
    });
}

export async function updateUser(user, id) {
  console.log(id);
  return axios
    .put(url + `/${id}`, user)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error('Error while updating user ' + id);
    });
}

export async function getAllUsers() {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error('All users cannot be fetched.');
    });
}

export async function deleteUser(id) {
  return axios
    .delete(url + `/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error('Error while deleting user ' + id);
    });
}

updateUser.propTypes = UserType;
