import { put, takeEvery, call, select } from 'redux-saga/effects';
import { getImagesAPI } from '../api';
import { selectPage } from '../selectors';
import { GET_IMAGES } from '../actionTypes';
import {
  getImagesLoading,
  getImagesFailure,
  getImagesSuccess,
} from '../actions';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getImages() {
  try {
    yield put(getImagesLoading());
    const page = yield select(selectPage);
    const images = yield call(getImagesAPI, page);
    // yield delay(10000)
    yield put(getImagesSuccess(images));
  } catch (error) {
    console.log(error, 'from saga');
    yield put(getImagesFailure(error));
  }
}

export function* watchGetImages() {
  yield takeEvery(GET_IMAGES.ACTION, getImages);
}
