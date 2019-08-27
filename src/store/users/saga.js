import { call, put, takeEvery } from 'redux-saga/effects';

import { EDIT_USER_ACTION, editUserStore, FETCH_USER_ACTION, loadUserStore, GET_SKILL_USER_ACTION, loadSkillUserAction } from './actions';

import { editUserRequest, fetchUserRequest } from 'api/userRequest';
import { getOneUserSkillRequest } from 'api/userSkillRequest';

function* fetchUser(action) {
  const { payload } = action;

  try {
    const response = yield call(fetchUserRequest, payload);

    if (response.status >= 200 && response.status <= 200) {

      /*
      * TODO SORT
      * */
      let users = response.data;
      const isDesc = payload.orderBy === 'desc' ? -1 : 1;
      let usersSort = users.sort(function(a, b){
        if(a[payload.order] < b[payload.order]) { return isDesc; }
        if(a[payload.order] > b[payload.order]) { return -1 * isDesc; }
        return 0;
      });

      yield put(loadUserStore(usersSort));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}

function* editUser(action) {
  const { payload } = action;
  const response = yield call(editUserRequest, payload);

  try {
    if (response.status >= 200 && response.status <= 200) {
      yield put(editUserStore(payload));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

}

function* getSkillUser(action) {
  const { payload } = action;

  try {
    const response = yield call(getOneUserSkillRequest, payload);

    if (response.status >= 200 && response.status <= 200) {

      let user = response.data;

      yield put(loadSkillUserAction(user));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}


export default function* UsersSaga() {
  yield takeEvery(FETCH_USER_ACTION, fetchUser);
  yield takeEvery(EDIT_USER_ACTION, editUser);
  yield takeEvery(GET_SKILL_USER_ACTION, getSkillUser)
}