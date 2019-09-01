import { call, put, takeEvery } from 'redux-saga/effects';

import {
  EDIT_USER_ACTION,
  editUserStore,
  FETCH_USER_ACTION,
  loadUserStore,
  GET_SKILL_USER_ACTION,
  loadSkillUserAction,
  EDIT_SKILL_USER_ACTION
} from './actions';

import { editUserRequest, fetchUserRequest } from 'api/userRequest';
import { getOneUserSkillRequest, editUserSkillRequest } from 'api/userSkillRequest';
import { fetchSkillRequest } from 'api/skillRequest';
import {loadSkillStore} from "../skills/actions";

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
      let userSkills = response.data.skills;


      const skillsResponse = yield call(fetchSkillRequest, {
        'order' : 'id',
        'orderBy' : 'desc',
      });

      let skills = skillsResponse.data;
      const userSkillsMap = getValues(skills, userSkills);

      yield put(loadSkillUserAction({
        userSkills : userSkillsMap,
        skills : skills
      }));

    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}

const getValues =  (skills, userSkills) => {
  let map = {};
  skills.map(skill => {
    map[skill.id] = (-1 !== userSkills.findIndex(element => element === skill.id));
  });
  return map;
};


function* editSkillUser(action) {
  const { payload } = action;

  try {
    const response = yield call(editUserSkillRequest, payload);

    if (response.status >= 200 && response.status <= 200) {

      // let user = response.data;
      //
      // yield put(loadSkillUserAction(user));
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
  yield takeEvery(GET_SKILL_USER_ACTION, getSkillUser);
  yield takeEvery(EDIT_SKILL_USER_ACTION, editSkillUser)

}