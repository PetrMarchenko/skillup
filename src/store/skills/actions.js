export const FETCH_SKILL_ACTION = 'FETCH_SKILL_ACTION';
export const LOAD_SKILL_STORE = 'LOAD_SKILL_STORE';

export const ADD_SKILL_ACTION = 'ADD_SKILL_ACTION';
export const ADD_SKILL_STORE = 'ADD_SKILL_STORE';

export const DELETE_SKILL_ACTION = 'DELETE_SKILL_ACTION';
export const DELETE_SKILL_STORE = 'DELETE_SKILL_STORE';

export const EDIT_SKILL_ACTION = 'EDIT_SKILL_ACTION';
export const EDIT_SKILL_STORE = 'EDIT_SKILL_STORE';


export const editSkillAction = payload => ({
  type: EDIT_SKILL_ACTION,
  payload
});
export const editSkillStore = payload => ({
  type: EDIT_SKILL_STORE,
  payload
});

export const deleteSkillAction = payload => ({
  type: DELETE_SKILL_ACTION,
  payload
});
export const deleteSkillStore = payload => ({
  type: DELETE_SKILL_STORE,
  payload
});

export const addSkillAction = payload => ({
  type: ADD_SKILL_ACTION,
  payload
});
export const addSkillStore = payload => ({
  type: ADD_SKILL_STORE,
  payload
});

export const fetchSkillAction = payload => ({
  type: FETCH_SKILL_ACTION,
  payload
});
export const loadSkillStore = payload => ({
  type: LOAD_SKILL_STORE,
  payload
});
