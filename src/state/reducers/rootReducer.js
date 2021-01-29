import { combineReducers } from 'redux';
import { imagesReducer } from './imagesReducer';
console.log('second', imagesReducer);
export const rootReducer = combineReducers({
  images: imagesReducer,
});
