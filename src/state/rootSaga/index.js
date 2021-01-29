import { all } from 'redux-saga/effects';
import { watchGetImages } from '../sagas/imagesSages';

const rootSagas = function* () {
  yield all([watchGetImages()]);
};
export { rootSagas };
