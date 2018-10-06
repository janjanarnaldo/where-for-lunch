import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_PLACE_DETAILS,
  SET_DETAILS,
  SET_FETCHING,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    yield put(placeActions[SET_FETCHING](true));
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions[SET_DETAILS](randomPlace));
    yield put(placeActions[SET_FETCHING](false));
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
