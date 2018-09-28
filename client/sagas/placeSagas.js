import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_PLACE_DETAILS,
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

function* fetchPlaceDetails(action) {
  try {
    const details = yield call(getPlaceDetails, action.payload);
    yield put(placeActions[SET_DETAILS](details));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeEvery(FETCH_PLACE_DETAILS, fetchPlaceDetails);
}

export default placeSagas;
