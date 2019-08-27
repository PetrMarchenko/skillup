import { fork } from 'redux-saga/effects';
import authSaga from './auth/saga';
import usersSaga from './users/saga';
import skillSaga from './skills/saga'

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(usersSaga);
  yield fork(skillSaga);
}
