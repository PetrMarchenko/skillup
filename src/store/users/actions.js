export const FETCH_USER_ACTION = 'FETCH_USER_ACTION';
export const LOAD_USER_STORE = 'LOAD_USER_STORE';

export const ADD_USER_ACTION = 'ADD_USER_ACTION';
export const ADD_USER_STORE = 'ADD_USER_STORE';

export const DELETE_USER_ACTION = 'DELETE_USER_ACTION';
export const DELETE_USER_STORE = 'DELETE_USER_STORE';

export const EDIT_USER_ACTION = 'EDIT_USER_ACTION';
export const EDIT_USER_STORE = 'EDIT_USER_STORE';

export const GET_SKILL_USER_ACTION = 'GET_SKILL_USER_ACTION';
export const LOAD_SKILL_USER_STORE = 'LOAD_SKILL_USER_STORE';


export const getSkillUserAction = payload => ({
  type: GET_SKILL_USER_ACTION,
  payload
});
export const loadSkillUserAction = payload => ({
  type: LOAD_SKILL_USER_STORE,
  payload
});
export const editUserAction = payload => ({
  type: EDIT_USER_ACTION,
  payload
});
export const editUserStore = payload => ({
  type: EDIT_USER_STORE,
  payload
});

export const deleteUserAction = payload => ({
  type: DELETE_USER_ACTION,
  payload
});
export const deleteUserStore = payload => ({
  type: DELETE_USER_STORE,
  payload
});

export const addUserAction = payload => ({
  type: ADD_USER_ACTION,
  payload
});
export const addUserStore = payload => ({
  type: ADD_USER_STORE,
  payload
});

export const fetchUserAction = payload => ({
  type: FETCH_USER_ACTION,
  payload
});
export const loadUserStore = payload => ({
  type: LOAD_USER_STORE,
  payload
});
