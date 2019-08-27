import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchUserURL = `${API_URL}users`;
const addUserURL = `${API_URL}users`;
const editUserURL = `${API_URL}users/`;
const deleteUserURL = `${API_URL}users/`;

export const fetchUserRequest = payload => request({
  method: 'get',
  url   : fetchUserURL,
});
export const addUserRequest = payload => request({
  method: 'post',
  url   : addUserURL,
  data  : payload
});
export const editUserRequest = payload => request({
  method: 'put',
  url   : editUserURL + payload.id,
  data  : payload
});

export const deleteUserRequest = payload => request({
  method: 'delete',
  url   : deleteUserURL + payload.id,
});

