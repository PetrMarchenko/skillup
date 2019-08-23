export const LOGIN_ACTION = 'LOGIN_ACTION';
export const ADD_TOKEN_TO_STORE = 'ADD_TOKEN_TO_STORE';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const DELETE_TOKEN_WITH_STORE = 'DELETE_TOKEN_WITH_STORE';

export const logInAction = payload => ({
  type: LOGIN_ACTION,
  payload
});

export const addTokenToStore = payload => ({
  type: ADD_TOKEN_TO_STORE,
  payload
});


export const logOutAction = payload => ({
  type: LOGOUT_ACTION,
  payload
});

export const deleteTokenWithStore = payload => ({
  type: DELETE_TOKEN_WITH_STORE,
  payload
});
