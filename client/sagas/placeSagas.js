import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  SET_DETAILS,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions[SET_DETAILS](randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
