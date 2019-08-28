import { call, put, takeEvery } from 'redux-saga/effects';

import {
  ADD_SKILL_ACTION,
  EDIT_SKILL_ACTION,
  editSkillStore,
  FETCH_SKILL_ACTION,
  loadSkillStore,
  addSkillStore,
  DELETE_SKILL_ACTION,
  deleteSkillStore
} from './actions';

import { editSkillRequest, fetchSkillRequest, addSkillRequest, deleteSkillRequest } from 'api/skillRequest';

function* fetchSkill(action) {
  const { payload } = action;

  console.log('fetchSkill');

  try {
    const response = yield call(fetchSkillRequest, payload);

    if (response.status >= 200 && response.status <= 200) {

      /*
      * TODO SORT
      * */
      let Skills = response.data;
      const isDesc = payload.orderBy === 'desc' ? -1 : 1;
      let SkillsSort = Skills.sort(function(a, b){
        if(a[payload.order] < b[payload.order]) { return isDesc; }
        if(a[payload.order] > b[payload.order]) { return -1 * isDesc; }
        return 0;
      });

      yield put(loadSkillStore(SkillsSort));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}

function* editSkill(action) {
  const { payload } = action;
  const response = yield call(editSkillRequest, payload);

  try {
    if (response.status >= 200 && response.status <= 200) {
      yield put(editSkillStore(payload));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

}

function* addSkill(action) {
  const { payload } = action;
  const response = yield call(addSkillRequest, payload);

  try {
    if (response.status >= 200 && response.status <= 201) {
      yield put(addSkillStore(response.data));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

}

function* deleteSkill(action) {
  const { payload } = action;
  const response = yield call(deleteSkillRequest, payload);

  try {
    if (response.status >= 200 && response.status <= 201) {
      yield put(deleteSkillStore(payload));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

}

export default function* SkillsSaga() {
  yield takeEvery(FETCH_SKILL_ACTION, fetchSkill);
  yield takeEvery(EDIT_SKILL_ACTION, editSkill);
  yield takeEvery(ADD_SKILL_ACTION, addSkill);
  yield takeEvery(DELETE_SKILL_ACTION, deleteSkill);
}