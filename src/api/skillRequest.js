import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchSkillURL = `${API_URL}skills`;
const addSkillURL = `${API_URL}skills`;
const editSkillURL = `${API_URL}skills/`;
const deleteSkillURL = `${API_URL}skills/`;


export const fetchSkillRequest = payload => request({
  method: 'get',
  url   : fetchSkillURL,
});
export const addSkillRequest = payload => request({
  method: 'post',
  url   : addSkillURL,
  data  : payload
});
export const editSkillRequest = payload => request({
  method: 'put',
  url   : editSkillURL + payload.id,
  data  : payload
});

export const deleteSkillRequest = payload => request({
  method: 'delete',
  url   : deleteSkillURL + payload.id,
});

