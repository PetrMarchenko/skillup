import { LOAD_SKILL_STORE, EDIT_SKILL_STORE } from './actions';

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
    default:
      return state;
  }
}

