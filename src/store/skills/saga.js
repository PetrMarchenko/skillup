import { call, put, takeEvery } from 'redux-saga/effects';

import { EDIT_SKILL_ACTION, editSkillStore, FETCH_SKILL_ACTION, loadSkillStore } from './actions';

import { editSkillRequest, fetchSkillRequest } from 'api/skillRequest';

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


export default function* SkillsSaga() {
  yield takeEvery(FETCH_SKILL_ACTION, fetchSkill);
  yield takeEvery(EDIT_SKILL_ACTION, editSkill);
}