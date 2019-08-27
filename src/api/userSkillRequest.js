import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchUserSkillURL = `${API_URL}userskill`;
const addUserSkillURL = `${API_URL}userskill`;
const editUserSkillURL = `${API_URL}userskill/`;
const deleteUserSkillURL = `${API_URL}userskill/`;
const getOneUserSkillURL = `${API_URL}userskill/`;

export const getOneUserSkillRequest = payload => request({
  method: 'get',
  url   : getOneUserSkillURL + payload.id,
});
export const fetchUserSkillRequest = payload => request({
  method: 'get',
  url   : fetchUserSkillURL,
});
export const addUserSkillRequest = payload => request({
  method: 'post',
  url   : addUserSkillURL,
  data  : payload
});
export const editUserSkillRequest = payload => request({
  method: 'put',
  url   : editUserSkillURL + payload.id,
  data  : payload
});

export const deleteUserSkillRequest = payload => request({
  method: 'delete',
  url   : deleteUserSkillURL + payload.id,
});

