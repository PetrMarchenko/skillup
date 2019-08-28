import {LOAD_SKILL_STORE, EDIT_SKILL_STORE, ADD_SKILL_STORE, DELETE_SKILL_STORE} from './actions';

const INIT = {
  skills: []
};

export default function skillsReducer(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SKILL_STORE:
      console.log(payload);
      return {
        ...state,
        skills: payload
      };
    case EDIT_SKILL_STORE:
      const data = [...state.skills];
      let foundIndex = data.findIndex(element => element.id === payload.id);
      const item = { ...data[foundIndex], ...payload };
      data.splice(foundIndex, 1, item);

      return {
        ...state,
        skills: data
      };
    case ADD_SKILL_STORE:
      console.log('ADD_SKILL_STORE',payload);
      return {
        ...state,
        skills: [
          ...state.skills,
          payload
        ]
      };
    case DELETE_SKILL_STORE:
      const skills = [...state.skills.filter(obj => obj.id !== payload.id)];
      return {
        ...state,
        skills: skills
      };
    default:
      return state;
  }
}

