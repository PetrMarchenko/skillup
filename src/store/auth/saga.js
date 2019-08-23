import { call, put, takeEvery } from 'redux-saga/effects';
import { addTokenToStore, deleteTokenWithStore, LOGIN_ACTION, LOGOUT_ACTION, } from './actions';

import { logInRequest } from 'api/authRequest';

function* LogIn(action) {
  const { payload } = action;
  try {
    const response = yield call(logInRequest, payload);
    if (response.status >= 200 && response.status <= 200) {
      yield put(addTokenToStore(response.data));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}

function* LogOut() {
  try {
    yield put(deleteTokenWithStore());
  } catch (error) {

  }
}


export default function* authSaga() {
  yield takeEvery(LOGIN_ACTION, LogIn);
  yield takeEvery(LOGOUT_ACTION, LogOut);
}
