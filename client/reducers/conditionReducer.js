import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';
import CATEGORIES from 'constants/categories';

const initialState = {
  radius: 500,
  categories: [...CATEGORIES],
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    [actionTypes.SET_CATEGORIES](state, action) {
      return { ...state, categories: action.payload };
    },
  },
  initialState,
);

export default conditionReducer;
