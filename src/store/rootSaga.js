import { fork } from 'redux-saga/effects';
import authSaga from './auth/saga';
import usersSaga from './users/saga';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(usersSaga);
}
